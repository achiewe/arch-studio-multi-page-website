import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required("Can’t be empty"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Can’t be empty"),
  message: yup.string().required("Can’t be empty"),
});
