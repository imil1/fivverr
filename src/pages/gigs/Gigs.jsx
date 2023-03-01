import React from 'react';
import GigCard from '../../components/gigCard/GigCard';
import './Gigs.scss';
import {gigs} from '../../data';

const Gigs = () => {
    const [open, setOpen] = React.useState(false);
    const [sort, setSort] = React.useState('sales');

    const reSort = (type) => {
        setSort(type);
        setOpen((prev) => !prev);
    };

    return (
        <div className='gigs'>
            <div className='container'>
                <span className='breadcrumbs'>Fiverr GRAPHICS & DESIGN</span>
                <h1>AI Artists</h1>
                <p>EXPLORE THE BOUNDARIES OF ART</p>
                <div className='menu'>
                    <div className='left'>
                        <span>Budged</span>
                        <input
                            type='text'
                            placeholder='min'
                        />
                        <input
                            type='text'
                            placeholder='max'
                        />
                        <button>Apply</button>
                    </div>
                    <div className='right'>
                        <span className='sortBy'>Sort by:</span>
                        <span className='sortType'>
                            {sort === 'sales' ? 'Best Selling' : 'Newest'}
                        </span>
                        <img
                            src='/img/down.png'
                            alt=''
                            onClick={() => setOpen((prev) => !prev)}
                        />
                        {open && (
                            <div className='rightMenu'>
                                {sort === 'sales' ? (
                                    <span onClick={() => reSort('createdAt')}>Newest</span>
                                ) : (
                                    <span onClick={() => reSort('sales')}>Best Selling</span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className='cards'>
                    {gigs.map((gig) => (
                        <GigCard
                            key={gig.id}
                            item={gig}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gigs;
