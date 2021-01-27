import React from 'react'
import chartsIcon from '../imgs/charts_icon.svg'

import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './Home.css'

import { HomeTable } from '../table/Table'
import Modal from '../modal/Modal'
// import { render } from '@testing-library/react'



 class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      showActionButtons: false
    }   
  }
  showActionButtonsHandler = () => {
    this.setState({showActionButtons: true})
  }
  modalShowHandler = () => {
    this.setState({showModal: true})
  }
  modalHideHandler = () => {
    this.setState({showModal: false})
  }
  render() {
    return (
      <div>
        {/* контейнер з основними компонентами */}
        <div className="mainHome">
          <h1>Home Page</h1>
        </div>
        {console.log(this.props)}
        <HomeTable showActionButtonsHandler = {this.showActionButtonsHandler} showActionButtons = {this.state.showActionButtons}/>
        <Modal showModal = {this.state.showModal} modalHideHandler = {this.modalHideHandler}/>
        <button type='button' className='addBtn' onClick={this.modalShowHandler}>+</button>
        {/* лінка на сторінку графіків*/}
        <Link to="/charts">
          <button className="navBtnCharts">
            <img src={chartsIcon} />
          </button>
        </Link>
      </div>
    )
  }
}

export default Home