//index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component or the component you want to render
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
