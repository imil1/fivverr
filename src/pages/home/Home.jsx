import React from 'react';
import CatCard from '../../components/catCard/CatCard';
import Featured from '../../components/featured/Featured';
import Slide from '../../components/Slide/Slide';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import './Home.scss';

import { cards, projects } from '../../data';
import ProjectCard from '../../components/projectCard/ProjectCard';


const Home = () => {
    return (
        <div className='home'>
            <Featured />
            <TrustedBy />
            <Slide
                slidesToShow={4}
                arrowsScroll={1}
            >
                {cards.map((card) => (
                    <CatCard
                        key={card.id}
                        item={card}
                    />
                ))}
            </Slide>
            <div className='features'>
                <div className='container'>
                    <div className='item'>
                        <h2>страшна вырубай 🦵🏻💩🦵🏻</h2>
                        <div className='title'>
                            <img
                                src='./img/check.png'
                                alt=''
                            />
                            The best for every budget
                        </div>
                        <p>Find high-quality services at every price point.</p>{' '}
                        <div className='title'>
                            <img
                                src='./img/check.png'
                                alt=''
                            />
                            The best for every budget
                        </div>
                        <p>Find high-quality services at every price point.</p>{' '}
                        <div className='title'>
                            <img
                                src='./img/check.png'
                                alt=''
                            />
                            The best for every budget
                        </div>
                        <p>Find high-quality services at every price point.</p>
                    </div>
                    <div className='item'>
                        <video
                            height={300}
                            src='./img/video.MOV'
                            controls
                        ></video>
                    </div>
                </div>
            </div>
            <div className='features dark'>
                <div className='container'>
                    <div className='item'>
                      <h2>fiverr business</h2>
                      <h2>A business solution design for teams</h2>
                      <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
                      <div className='title'> 
                        <img src='./img/check.png' alt='check'/>
                        Connect to freelancers with proven business experience
                      </div> <div className='title'> 
                        <img src='./img/check.png' alt='check'/>
                        Connect to freelancers with proven business experience
                      </div> <div className='title'> 
                        <img src='./img/check.png' alt='check'/>
                        Connect to freelancers with proven business experience
                      </div>
                      <button>Explore Fiverr Business</button>
                    </div>
                    <div className='item'>
                        <img
                            src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg'
                            alt=''
                        />
                    </div>
                </div>
            </div>
            <Slide
                slidesToShow={4}
                arrowsScroll={1}
            >
                {projects.map((card) => (
                    <ProjectCard
                        key={card.id}
                        item={card}
                    />
                ))}
            </Slide>
        </div>
    );
};

export default Home;
