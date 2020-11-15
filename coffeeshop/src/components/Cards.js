import React from 'react';
import './Cards.css';
import CardItem from './CardItemTest';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out our range of KNOTTY coffee beverage!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
