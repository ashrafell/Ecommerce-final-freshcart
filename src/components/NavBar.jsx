import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/finalProject assets/freshcart-logo.svg';

export default function NavBar() {
    const { useToken, setUseToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    function signOut() {
        setUseToken(''); // Clear the token
        localStorage.removeItem('token');
        navigate('/login');
    }

    function toggle() {
        setOpen(!open);
    }

    return (
        <nav className='bg-slate-200 py-4'>
            <div className="container  md:flex justify-between items-center relative">
                <div className='md:flex gap-80'>
                    <img src={logo} width={120} alt="Freshcart Logo" />
                    {useToken && (
                        <ul className={`md:flex  gap-7 ${open ? 'block' : 'hidden'}`}>
                            <li><NavLink className='text-black' to='/'>Home</NavLink></li>
                            <li><NavLink className='text-black' to='/cart'>Cart</NavLink></li>
                            <li><NavLink className='text-black' to='/wish list'>Wish list</NavLink></li>
                            <li><NavLink className='text-black' to='/products'>Products</NavLink></li>
                            <li><NavLink className='text-black' to='/categories'>Categories</NavLink></li>
                            <li><NavLink className='text-black' to='/brands'>Brands</NavLink></li>
                        </ul>
                    )}
                </div>
                <div>
                    <ul className={`md:flex gap-4 ${open ? 'block' : 'hidden'}`}>
                        {!useToken ? (
                            <>
                                <li><NavLink className='text-black' to='/login'>Login</NavLink></li>
                                <li><NavLink className='text-black' to='/register'>Register</NavLink></li>
                            </>
                        ) : (
                            <li><NavLink onClick={signOut} className='text-black'>Sign Out</NavLink></li>
                        )}
                        <li className='flex gap-4'>
                            <a href="#"><i className='fab fa-facebook-f text-black'></i></a>
                            <a href="#"><i className='fab fa-twitter text-black'></i></a>
                            <a href="#"><i className='fab fa-instagram text-black'></i></a>
                            <a href="#"><i className='fab fa-google text-black'></i></a>
                        </li>
                    </ul>
                </div>
                <i
                    onClick={toggle}
                    className={`fas ${!open ? 'fa-bars' : 'fa-close'} block md:hidden fa-2x absolute top-0 right-2 cursor-pointer`}
                ></i>

            </div>
        </nav>
    );
}
