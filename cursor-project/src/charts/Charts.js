import React from 'react'
import homeIcon from '../imgs/home_icon.svg'
import ChartBar from './bar-chart/bar-chart'

import './Charts.css'

import { Link } from 'react-router-dom'

const Charts = () => {
  return (
    <div>
      {/* контейнер з основними компонентами */}
      <div className="mainCharts">
        <ChartBar />
      </div>

      {/* лінка на головну сторінку */}
      <Link to="/">
        <button className="navBtnHome">
          <img src={homeIcon} alt="ChartsIcon" />
        </button>
      </Link>
    </div>
  )
}

export default Charts
