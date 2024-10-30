import { Form, Formik } from "formik";
import { initialValues, LoginSchema } from "./helper.ts";
import Input from "../Input/Input.tsx";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import UserStore from "../../stores/UserStore.ts";
import { UserType } from "../../types/user.ts";
import { appRoutes } from "../../lib/appRoutes.ts";
import { useEffect } from "react";

import styles from "./LoginForm.module.css";

function LoginForm() {
  const navigate = useNavigate();

  async function onLogin(values: UserType, { resetForm }: any) {
    await UserStore.login(values.email, values.password);
    if (UserStore.isLoggedIn) {
      navigate(appRoutes.HOME);
    }
    resetForm(values);
  }

  useEffect(() => {
    if (UserStore.isLoggedIn) {
      navigate(appRoutes.HOME);
    }
  }, [UserStore.isLoggedIn, navigate]);

  return (
    <div className={styles.wrapper}>
      <h2>Войти</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onLogin}
        validationSchema={LoginSchema}
      >
        <Form className={styles.form}>
          <Input
            id="email"
            type="email"
            label="Email"
            name="email"
            placeholder="Введите email"
            disabled={UserStore.isLoading}
          />
          <Input
            id="password"
            type="password"
            label="Пароль"
            name="password"
            placeholder="Введите пароль"
            disabled={UserStore.isLoading}
          />
          <button
            type="submit"
            disabled={UserStore.isLoading}
            className={styles.button}
          >
            {UserStore.isLoading ? "Загрузка..." : "Войти"}
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default observer(LoginForm);
