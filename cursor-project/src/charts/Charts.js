import React from 'react'
import homeIcon from '../imgs/home_icon.svg'

import './Charts.css'

import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

export default () => {
  return (
    <div>
      {/* контейнер з основними компонентами */}
      <div className="mainCharts">
        <h1>Charts Page</h1>
      </div>

      {/* лінка на головну сторінку */}
      <Link to="/">
        <button className="navBtnHome">
          <img src={homeIcon} />
        </button>
      </Link>
    </div>
  )
}
