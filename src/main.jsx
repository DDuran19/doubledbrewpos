import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter } from 'react-router-dom'
/*A <BrowserRouter> stores the current location in the browser's address bar 
    using clean URLs and navigates using the browser's built-in history stack.
  USAGE: 
  basename: Configure your application to run underneath a specific basename in the URL:

  function App() {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" /> {}// 👈 Renders at /app/ 
      </Routes>
      </BrowserRouter>
    );
  }
    REFERENCE: https://reactrouter.com/en/main/start
    
    */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
