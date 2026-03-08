import { type ChangeEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';
import type { INewsMutation } from '../../../../../types/news/news.types';
import { useNavigate } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../app/hooks/reduxHooks';
import { selectLoading } from '../../../posts/posts.selectors';
import { createPost } from '../../../posts/posts.thunks';
import { Box, Button, TextField, Typography } from '@mui/material';
import FileInput from '../../../../../UI/FileInput/FileInput';
import { grey } from '@mui/material/colors';
import type { CSSProperties } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';

const inputStyle: CSSProperties = {
  width: '100%',
  borderRadius: '16px 16px 5px 5px',
  background: 'white',
  color: grey[900],
};

const PostForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { sendLoading } = useAppSelector(selectLoading);
  const defaultValues: INewsMutation = {
    title: '',
    content: '',
    image: null,
  };
  const { control, handleSubmit, reset, setValue } = useForm<INewsMutation>({
    defaultValues,
  });

  const onSubmit = (data: INewsMutation) => {
    dispatch(createPost(data))
      .then(() => reset())
      .then(() => navigate('/'));
  };

  const onChangeFileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;

    if (files && files[0] && name === 'image') {
      setValue(name, files[0]);
    }
  };

  return (
    <Box
      sx={{
        width: '750px',
        height: 'auto',
        backgroundColor: grey[900],
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: 5,
      }}
    >
      <Typography
        variant="h4"
        component="p"
        sx={{
          color: 'white',
          paddingTop: 4,
          fontSize: 18,
          textTransform: 'uppercase',
          letterSpacing: 3,
          textAlign: 'center',
        }}
      >
        Create post
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            padding: '30px 40px 40px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Box sx={inputStyle}>
            <Controller
              name="title"
              control={control}
              rules={{
                required: 'Title is required',
                minLength: {
                  value: 3,
                  message: 'Title must be at least 3 characters',
                },
                maxLength: {
                  value: 100,
                  message: 'Title must be at most 100 characters',
                },
                validate: (value) => value.trim() !== '' || 'Title is required',
              }}
              render={({ field, fieldState }) => (
                <>
                  <TextField
                    {...field}
                    sx={inputStyle}
                    variant="filled"
                    required
                    label="Title"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                </>
              )}
            />
          </Box>

          <Box
            sx={{
              ...inputStyle,
              overflow: 'hidden',
            }}
          >
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    sx={{
                      ...inputStyle,
                      maxHeight: '200px',
                      overflow: 'auto',
                      '&::-webkit-scrollbar': {
                        width: '0.4rem',
                      },
                      '&::-webkit-scrollbar-track': {
                        background: grey[400],
                      },
                      '&::-webkit-scrollbar-thumb': {
                        backgroundColor: grey[800],
                        borderRadius: '10px',
                      },
                      '&::-webkit-scrollbar-thumb:hover': {
                        background: '#555',
                      },
                    }}
                    variant="filled"
                    label="Content"
                    multiline
                  />
                </>
              )}
            />
          </Box>

          <Box>
            <Controller
              name="image"
              control={control}
              render={() => (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      background: 'white',
                      padding: 2,
                      borderRadius: 5,
                    }}
                  >
                    <Typography
                      component="p"
                      sx={{
                        color: grey[900],
                        textTransform: 'uppercase',
                        letterSpacing: 2,
                        fontSize: 14,
                      }}
                    >
                      Image (optional)
                    </Typography>
                    <Box
                      sx={{
                        margin: '0 auto',
                        padding: 3,
                        borderRadius: 5,
                        overflow: 'hidden',
                      }}
                    >
                      <FileInput
                        name="image"
                        label="Upload image"
                        onChange={onChangeFileHandler}
                      />
                    </Box>
                  </Box>
                </>
              )}
            />
          </Box>

          <Box>
            <Button
              type="submit"
              endIcon={<SendIcon />}
              loading={sendLoading}
              sx={{
                width: '100%',
                borderRadius: '5px 5px 16px 16px',
                background: 'white',
                color: grey[900],
                textTransform: 'uppercase',
                letterSpacing: 2,
                fontSize: 14,
                padding: '15px 0',
                border: 1,
                '&:hover': {
                  background: grey[900],
                  color: 'white',
                  transition: 'all 0.2s ease-in-out',
                  border: 1,
                  borderColor: 'white',
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default PostForm;
