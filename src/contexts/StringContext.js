import { createContext, useContext } from "react";
import useUndo from "../hooks/useUndo";

const StringContext = createContext();

export const useString = () => {
  return useContext(StringContext);
};

export const StringProvider = ({ children }) => {
  const [
    stringState,
    { set: setString, undo: undoString, redo: redoString, canUndo, canRedo },
  ] = useUndo("");
  const { present: string } = stringState;

  const value = {
    string,
    setString,
    undoString,
    redoString,
    canUndo,
    canRedo,
  };
  return (
    <StringContext.Provider value={value}>{children}</StringContext.Provider>
  );
};
