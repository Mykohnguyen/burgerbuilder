import React from 'react';
import './Toolbar.css';
import Logo from '../../../components/Navigation/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
    <div className="Toolbar">
        <div
            className="DrawerToggle"
            onClick={props.toggle}>
            <div />
            <div />
            <div />
        </div>
        <Logo />
        <div className="DesktopOnly">
            <NavigationItems />
        </div>
    </div>
    );

export default toolbar;
