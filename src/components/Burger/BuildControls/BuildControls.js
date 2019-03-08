import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Tomato', type: 'tomato' },
];

const buildControls = props => (
    <div className="BuildControls">
        {controls.map(c => (
            <BuildControl
                key={c.label}
                label={c.label}
                addIngredient={() => { props.addIngredient(c.type); }}
                removeIngredient={() => { props.removeIngredient(c.type); }} />
            ))}
        {props.purchasble ?
            <button
                onClick={props.purchasing}>Order Now</button> : null}
    </div>

    );

export default buildControls;
