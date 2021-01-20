import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './home/Home'
import Chart from './charts/Charts'

const App = () => {
  //якщо в LocalStorage немає поля id створює його
  useEffect(() => {
    if (!localStorage.getItem('id')) {
      localStorage.setItem('id', '')
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} exact={true} />
        <Route path="/charts" component={Chart} />
      </Router>
    </div>
  )
}

export default App
