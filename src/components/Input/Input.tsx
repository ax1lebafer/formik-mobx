import { Field, ErrorMessage as Error } from "formik";
import styles from "./Input.module.css";

type InputProps = {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type: string;
};

export default function Input({
  id,
  label,
  name,
  placeholder,
  type,
}: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <Field name={name} id={id} type={type} placeholder={placeholder} />
      <Error name={name}>{(error) => <span>{error}</span>}</Error>
    </div>
  );
}
