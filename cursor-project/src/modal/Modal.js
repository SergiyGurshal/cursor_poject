import React from 'react';
import './Modal.css';

const listItem = [];

class Modal extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            categories : '',
            description: '',
            date: '',
            money: '',
            action : ''
        }
    }
    categoryHandler = e => {
        this.setState({categories: e.target.value})
    }
    handleChange = e => {
        this.setState({description: e.target.value})
    } 
    handleSumChange = e => {
        this.setState({money: e.target.value})
    } 
    dateHandler = e => {
        this.setState({ date: e.target.value})
    }
    formSubmitHandler = () => {
        const {categories, description, date, money } = this.state;
        // localStorage.setItem( 'categories', categories);
        // localStorage.setItem( 'description', description);
        // localStorage.setItem( 'date', date);
        // localStorage.setItem( 'money', money);
        listItem.push({categories, description, date, money});
        localStorage.setItem('items', JSON.stringify(listItem))
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
                        <select onChange={this.categoryHandler} value={this.state.categories}>
                            <option value=''>Виберіть категорію</option>
                            <option value='first'>First</option>
                            <option value='second'>Second</option>
                            <option value='third'>Third</option>
                            <option value='fourth'>Fourth</option>
                        </select>
                        <input type='text' name='description' value={this.state.description} onChange={this.handleChange} placeholder='Опис'/>
                        <input type='date' placeholder='Виберіть дату' onChange={this.dateHandler}/>
                        <input type='number' placeholder='Введіть суму' value={this.state.money} onChange={this.handleSumChange}/>
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