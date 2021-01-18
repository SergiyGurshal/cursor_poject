import React from 'react'
import chartsIcon from '../imgs/charts_icon.svg'

import { Link } from 'react-router-dom'

import './Home.css'

import { Table } from '../table/Table'
import Modal from '../modal/Modal'
import TabPanel from '../tabs/TabPanel'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }
  modalShowHandler = () => {
    this.setState({ showModal: true })
  }
  render() {
    return (
      <div>
        {/* контейнер з основними компонентами */}
        <div className="mainHome">
          <TabPanel />
          <Table />
          <Modal showModal={this.state.showModal} />
          <button type="button" className="addBtn" onClick={() => this.modalShowHandler()}>
            +
          </button>
        </div>

        {/* лінка на сторінку графіків*/}
        <Link to="/charts">
          <button className="navBtnCharts">
            <img src={chartsIcon} alt="Home icon" />
          </button>
        </Link>
      </div>
    )
  }
}

export default Home
