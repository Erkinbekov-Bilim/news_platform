import { type FC } from 'react';
import type { INewsWithoutContent } from '../../../../../types/news/news.types';
import { Box, CardMedia, Typography } from '@mui/material';
import { API_URL } from '../../../../../constants/constants';
import { formatDate } from '../../../../../utils/formatDate';
import { grey } from '@mui/material/colors';
import ImageContentPlaceholder from '../../../../../assets/images/placeholder/content-placeholder.png';

interface IPostItemProps {
  post: INewsWithoutContent;
}

const PostItem: FC<IPostItemProps> = ({ post }) => {
  const imageURL: string | null = post.image
    ? `${API_URL}/${post.image}`
    : ImageContentPlaceholder;

  const formattedDate = formatDate(post.publication_date);

  const renderImage = () => {
    if (imageURL) {
      return (
        <>
          <CardMedia
            component="img"
            image={imageURL}
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
    }
  };

  return (
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
          width: '450px',
          height: '250px',
          objectFit: 'cover',
        }}
      >
        {renderImage()}
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
  );
};

export default PostItem;
