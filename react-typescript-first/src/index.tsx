import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// type Foo = JSX.IntrinsicAttributes
// interface IntrinsicAttributes extends React.Attributes { }
//  interface Attributes {
//   key?: Key;
// }
// 上記の通りkeyでエラーは発生しない

// index.htmlのid=rootの箇所を<App />に置き換える
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
