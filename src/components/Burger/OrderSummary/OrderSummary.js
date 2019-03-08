import React from 'react';


const orderSummary = (props) => {
    const summary = Object.keys(props.ingredients).map(x => <li><span style={{ textTransform: 'capitalize' }}>{x}</span>:{props.ingredients[x]}</li>);
    return (
        <React.Fragment>
            <h3>Order Summary:</h3>
            <p> A delicious burger with the following ingredients:</p>
            {summary}
            <p> Continue to checkout?</p>
        </React.Fragment>
    );
};

export default orderSummary;

