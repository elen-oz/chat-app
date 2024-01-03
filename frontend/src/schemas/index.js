import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required field'),
  password: yup
    .string()
    .min(6, 'Password should be at least 6 characters')
    .required('Required field'),
});
