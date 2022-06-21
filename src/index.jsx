import React from 'react';
import ReactDOM from 'react-dom/client';

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

import './styles/index.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@aws-amplify/ui-react/styles.css'; // Ensure React UI libraries are styled correctly

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
