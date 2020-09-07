import React from 'react'
import Layout from "./hoc/layout/Layout"
import {Route, Switch} from "react-router-dom"
import Analysis from "./containers/analisys/Analysis";
import './App.module.css'



function App() {
  return (
    <Layout>
      <Switch>
        <Route path={'/analysis'} component={Analysis} />
      </Switch>
    </Layout>
  )
}

export default App
