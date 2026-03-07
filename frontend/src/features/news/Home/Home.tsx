import Posts from '../components/post/Posts/Posts';
import {
  selectIsError,
  selectLoading,
  selectPosts,
} from '../posts/posts.selectors';
import { useEffect } from 'react';
import { getPosts } from '../posts/posts.thunks';
import { useAppDispatch, useAppSelector } from '../../../app/hooks/reduxHooks';

const Home = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const { fetchLoading } = useAppSelector(selectLoading);
  const isError = useAppSelector(selectIsError);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Posts posts={posts} fetchLoading={fetchLoading} isError={isError} />
    </div>
  );
};

export default Home;
