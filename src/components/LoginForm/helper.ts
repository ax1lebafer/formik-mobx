import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
};

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Не верный e-mail").required("Введите email"),
  password: Yup.string().required("Введите пароль"),
});
