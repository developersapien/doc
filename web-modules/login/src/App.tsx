import React, { FC } from 'react'

import { HashRouter, Route, Switch } from 'react-router-dom'

import localRoutes from './routes'

const routes = [...localRoutes]
const App: FC<any> = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </React.Suspense>
    </HashRouter>
  )
}

export default App
