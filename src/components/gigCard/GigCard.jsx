import React from 'react';
import { Link } from 'react-router-dom';
import './GigCard.scss';

const GigCard = ({ item }) => {
    return (
        <Link to='/gig/123' className='link'>
            <div className='gigCard'>
                <img
                    src={item.img}
                    alt=''
                />
                <div className='info'>
                    <div className='user'>
                        <img
                            src={item.pp}
                            alt='user'
                        />
                        <span>{item.username}</span>
                    </div>
                    <p>{item.desc}</p>
                    <div className='star'>
                        <img
                            src='/img/star.png'
                            alt='star'
                        />
                        <span>{item.star}</span>
                    </div>
                </div>
                <hr />
                <div className='details'>
                    <img
                        src='/img/heart.png'
                        alt='heart'
                    />
                    <div className='price'>
                        <span>starting at</span>
                        <h2>${item.price}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GigCard;
