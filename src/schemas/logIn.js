import * as yup from "yup"

export const logInSchema = yup.object().shape({
  email: yup.string()
    .required("Can't be blank")
    .email("It is not valid email"),
  password: yup.string().required("Can't be blank")
})
