import { Alert, AlertColor, Snackbar } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";

type NotificationContext = {
  idle: () => void;
  show: (type: AlertColor, text: string) => void;
};

const NotifcationContext = React.createContext({});

export function useNotification() {
  const ctx = React.useContext(NotifcationContext);
  if (!ctx) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return ctx as NotificationContext;
}

export function NotificationProvider(props: PropsWithChildren<{}>) {
  const [hasMessageToShow, setHasMessageToShow] = useState(false);
  const [message, setMessage] = useState<{ type: AlertColor; text: string }>();

  const value: NotificationContext = {
    idle() {
      setHasMessageToShow(false);
      setMessage(undefined);
    },
    show(type, text) {
      setMessage({ type, text });
      setHasMessageToShow(true);
    },
  };

  return (
    <NotifcationContext.Provider value={value}>
      {props.children}
      <Snackbar
        open={hasMessageToShow}
        autoHideDuration={6000}
        onClose={value.idle}
      >
        {message && (
          <Alert
            onClose={value.idle}
            severity={message.type}
            sx={{ width: "100%" }}
          >
            {message.text}
          </Alert>
        )}
      </Snackbar>
    </NotifcationContext.Provider>
  );
}
