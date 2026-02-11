import React, { useCallback, useContext } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts } = useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id}>
          <Toast toast={toast} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
