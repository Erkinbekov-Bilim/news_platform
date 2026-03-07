import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../features/news/posts/posts.slice';

export const store = configureStore({
  reducer: {
    news: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
