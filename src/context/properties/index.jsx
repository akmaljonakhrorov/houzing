import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const PropertiesContext = createContext();

const PropertiesProvider = ({ children }) => {
  const [state, dispact] = useReducer(reducer, 0);
  return (
    <PropertiesContext.Provider value={[state, dispact]}>
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
