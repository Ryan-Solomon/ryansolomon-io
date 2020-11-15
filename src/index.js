import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FormspreeProvider project='1547801089573650077'>
        <App />
      </FormspreeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
