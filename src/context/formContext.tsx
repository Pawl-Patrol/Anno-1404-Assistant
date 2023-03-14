import React, { PropsWithChildren } from "react";
import { Process } from "../lib/process";

type Form = {
  processList: Process[];
  process?: Process;
  gameVersionIndex?: number;
  alwaysOnTop?: boolean;
  updateInterval?: number;
  layoutPath: string[];
  imageIndex?: number;
};

const defaultFormState: Form = {
  processList: [],
  layoutPath: [],
};

function createFormState(
  state: Form,
  setState: React.Dispatch<React.SetStateAction<Form>>
) {
  function merge<T extends keyof Form>(other: {
    [K in T]: Form[K];
  }) {
    setState((state) => ({ ...state, ...other }));
  }

  return {
    ...state,
    setState,
    merge,
  };
}

const FormContext = React.createContext<ReturnType<
  typeof createFormState
> | null>(null);

export function FormProvider(props: PropsWithChildren<{}>) {
  const [state, setState] = React.useState<Form>(defaultFormState);
  const value = createFormState(state, setState);
  return (
    <FormContext.Provider value={value}>{props.children}</FormContext.Provider>
  );
}

export function useForm() {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error("useFormState must be used within a FormStateProvider");
  }
  return context;
}
