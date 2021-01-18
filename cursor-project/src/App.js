import './App.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

// import Chart from './charts/bar-chart/bar-chart'
import Home from './home/Home'
import Chart from './charts/Charts'

function App() {
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