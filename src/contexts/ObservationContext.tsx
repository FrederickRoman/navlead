import { useState, createContext } from "react";

interface Props {
  children: React.ReactNode;
}

interface Value {
  observed: boolean;
  setObserved: React.Dispatch<React.SetStateAction<boolean>>;
}

const DEFAULT_VALUE: Value = Object.freeze({
  observed: false,
  setObserved: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
});
const ObservationContext: React.Context<Value> = createContext(DEFAULT_VALUE);

function ObservationContextProvider(props: Props): JSX.Element {
  const [observed, setObserved] = useState<boolean>(false);
  return (
    <ObservationContext.Provider value={{ observed, setObserved }}>
      {props.children}
    </ObservationContext.Provider>
  );
}

export { ObservationContext };
export default ObservationContextProvider;
