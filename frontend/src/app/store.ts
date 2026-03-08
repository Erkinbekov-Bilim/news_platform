import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../features/news/posts/posts.slice';
import { commentsReducer } from '../features/news/comment/comment.slice';

export const store = configureStore({
  reducer: {
    news: postsReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
