// pages/login.tsx
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createUser } from '@/service/api';
// import { UserRole } from '@/types/poll.types';

export enum UserRole {
  HOST = 'host',
  ATTENDEE = 'attendee',
}

interface FormValues {
  role: UserRole | '';
  name: string;
  pollId: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<FormValues['role'] | ''>('');

  const formik = useFormik<FormValues>({
    initialValues: { role: '', name: '', pollId: '' },
    validationSchema: Yup.object({
      role: Yup.string().oneOf(Object.values(UserRole)).required('Select role'),
      name: Yup.string().required('Name is required'),
      pollId: Yup.string().when('role', {
        is: 'attendee',
        then: (schema) => schema.required('Poll ID is required'),
        otherwise: (schema) => schema,
      }),
    }),
    onSubmit: async (values) => {
      try {
        // Save user in DB
        await createUser({
          name: values.name,
          role: values.role as UserRole,
          pollId: values.role === 'attendee' ? values.pollId : undefined,
        });

        // Redirect based on role
        if (values.role === 'host') {
          localStorage.setItem('userName', values.name);
          localStorage.setItem('role', values.role);
          router.push('/home');
        } else {
          localStorage.setItem('userName', values.name);
          localStorage.setItem('role', values.role);
          router.push(`/polls/${values.pollId}`);
        }
      } catch (err) {
        router.push({
          pathname: '/error',
          query: {
            statusCode: 0,
            message:
              err instanceof Error ? err.message : 'An unknown error occurred',
          },
        });
      }
    },
  });

  const handleRoleChange = (e: SelectChangeEvent) => {
    setRole(e.target.value as FormValues['role']);
    formik.setFieldValue('role', e.target.value);
    // clear pollId if switching role
    if (e.target.value === 'host') {
      formik.setFieldValue('pollId', '');
    }
  };

  return (
    <Container maxWidth='sm' sx={{ py: 6 }}>
      <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 4 }}>
        <Typography variant='h5' fontWeight='bold' gutterBottom>
          Welcome to LivePoller
        </Typography>

        <Box
          component='form'
          onSubmit={formik.handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
        >
          {/* Role selector */}
          <FormControl fullWidth>
            <InputLabel id='role-label'>I am a</InputLabel>
            <Select
              labelId='role-label'
              id='role'
              name='role'
              value={role}
              label='I am a'
              onChange={handleRoleChange}
              error={formik.touched.role && Boolean(formik.errors.role)}
            >
              <MenuItem value='host'>Host</MenuItem>
              <MenuItem value='attendee'>Attendee</MenuItem>
            </Select>
            {formik.touched.role && formik.errors.role && (
              <Typography variant='caption' color='error'>
                {formik.errors.role}
              </Typography>
            )}
          </FormControl>

          {/* Name field */}
          <TextField
            fullWidth
            id='name'
            name='name'
            label={role === 'host' ? 'Host Name' : 'Your Name'}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          {/* Poll ID only for attendee */}
          {role === 'attendee' && (
            <TextField
              fullWidth
              id='pollId'
              name='pollId'
              label='Poll ID'
              value={formik.values.pollId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.pollId && Boolean(formik.errors.pollId)}
              helperText={formik.touched.pollId && formik.errors.pollId}
            />
          )}

          <Button
            type='submit'
            variant='contained'
            size='large'
            disabled={!formik.isValid || formik.isSubmitting}
            endIcon={
              formik.isSubmitting ? (
                <span
                  className='MuiCircularProgress-root MuiCircularProgress-indeterminate'
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft: 8,
                    display: 'inline-block',
                  }}
                >
                  <svg
                    className='MuiCircularProgress-svg'
                    viewBox='22 22 44 44'
                  >
                    <circle
                      className='MuiCircularProgress-circle'
                      cx='44'
                      cy='44'
                      r='20.2'
                      fill='none'
                      strokeWidth='3.6'
                    />
                  </svg>
                </span>
              ) : null
            }
          >
            {formik.isSubmitting ? 'Loading...' : 'Continue'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
