import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NameProvider } from './context/Context';


ReactDOM.render(
  <NameProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </NameProvider>,
  document.getElementById('root')
);
