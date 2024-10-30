import styles from "./Button.module.css";
import { ButtonHTMLAttributes } from "react";
import * as React from "react";
import cn from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
};

function Button({ disabled, children, className, ...props }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(styles.button, className)}
      {...props}
    >
      {disabled ? "Загрузка..." : children}
    </button>
  );
}

export default Button;
