import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    // .email('Please enter a valid email')
    .required('Required field'),
  password: yup
    .string()
    .min(5, 'Password should be at least 6 characters')
    .required('Required field'),
});
