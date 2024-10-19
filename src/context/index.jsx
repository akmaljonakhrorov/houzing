import { createContext } from "react";

export const Root = createContext();

const RootContext = ({ children }) => {
  return (
    <Root.Provider>
      <PropertiesProvider>{children}</PropertiesProvider>
    </Root.Provider>
  );
};

export default RootContext;
