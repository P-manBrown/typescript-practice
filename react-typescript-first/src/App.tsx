import React from 'react';

interface AppProps {
  message?: string
  description?: string
}

const App: React.FC<AppProps> = ({ message }) => {
  return <div>{message}</div>;
}

App.defaultProps = {
  message: "Hello, defaultProps",
  description: "This is App Component"
}

export default App;
