import React from 'react';
import Counter from "./Counter"
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string
  description?: string
}

const App: React.FC<AppProps> = ({ message }) => {
  return <div><CounterWithReducer /></div>;
}

// 以下のように記述することでデフォルト値を設定することが可能（非推奨）
App.defaultProps = {
  message: "Hello, defaultProps",
  description: "This is App Component"
}

export default App;
