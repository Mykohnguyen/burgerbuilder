import React, { Fragment } from 'react';
import './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';


const sideDrawer = (props) => {
    let attachedClasses = [];
    if (props.show === true) {
        attachedClasses = ['SideDrawer', 'Open'];
    } else {
        attachedClasses = ['SideDrawer', 'Close'];
    }
    return (
        <Fragment>
            <div
                className={attachedClasses.join(' ')}
                onClick={props.toggle}>
                <div className="SideDrawerLogo">
                    <Logo />
                </div>
                <NavigationItems />

            </div>
            <Backdrop
                show={props.show}
                clicked={props.hide} />
        </Fragment>
    );
};
export default sideDrawer;
