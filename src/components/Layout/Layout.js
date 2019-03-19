import React, { Fragment, Component } from 'react';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state={
        showDrawer: true,
    }
    hideSideDrawer = () => {
        this.setState({
            showDrawer: false,

        });
    }
    sideDrawerToggle = () => {
        this.setState(prevState => ({ showDrawer: !prevState.showDrawer }));
    }

    render() {
        return (
            <Fragment>
                <Toolbar
                    toggle={this.sideDrawerToggle} />
                <SideDrawer
                    hide={this.hideSideDrawer}
                    show={this.state.showDrawer} />
                <main className="Content">
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;
