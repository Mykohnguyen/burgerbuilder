import React, { Component, Fragment } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const errorHandler = (WrappedComponent, axiosInstance) => class extends Component {
    state={
        error: null,
    }

    componentDidMount() {
        this.reqInterceptors = axiosInstance.interceptors.request.use((req) => {
            this.setState({
                error: null,
            });
            return req;
        });
        this.resInterceptors = axiosInstance.interceptors.response.use(res => (error) => {
            this.setState({ error });
            return res;
        });
    }
    componentWillUnmount() {
        axiosInstance.interceptors.request.eject(this.reqInterceptors);
        axiosInstance.interceptors.response.eject(this.resInterceptors);
        console.log('component unmount');

        // this will help with memory leak from interceptors being attached everytime
        // the burgerbuilder component is mounted
    }
    exitModal=() => {
        this.setState({
            error: null,
        });
    }
    render() {
        return (
            <Fragment>
                <Modal
                    show={this.state.error}
                    hide={this.exitModal}>{this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props} />
            </Fragment>);
    }
    };


export default errorHandler;
