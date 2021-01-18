import React from 'react';
import './Modal.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories : {
                first: 'first cat',
                second: 'second cat',
                third: 'third cat',
                fourth: 'fourth cat'
            },
            description: '',
            date: '',
            money: '',
            action : {
                first: 'Доходи',
                second: 'Витрати'
            }
        }
    }
    handleChange = event => {
        // const value = event.target.value
        // console.log( event.target.value ) ; 
        // console.log(this.state)
        // console.log(this.state.description)
        // this.setState({event.target.value})
        // console.log(this.state)
    } 
    formSubmitHandler() {
        // const {categories, description, date, money, action } = this.state;
        // localStorage.setItem( 'categories', categories);
        // localStorage.setItem( 'description', description);
        // localStorage.setItem( 'date', date);
        // localStorage.setItem( 'money', money);
        // localStorage.setItem( 'action', action);
    }
    render() {
        const modal = ['modal']
        if(this.props.showModal){
            modal.push('modalShow')
        }
        return(
            <div className={modal.join(' ')}>
                <div className='formWrapper'>
                    <form onSubmit = {this.formSubmitHandler}>
                        <select>
                            {Object.values(this.state.categories).map(item => {
                                return(
                                    <option key = {item}>{item}</option>
                                )
                            })}
                        </select>
                        <input type='text' name='description' value={this.state.description} onChange={this.handleChange} placeholder='Опис'/>
                        <input type='date' placeholder='Виберіть дату'/>
                        <input type='number' placeholder='Введіть суму'/>
                        <select>
                            {Object.values(this.state.action).map(item => {
                                    return(
                                        <option key = {item}>{item}</option>
                                    )
                                })}
                        </select>
                        <div className='btnWrapper'>
                            <button type='submit'>Зберегти</button>
                            <button type='button' onClick={this.props.modalHideHandler}>Відмінити</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    
}

export default Modal