import React, { createContext, useEffect, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function createToast(message, variant) {
    const nextTaosts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextTaosts);
  }

  function dismissToast(id) {
    const nextTaosts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextTaosts);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        setToasts([]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
