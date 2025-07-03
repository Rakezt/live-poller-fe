import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik, FieldArray, FormikProvider } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { createPoll, fetchPolls } from '@/service/api';
import { setAllPolls } from '@/store/pollSlice';
import { PollData } from '@/types/poll.types';

const Create = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const formik = useFormik({
    initialValues: { question: '', options: [{ text: '' }, { text: '' }] },
    validationSchema: Yup.object({
      question: Yup.string().required('Required'),
      options: Yup.array()
        .of(Yup.object({ text: Yup.string().required('Required') }))
        .min(2, 'At least two options'),
    }),
    onSubmit: async (values, { resetForm }) => {
      const createdBy = localStorage.getItem('userName');
      if (!createdBy) {
        alert('Host information not found. Please login again.');
        return;
      }
      const pollPayload: PollData = {
        ...values,
        createdBy,
      };
      await createPoll(pollPayload);
      const res = await fetchPolls();
      dispatch(setAllPolls(res.data));
      resetForm();
      router.push('/polls');
    },
  });

  return (
    <Container sx={{ py: 4 }}>
      <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 4 }}>
        <Typography variant='h5' fontWeight='bold' gutterBottom>
          Create a New Poll
        </Typography>

        <FormikProvider value={formik}>
          <Box
            component='form'
            onSubmit={formik.handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
          >
            <TextField
              fullWidth
              label='Question'
              name='question'
              value={formik.values.question}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.errors.question && formik.touched.question}
              helperText={formik.touched.question && formik.errors.question}
            />

            <FieldArray
              name='options'
              render={(helpers) => (
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 2,
                  }}
                >
                  {formik.values.options.map((_, idx) => (
                    <Box
                      key={idx}
                      sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                      <TextField
                        fullWidth
                        label={`Option ${idx + 1}`}
                        name={`options[${idx}].text`}
                        value={formik.values.options[idx].text}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          !!formik.touched.options?.[idx]?.text &&
                          typeof formik.errors.options?.[idx] === 'object' &&
                          !!(formik.errors.options?.[idx] as { text?: string })
                            ?.text
                        }
                        helperText={
                          formik.touched.options?.[idx]?.text &&
                          typeof formik.errors.options?.[idx] === 'object' &&
                          (formik.errors.options?.[idx] as { text?: string })
                            ?.text
                        }
                      />
                      <IconButton
                        onClick={() => helpers.remove(idx)}
                        disabled={formik.values.options.length <= 2}
                      >
                        <DeleteIcon sx={{ color: 'error.main' }} />
                      </IconButton>
                    </Box>
                  ))}

                  <Button
                    variant='contained'
                    startIcon={<AddIcon />}
                    onClick={() => helpers.push({ text: '' })}
                    sx={{
                      gridColumn: 'span 2',
                      mt: 1,
                      color: 'secondary.contrastText',
                    }}
                  >
                    Add Another Option
                  </Button>
                </Box>
              )}
            />

            <Box sx={{ textAlign: 'right' }}>
              <Button type='submit' variant='contained' size='large'>
                Submit Poll
              </Button>
            </Box>
          </Box>
        </FormikProvider>
      </Paper>
    </Container>
  );
};

export default Create;
