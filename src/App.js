import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Cabinet from './components/Cabinet'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/cabinet" component={Cabinet} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
