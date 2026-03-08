import { type FC } from 'react';
import type { IComment } from '../../../../../types/news/news.types';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import AvatarPlaceholder from '../../../../../assets/images/placeholder/avatar_placeholder.png';
import { grey, red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';

interface ICommentProps {
  comment: IComment;
  onDeleteComment: (idComment: string) => void;
}

const CommentItem: FC<ICommentProps> = ({ comment, onDeleteComment }) => {
  const renderContent = () => {
    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={3}
        border={2}
        padding={3}
        borderRadius={6}
      >
        <Box
          width={'300px'}
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          gap={3}
          padding={1}
          sx={{
            background: grey[900],
          }}
          color={grey[50]}
          borderRadius={12}
        >
          <CardMedia
            component="img"
            image={AvatarPlaceholder}
            alt={comment.author}
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: 5,
              background: grey[50],
            }}
          />
          <Typography
            sx={{
              fontWeight: 600,
              letterSpacing: 3,
              fontSize: 12,
            }}
          >
            {comment.author}
          </Typography>
        </Box>
        <Box paddingLeft={3}>
          <Typography>{comment.content}</Typography>
        </Box>
        <Button
          component={'a'}
          sx={{
            width: '250px',
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
          onClick={() => onDeleteComment(comment.id)}
        >
          <Typography>delete comment ok ?</Typography>
        </Button>
      </Box>
    );
  };

  return (
    <>
      <Box>{renderContent()}</Box>
    </>
  );
};

export default CommentItem;
