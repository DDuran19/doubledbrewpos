import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import CheckLoginStatus from './checkloginstatus.jsx'
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
    <CheckLoginStatus />
  </React.StrictMode>,
)
