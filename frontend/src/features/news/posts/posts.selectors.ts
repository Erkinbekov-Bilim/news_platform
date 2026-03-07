import type { RootState } from '../../../app/store';

export const selectLoading = (state: RootState) => state.news.loading;
export const selectPosts = (state: RootState) => state.news.posts;
export const selectIsError = (state: RootState) => state.news.isError;
