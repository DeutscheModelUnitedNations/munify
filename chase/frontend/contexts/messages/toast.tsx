import React, { createContext, useRef } from "react";
import { Toast, ToastMessage } from "primereact/toast";

export const ToastContext = createContext({} as ToastContextType);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const toast = useRef<Toast>(null);

  const showToast = (message: ToastMessage) => {
    const { summary, detail, severity, sticky } = message;
    toast.current?.show({ summary, detail, severity, sticky });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast ref={toast} />
      {children}
    </ToastContext.Provider>
  );
};

export interface ToastContextType {
  showToast: (message: ToastMessage) => void;
}
