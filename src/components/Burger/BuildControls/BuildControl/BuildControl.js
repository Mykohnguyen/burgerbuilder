import React from 'react';
import './BuildControl.css';

const buildcontrol = props => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button
            className="Less"
            onClick={props.removeIngredient}>Less</button>
        <button
            className="More"
            onClick={props.addIngredient}>More</button>
    </div>
    );
export default buildcontrol;
