import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  IComment,
  ICommentMutation,
} from '../../../types/news/news.types';
import axiosApi from '../../../api/axiosApi';
import type { AppDispatch } from '../../../app/store';

export const getComments = createAsyncThunk<IComment[], { idNews: string }>(
  'news/getComments',
  async ({ idNews }) => {
    const response = await axiosApi.get<IComment[]>(
      `/comments?news_id=${idNews}`,
    );
    const comments = response.data;

    return comments;
  },
);

export const deleteComment = createAsyncThunk<
  void,
  { id: string }
>('news/deleteComment', async ({ id }) => {
  await axiosApi.delete(`/comments/${id}`);
});

export const createComment = createAsyncThunk<
  void,
  { idNews: string; comment: ICommentMutation },
  { dispatch: AppDispatch }
>('news/createComment', async ({ idNews, comment }, { dispatch }) => {
  await axiosApi.post('/comments', { ...comment, news_id: idNews });
  dispatch(getComments({ idNews }));
});
