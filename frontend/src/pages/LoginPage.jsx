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

const onSubmit = (values) => {
  console.log('Submitted values:', values);
};

const LoginPage = () => {
  const { values, handleSubmit, errors, touched, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  console.log(errors);

  return (
    <Flex bg='gray.100' align='center' justify='center' h='100vh'>
      <Box bg='white' p={6} rounded='4px' w={64}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align='flex-start'>
            <FormControl isInvalid={!!errors.email && touched.email}>
              <FormLabel htmlFor='email'>Email Address</FormLabel>
              <Input
                id='email'
                name='email'
                type='email'
                variant='filled'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
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
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
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
