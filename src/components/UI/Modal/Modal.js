import React, { Fragment } from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const areEqual = (prevProps, nextProps) => (prevProps.show === nextProps.show);
const modalValue = props => (
    <Fragment>
        <Backdrop
            show={props.show}
            clicked={props.hide} />
        <div
            className="Modal"
            style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0' }}>{props.children}
            <button
                className="Close"
                onClick={props.hide}>X</button>
        </div>
    </Fragment>
    );
const modal = React.memo(modalValue, areEqual);
export default modal;
