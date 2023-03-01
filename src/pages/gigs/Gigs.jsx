import React from 'react'

const Gigs = () => {
  return (
    <div className='gigs'>
      <div className='container'>
        <span className='breadcrumbs'>Fiverr  GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>EXPLORE THE BOUNDARIES OF ART</p>
        <div className='menu'>
          <div className='left'>
            <span>Budged</span>
            <input type='text' placeholder='min'/>
            <input type='text' placeholder='max'/>
            <button>Apply</button>
          </div>
          <div className='right'>
            <span className='sortBy'>Sort by:</span>
            <span className='sortType'>Best Selling</span>
            <img src='./img/down.png' alt=''/>
            <div className='rightMenu'>
              <span>Newest</span>
              <span>Best Selling</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gigs