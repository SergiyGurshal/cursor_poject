import React from 'react';
import './Table.css'
import Modal from '../modal/Modal'

export const Table = (props) => {
    return(
        <div className = 'tableList'>
            <ul>
                <li>
                    <span>{props.categories}</span>
                    <span>Description</span>
                    <span>Date</span>
                    <span>Money</span>
                    <span>Action</span>
                </li>
                <li>
                    <span>Category</span>
                    <span>Description</span>
                    <span>Date</span>
                    <span>Money</span>
                    <span>Action</span>
                </li>
                <li>
                    <span>Category</span>
                    <span>Description</span>
                    <span>Date</span>
                    <span>Money</span>
                    <span>Action</span>
                </li>
                <li>
                    <span>Category</span>
                    <span>Description</span>
                    <span>Date</span>
                    <span>Money</span>
                    <span>Action</span>
                </li>
            </ul>
        </div>
    )
}