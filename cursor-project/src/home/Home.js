import React from 'react'
import chartsIcon from '../imgs/charts_icon.svg'

import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './Home.css'

export default () => {
  return (
    <div>
      {/* контейнер з основними компонентами */}
      <div className="mainHome">
        <h1>Home Page</h1>
      </div>

      {/* лінка на сторінку графіків*/}
      <Link to="/charts">
        <button className="navBtnCharts">
          <img src={chartsIcon} />
        </button>
      </Link>
    </div>
  )
}
