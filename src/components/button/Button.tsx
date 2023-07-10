"use client";
import { forwardRef } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps {
  text?: string;
  disabled?: boolean;
  width?: any;
  minWidth?: any;
  height?: any;
  minHeight?: any;
  type?: "contained" | "outlined";
  onClick: () => void;
  alignSelf?: "auto" | "center" | "flex-start" | "flex-end";
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      text,
      disabled = false,
      type = "contained",
      onClick,
      width = "auto",
      minWidth = "auto",
      height = "2.5rem",
      minHeight = "auto",
      alignSelf = "auto",
    },
    ref
  ) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${styles.button} ${clsx({
          [styles.contained]: type === "contained",
          [styles.outlined]: type === "outlined",
        })}`}
        ref={ref}
        style={{
          alignSelf: alignSelf,
          width: width,
          height: height,
          minWidth: minWidth,
          minHeight: minHeight,
        }}
      >
        {text}
      </button>
    );
  }
);
