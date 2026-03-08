import { useCallback, useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../app/hooks/reduxHooks';
import {
  selectComments,
  selectIsError,
  selectLoading,
} from '../../../comment/comment.selectors';
import { deleteComment, getComments } from '../../../comment/comment.thunks';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Loader from '../../../../../UI/Loader/Loader';
import CommentItem from '../CommentItem/CommentItem';
import { grey } from '@mui/material/colors';
import CommentForm from '../CommentForm/CommentForm';

const Comments = () => {
  const { id: idNews } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectComments);
  const { fetchLoading, deleteLoading } = useAppSelector(selectLoading);
  const isError = useAppSelector(selectIsError);

  const getCommentsById = useCallback(async () => {
    if (idNews) {
      dispatch(getComments({ idNews }));
    }
  }, [dispatch, idNews]);

  useEffect(() => {
    getCommentsById();
  }, [getCommentsById]);

  const onDeleteComment = async (idComment: string) => {
    await dispatch(deleteComment({ id: idComment }));
    await getCommentsById();
  };

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

    if (!fetchLoading && comments.length === 0) {
      return (
        <Box
          padding={4}
          sx={{
            background: grey[900],
          }}
          color={grey[50]}
        >
          <Typography letterSpacing={3} fontSize={18} textAlign="center">
            No comments yet. Be the first to comment!
          </Typography>
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
        {comments.map((comment) => {
          return (
            <>
              {deleteLoading ? (
                <Box key={comment.id}>
                  <Loader />
                </Box>
              ) : (
                <CommentItem
                  comment={comment}
                  key={comment.id}
                  onDeleteComment={onDeleteComment}
                />
              )}
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Box>
        <Typography
          sx={{
            background: grey[900],
            color: grey[50],
            fontSize: 16,
            textAlign: 'center',
            padding: '15px',
            textTransform: 'uppercase',
            letterSpacing: 3,
            borderRadius: 12,
          }}
        >
          comments
        </Typography>
        <Box>{idNews && <CommentForm idNews={idNews} />}</Box>
        <Box display={'flex'} flexDirection={'column'} gap={3} mt={5}>
          {renderContent()}
        </Box>
      </Box>
    </>
  );
};

export default Comments;
