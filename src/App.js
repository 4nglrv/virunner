import React from 'react'
import Layout from "./hoc/layout/Layout"
import './App.module.css'
import {Route, Switch } from "react-router-dom"
import Analysis from "./containers/analisys/Analysis"
import Public from "./containers/public/Public"
import AnalysisHistory from "./containers/history/AnalysisHistory"



function App() {
  return (
    <Layout>
        <Switch>
            <Route path={'/analysis'} component={Analysis}/>
            <Route path={'/public'} component={Public} />
            <Route path={'/history'} component={AnalysisHistory} />
        </Switch>
    </Layout>
  )
}

export default App
