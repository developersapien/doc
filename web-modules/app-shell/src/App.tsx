import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './styles.css'

import remoteRoutes from 'users/routes'

const routes = [...remoteRoutes]
console.log('routes', routes)
const App = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </>
        </Switch>
      </React.Suspense>
    </HashRouter>
  )
}

export default App
