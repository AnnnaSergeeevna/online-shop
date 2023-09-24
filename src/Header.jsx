import React from 'react';
import logo from '../src/cup_of_coffee M.png';
// import { NavLink } from 'react-router-dom';
import classes from './App.css';

const Header = (props) => {
    return (
        <div className={classes.head}>
            <div className="App-logo" alt="logo"><img src={logo} /> Online coffee-shop </div>
            {/* <div>
                <button className={classes.login}>{props.isAuth ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>}
                </button>
            </div> */}
        </div>
    )
}
export default Header;