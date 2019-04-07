import React, { Component, Fragment } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const errorHandler = (WrappedComponent, axiosInstance) => class extends Component {
    state={
        error: null,
    }

    componentDidMount() {
        axiosInstance.interceptors.request.use((req) => {
            this.setState({
                error: null,
            });
            return req;
        });
        axiosInstance.interceptors.response.use(null, (error) => {
            this.setState({ error });
        });
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
