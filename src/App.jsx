import { Route, Routes } from "react-router-dom"
/* Rendered anywhere in the app, <Routes> will match a set of child 
    routes from the current location.
  Resource: https://reactrouter.com/en/main/components/routes
  
  Whenever the location changes, <Routes> looks through all its child 
  routes to find the best match and renders that branch of the UI. 
  <Route> elements may be nested to indicate nested UI, which also correspond 
  to nested URL paths. Parent routes render their child routes by rendering 
  an <Outlet>.
  
  
  */

import { Container } from "react-bootstrap"
/* Containers are a fundamental building block of Bootstrap that contain, 
    pad, and align your content within a given device or viewport.
  Resource: https://getbootstrap.com/docs/5.0/layout/containers/   */


/*Below are custom pages and were rendered using Route */
import { Home } from "./pages/Home"
import { Pos } from "./pages/Pos"
import { Inventory } from "./pages/Inventory"
import { Navbar } from "./components/Navbar"

export default function App() {
    return (
        <>

            <Navbar />
            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/pos" element={<Pos />}></Route>
                    <Route path="/inventory" element={<Inventory />}></Route>

                </Routes>
            </Container>
        </>
    )
}

