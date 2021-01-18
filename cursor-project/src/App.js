import React from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Home from './home/Home'
import Chart from './charts/Charts'
import TabPanel from "./TabPanel";

const App = () => {
      
    return (
      <div className="App">
        <TabPanel />
        <Router>
          <Route path="/" component={Home} exact={true} />
          <Route path="/charts" component={Chart} />
        </Router>
      </div>
    )
}

export default App;
