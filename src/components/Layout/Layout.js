import React, { Fragment } from 'react';
import classes from './Layout.css';
// import Aux from '../../hoc/aux';

const layout = props => (
    <Fragment>
        <div className={classes.Content}> Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Fragment>
);

export default layout;
