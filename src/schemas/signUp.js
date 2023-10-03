import * as yup from 'yup'

export const signUpSchema = yup.object().shape({
  email: yup.string()
    .required("Can't be blank")
    .email("It is not valid email"),
  username: yup.string().required("Can't be blank"),
  password: yup.string()
    .required("Can't be blank")
    .min(8, "Password is too short (minimum 8 characters)")
    .max(64, "Password is too long (maximum 64 characters)")
    .matches(
      /^(?=.*\d)(?=.*[a-z])([^\s]){8,16}$/,
      "Password must contain: minimum 8 characters and at least 1 lowercase letter"
    ),
  confirmPassword: yup.string()
    .required("Can't be blank")
    .oneOf([yup.ref("password"), null], "Password must match")
})
