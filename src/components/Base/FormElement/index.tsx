import { useState } from "react";
import { configureStore } from "@reduxjs/toolkit";
import styles from "./style.module.scss";

type TProps = {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  type: string;
};

export const BaseFormElement = ({ name, errorMessage, ...other }: TProps) => {
  return (
    <>
      <label className="m-1">{name}</label>
      <input
        name={name}
        className={`outline-none m-1 p-1 rounded-md border-mateColors-0 border-solid border ${styles.inputEl}`}
        {...other}
      />
      <span className="text-red-700 hidden">{errorMessage}</span>
    </>
  );
};
