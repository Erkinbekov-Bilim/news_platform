import { type FC } from 'react';
import type { INewsWithoutContent } from '../../../../../types/news/news.types';
import Loader from '../../../../../UI/Loader/Loader';
import { Box, Typography } from '@mui/material';
import PostItem from '../PostItem/PostItem';
import { grey } from '@mui/material/colors';

interface IPostsProps {
  posts: INewsWithoutContent[];
  fetchLoading: boolean;
  isError: boolean;
}

const Posts: FC<IPostsProps> = ({ posts, fetchLoading, isError }) => {
  const renderContent = () => {
    if (fetchLoading) {
      return (
        <>
          <Box
            sx={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Loader />
          </Box>
        </>
      );
    }

    if (!fetchLoading && posts.length === 0) {
      return (
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <p className="posts-empty">No posts</p>
        </Box>
      );
    }

    if (isError) {
      return (
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <p className="posts-error">Error</p>
        </Box>
      );
    }

    return (
      <>
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </>
    );
  };

  return (
    <>
      <Box sx={{ marginTop: 5 }}>
        <Typography
          component="p"
          sx={{
            marginBottom: 2,
            backgroundColor: grey[900],
            color: grey[50],
            padding: '20px 35px',
            borderRadius: 12,
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: 3,
          }}
        >
          Posts
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {renderContent()}
        </Box>
      </Box>
    </>
  );
};

export default Posts;
