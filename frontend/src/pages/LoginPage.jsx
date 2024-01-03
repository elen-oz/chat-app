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
import { Formik, Field } from 'formik';

const LoginPage = () => {
  return (
    <Flex bg='gray.100' align='center' justify='center' h='100vh'>
      <Box bg='white' p={6} rounded='4px' w={64}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align='flex-start'>
                <FormControl>
                  <FormLabel htmlFor='email'>Email Address</FormLabel>
                  <Field
                    as={Input}
                    id='email'
                    name='email'
                    type='email'
                    variant='filled'
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <Field
                    as={Input}
                    id='password'
                    name='password'
                    type='password'
                    variant='filled'
                    validate={(value) => {
                      if (value.length <= 6) {
                        return 'Password should be over 6 characters';
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button type='submit' colorScheme='green' w='full'>
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
export default LoginPage;
