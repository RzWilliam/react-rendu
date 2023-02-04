import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApiContextProvider } from './context/ApiContext';
import { UserContextProvider } from "./context/userContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <UserContextProvider>
        <ApiContextProvider>
          <App />
        </ApiContextProvider>
      </UserContextProvider>  
    </BrowserRouter>
);
