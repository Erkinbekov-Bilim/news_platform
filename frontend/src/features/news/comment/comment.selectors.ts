import type { RootState } from '../../../app/store';

export const selectLoading = (state: RootState) => state.comments.loading;
export const selectComments = (state: RootState) => state.comments.comments;
export const selectIsError = (state: RootState) => state.comments.isError;
