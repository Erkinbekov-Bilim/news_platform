import { createSlice } from '@reduxjs/toolkit';
import type { INewsWithoutContent } from '../../../types/news/news.types';
import { createPost, deletePost, getPosts } from './posts.thunks';

export interface IPostsState {
  posts: INewsWithoutContent[];
  loading: {
    fetchLoading: boolean;
    sendLoading: boolean;
    deleteLoading: boolean;
  };
  isError: boolean;
}

const initialState: IPostsState = {
  posts: [],
  loading: {
    fetchLoading: false,
    sendLoading: false,
    deleteLoading: false,
  },
  isError: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading.fetchLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, { payload: posts }) => {
        state.loading.fetchLoading = false;
        state.posts = posts;
      })
      .addCase(getPosts.rejected, (state) => {
        state.loading.fetchLoading = false;
        state.isError = true;
      })

      .addCase(createPost.pending, (state) => {
        state.loading.sendLoading = true;
      })
      .addCase(createPost.fulfilled, (state) => {
        state.loading.sendLoading = false;
      })
      .addCase(createPost.rejected, (state) => {
        state.loading.sendLoading = false;
        state.isError = true;
      })

      .addCase(deletePost.pending, (state) => {
        state.loading.deleteLoading = true;
      })
      .addCase(deletePost.fulfilled, (state) => {
        state.loading.deleteLoading = false;
      })
      .addCase(deletePost.rejected, (state) => {
        state.loading.deleteLoading = false;
        state.isError = true;
      });
  },
});

export const postsReducer = postsSlice.reducer;
