import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Flex,
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { loginSchema } from '../schemas';
import useAuth from '../hooks/index';
import routes from '../routes.js';

const LoginPage = () => {
  const auth = useAuth();
  const [authFailed, setAuthFailed] = useState(false);
  const inputRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // console.log('location', location);

  const onSubmit = async (values) => {
    setAuthFailed(false);

    console.log('Submitted values:', values);

    const axiosInstance = axios.create({
      baseURL: 'http://localhost:5001',
    });

    try {
      const response = await axiosInstance.post(routes.loginPath(), values);
      localStorage.setItem('userId', JSON.stringify(response.data));
      auth.logIn();
      // const { from } = location.state;
      // navigate(from);
      navigate('/private');
    } catch (error) {
      console.error('Login failed:', error);
      setSubmitting(false);
      if (error.isAxiosError && error.response.status === 401) {
        setAuthFailed(true);
        inputRef.current.select();
        return;
      }

      throw error;
    }
  };

  const {
    values,
    handleSubmit,
    errors,
    handleChange,
    handleBlur,
    touched,
    setSubmitting,
  } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <Flex bg='gray.100' align='center' justify='center' h='100%'>
      <Box bg='white' p={6} rounded='4px' w={64}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align='flex-start'>
            <FormControl isInvalid={!!errors.username && touched.username}>
              <FormLabel htmlFor='username'>Username</FormLabel>
              <Input
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                id='username'
                name='username'
                placeholder='username'
                isInvalid={authFailed}
                ref={inputRef}
                required
                variant='filled'
              />
              <FormErrorMessage>{errors.username}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password && touched.password}>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input
                id='password'
                name='password'
                type='password'
                variant='filled'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='password'
                isInvalid={authFailed}
                required
              />

              <FormErrorMessage>{errors.password}</FormErrorMessage>

              {/* <Form.Control.Feedback type='invalid'>
                the username or password is incorrect
              </Form.Control.Feedback> */}
            </FormControl>
            <Button type='submit' colorScheme='green' w='full'>
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default LoginPage;
