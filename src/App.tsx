import { HashRouter, BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import routes from './Config/routes'
import Navbar from './Components/Navbar'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import AuthChecker from './auth/AuthChecker'

function App() {

  return (
    // TODO: Change to HashRouter ?? 
    <HashRouter>
      <Navbar />
      <Provider store={store}>
        <Routes>
          { routes.map((route: any, index: any) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
                <AuthChecker>
                <route.component />
                </AuthChecker>
                ) : (
                  <route.component />
                )
              }
              />
          )) }
        </Routes>
      </Provider>
    </HashRouter>
  )
}

export default App
