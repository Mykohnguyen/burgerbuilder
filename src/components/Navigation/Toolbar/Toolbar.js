import React from 'react';
import './Toolbar.css';
import Logo from '../../../components/Navigation/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => (
    <div className="Toolbar">
        <div> Menu</div>
        <Logo />
        <NavigationItems />
    </div>
    );

export default toolbar;
