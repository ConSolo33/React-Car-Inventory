import { HashRouter, BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import routes from './Config/routes'
import Navbar from './Components/Navbar'

function App() {

  return (
    // TODO: Change to HashRouter ?? 
    <BrowserRouter>
      <Navbar />
      <Routes>
        { routes.map((route: any, index: any) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.component />
            }
            />
        )) }
      </Routes>
    </BrowserRouter>
  )
}

export default App
