import { createSlice } from '@reduxjs/toolkit';
import type { IComment } from '../../../types/news/news.types';
import { getComments } from './comment.thunks';

export interface ICommentsState {
  comments: IComment[];
  loading: {
    fetchLoading: boolean;
    sendLoading: boolean;
    deleteLoading: boolean;
  };
  isError: boolean;
}

const initialState: ICommentsState = {
  comments: [],
  loading: {
    fetchLoading: false,
    sendLoading: false,
    deleteLoading: false,
  },
  isError: false,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.pending, (state) => {
      state.loading.fetchLoading = true;
    });
    builder.addCase(getComments.fulfilled, (state, { payload: comments }) => {
      state.loading.fetchLoading = false;
      state.comments = comments;
    });
    builder.addCase(getComments.rejected, (state) => {
      state.loading.fetchLoading = false;
      state.isError = true;
    });
  },
});

export const commentsReducer = commentsSlice.reducer;
