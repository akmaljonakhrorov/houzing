const RootContext = ({ children }) => {
  return (
    <>
      <PropertiesProvider>{children}</PropertiesProvider>
    </>
  );
};

export default RootContext;
