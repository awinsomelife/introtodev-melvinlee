import React, { Component } from 'react';
import data from './data.json';
import './Cards.css';
import { Link } from 'react-router-dom';

const product = data.coffees;

class CardItem extends Component {
    render() {
        return (
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__item' >
                        {
                            product.map(coffee => (<Link className='cards__item__link' to={coffee}>
                                <h1 className="cards__item__name"> {coffee.name}, {coffee.prices}</h1>
                                <figure className='cards__item__pic-wrap' data-category={coffee.label}>
                                    <img
                                        src={coffee.image} alt='Coffee Image'
                                        className='cards__item__img' />
                                </figure>
                                <div className="cards__item__info">
                                    <h5 className="cards__item__text">{coffee.description}</h5>
                                </div>
                            </Link>))
                        }
                    </ul >
                </div>
            </div>
        );
    }
}

export default CardItem
