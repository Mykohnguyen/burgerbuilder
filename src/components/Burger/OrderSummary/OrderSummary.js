import React from 'react';


const orderSummary = (props) => {
        const summary = Object.keys(props.ingredients).map(x => <li><span style={{ textTransform: 'capitalize' }}>{x}</span>:{props.ingredients[x]}</li>);
    return (
        <React.Fragment>
            <h3>Order Summary:</h3>
            <p> A delicious burger with the following ingredients:</p>
            {summary}
            <p> Total Price:${props.totalprice.toFixed(2)}</p>
            <p> Continue to checkout?</p>
            <button onClick={props.hide}>Cancel</button>
            <button>Continue</button>
        </React.Fragment>
    );
};

export default orderSummary;

