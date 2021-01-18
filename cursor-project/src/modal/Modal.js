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
            action : {
                first: 'Доходи',
                second: 'Витрати'
            }
        }
        
    }
    render() {
        const modal = ['modal']
        if(this.props.showModal){
            modal.push('modalShow')
        }
        return(
            <div className={modal.join(' ')}>
                <div className='formWrapper'>
                    <form>
                        <select>
                            {Object.values(this.state.categories).map(item => {
                                return(
                                    <option key = {item}>{item}</option>
                                )
                            })}
                        </select>
                        <input type='text' placeholder='Опис'/>
                        <input type='date' placeholder='Виберіть дату'/>
                        <input type='number' placeholder='Введіть суму'/>
                        <select>
                            {Object.values(this.state.action).map(item => {
                                    return(
                                        <option key = {item}>{item}</option>
                                    )
                                })}
                        </select>
                    </form>
                </div>
                <div className='btnWrapper'>
                    <button type='button'>Зберегти</button>
                    <button type='button'>Відмінити</button>
                </div>
            </div>
        )
    }
    
}

export default Modal