import { Form, Formik } from "formik";
import { initialValues, LoginSchema } from "./helper.ts";
import Input from "../Input/Input.tsx";

import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <div className={styles.wrapper}>
      <h2>Войти</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={LoginSchema}
      >
        <Form className={styles.form}>
          <Input
            id="email"
            type="email"
            label="Email"
            name="email"
            placeholder="Введите email"
          />
          <Input
            id="password"
            type="password"
            label="Пароль"
            name="password"
            placeholder="Введите пароль"
          />
          <button type="submit" className={styles.button}>
            Войти
          </button>
        </Form>
      </Formik>
    </div>
  );
}
