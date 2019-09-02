// eslint-disable-next-line no-unused-vars
import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Results from "./Components/Results"
import HomePage from "./Components/HomePage"

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route path="/results" component={Results} />
    </React.Fragment>
  </Router>
)

export default App
