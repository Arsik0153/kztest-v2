import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Cabinet from './components/Cabinet'
import TestDetails from './components/TestDetails/TestDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/cabinet" component={Cabinet} />
        <Route path="/test/:id" component={TestDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
