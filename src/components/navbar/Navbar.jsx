import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    const [active, setActive] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const popupRef = React.useRef(null);

    const { pathname } = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', isActive);

        return () => {
            window.removeEventListener('scroll', isActive);
        };
    }, []);

    const currentUser = {
        id: 1,
        username: 'Hello',
        isSeller: true,
    };

    return (
        <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
            <div className='container'>
                <div className='logo'>
                    <Link
                        to='/'
                        className='link'
                    >
                        <span className='text'>fivver</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className='links'>
                    <span>Fiverr Buisness</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div
                            className='user'
                            onClick={() => setOpen(!open)}
                        >
                            <img
                                src='https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600'
                                alt=''
                            />
                            <span>{currentUser?.username}</span>
                            {open && (
                                <div className='options'>
                                    {currentUser?.isSeller && (
                                        <>
                                            <Link
                                                className='link'
                                                to='/mygigs'
                                            >
                                                Gigs
                                            </Link>
                                            <Link
                                                className='link'
                                                to='/add'
                                            >
                                                Add New Gig
                                            </Link>
                                        </>
                                    )}
                                    <Link
                                        className='link'
                                        to='/orders'
                                    >
                                        Orders
                                    </Link>
                                    <Link
                                        className='link'
                                        to='/messages'
                                    >
                                        Messages
                                    </Link>
                                    <Link
                                        className='link'
                                        to=''
                                    >
                                        Log out
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {(active || pathname !== '/') && (
                <>
                    <hr />
                    <div className='menu'>
                        <Link className='link menuLink'>Design</Link>
                        <Link className='link'>Design</Link>
                        <Link className='link'>Design</Link>
                        <Link className='link'>Design</Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
