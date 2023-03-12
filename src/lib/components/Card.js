import React from 'react';
import Button from './Button';
import './card.css';

const Card = (props) => { 

    return (
        <card className="cardWrapper">
            <img className='cardImage' src='https://images.unsplash.com/photo-1678640078326-cee06e1024d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt="text" />
            <div className='cardContent'>
                <div className='cardHeadline'>
                    {props.headline}
                </div>
                <div className='cardText'>
                    {props.text}
                </div>
                <div className='cardButton'>
                    <Button label="Weitere Informationen"/>
                </div>
            </div>
            
        </card>
    )
}

export default Card;