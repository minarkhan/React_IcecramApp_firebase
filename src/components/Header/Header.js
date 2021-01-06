import React from 'react';
import logo from '../../assets/images/logo.svg';
import relogo from '../../assets/images/react.svg';
import classes from './Header.module.css';

const Header = () => (
    <header>
        <div className="container">
            <div>
                <img className={classes.logo} src={logo} alt="Logo" />
            </div>
            <div className="textRight">
                <img src={relogo} alt="React" className={classes.reactLogo} />
                <strong>React</strong>
            </div>
        </div>
    </header>
);

export default Header;
