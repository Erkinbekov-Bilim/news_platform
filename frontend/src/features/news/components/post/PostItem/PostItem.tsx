import { type FC } from 'react';
import type { INewsWithoutContent } from '../../../../../types/news/news.types';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import { formatDate } from '../../../../../utils/formatDate';
import { grey, red, teal } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../app/hooks/reduxHooks';
import { deletePost } from '../../../posts/posts.thunks';
import { selectLoading } from '../../../posts/posts.selectors';
import Loader from '../../../../../UI/Loader/Loader';
import { Link } from 'react-router-dom';
import { getImageURL } from '../../../helper/renderImage';

interface IPostItemProps {
  post: INewsWithoutContent;
}

const PostItem: FC<IPostItemProps> = ({ post }) => {
  const dispatch = useAppDispatch();
  const { deleteLoading } = useAppSelector(selectLoading);
  const formattedDate = formatDate(post.publication_date);

  const renderImage = () => {
    return (
      <>
        <CardMedia
          component="img"
          image={getImageURL(post)}
          alt={post.title}
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: 5,
            border: 3,
            borderColor: grey[900],
          }}
        />
      </>
    );
  };

  const onDeletePost = async (id: number) => {
    await dispatch(deletePost(id));
  };

  return (
    <>
      {deleteLoading ? (
        <Box>
          <Loader />
        </Box>
      ) : (
        <>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              borderBottom: 1,
              borderBottomColor: grey[900],
              borderBottomStyle: 'solid',
              paddingBottom: 2,
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: '450px',
                  height: '250px',
                  objectFit: 'cover',
                }}
              >
                {renderImage()}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Button
                  component={Link}
                  to={`/news/${post.id}`}
                  sx={{
                    width: '45%',
                    color: teal[50],
                    background: teal[500],
                    borderRadius: 5,
                    border: 1,
                    borderColor: teal[50],
                    '&:hover': {
                      background: teal[50],
                      color: teal[500],
                      border: 1,
                      borderColor: teal[500],
                    },
                  }}
                  endIcon={<MoreHorizIcon />}
                >
                  <Typography>read full post</Typography>
                </Button>
                <Button
                  component={'a'}
                  sx={{
                    width: '45%',
                    color: red[50],
                    background: red[500],
                    borderRadius: 5,
                    border: 1,
                    borderColor: red[50],
                    '&:hover': {
                      background: red[50],
                      color: red[500],
                      border: 1,
                      borderColor: red[500],
                    },
                  }}
                  endIcon={<DeleteIcon />}
                  onClick={() => onDeletePost(post.id)}
                >
                  <Typography>delete post</Typography>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: 1,
                borderColor: grey[900],
                padding: 5,
                position: 'relative',
                top: '-10px',
                left: '-50px',
                background: 'white',
                boxShadow:
                  ' rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
                borderRadius: 7,
              }}
            >
              <Typography
                variant="h5"
                component="p"
                sx={{
                  letterSpacing: 2,
                  width: '100%',
                  height: 'auto',
                  overflowWrap: 'break-word',
                  fontWeight: 600,
                }}
              >
                {post.title}
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                sx={{
                  color: grey[500],
                  letterSpacing: 3,
                  marginTop: 2,
                }}
              >
                {formattedDate}
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default PostItem;
