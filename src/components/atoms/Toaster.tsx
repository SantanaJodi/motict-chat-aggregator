import {
  SnackbarErrorIcon,
  SnackbarSuccessIcon,
  SnackbarWarningIcon,
} from "@/public/icons/outline";
import React from "react";
import { Toaster as RHToaster } from "react-hot-toast";
interface ToasterProps {}

const Toaster: React.FC<ToasterProps> = () => {
  return (
    <RHToaster
      toastOptions={{
        style: {
          padding: 16,
          borderRadius: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          width: 360,
          maxWidth: "none",
          color: "#fff",
          margin: 0,
        },
        duration: 3000,
        success: {
          icon: <SnackbarSuccessIcon />,
          style: {
            background: "#4ABF71",
          },
        },
        error: {
          icon: <SnackbarErrorIcon />,
          style: {
            background: "#C02716",
          },
        },
        custom: {
          id: "warning",
          icon: <SnackbarWarningIcon />,
          style: {
            background: "#F0A22E",
          },
        },
      }}
    />
  );
};

export default Toaster;
