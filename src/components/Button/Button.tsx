import styles from "./Button.module.css";
import { ButtonHTMLAttributes } from "react";
import * as React from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
};

function Button({ disabled, children, ...props }: ButtonProps) {
  return (
    <button disabled={disabled} className={styles.button} {...props}>
      {disabled ? "Загрузка..." : children}
    </button>
  );
}

export default Button;
