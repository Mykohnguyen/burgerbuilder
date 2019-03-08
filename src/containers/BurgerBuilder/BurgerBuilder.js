import React, { Component } from 'react';
// import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    ingredientPrices ={
        salad: 0.4,
        bacon: 1.5,
        cheese: 1,
        meat: 2.0,
        tomato: 0.5,
    }

    state={
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0,
            tomato: 0,
        },
        total_price: 0,
        purchasble: false,
    }

    updatePurchasable(ingredients) {
        const totalingredients = Object.keys(ingredients).map(x => ingredients[x]);
        totalingredients.reduce((sum, element) => sum + element);
        if (totalingredients === 0) {
            this.setState({
                purchasble: false,
            });
        } else {
            this.setState({
                purchasble: true,
            });
        }
    }

    addIngredient = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = updatedCount;
        const priceAdded = this.ingredientPrices[type];
        const newPrice = this.state.total_price + priceAdded;
        this.setState({
            total_price: newPrice,
            ingredients: updatedIngredients,
        });
        this.updatePurchasable(updatedIngredients);
    }
    removeIngredient =(type) => {
        const updatedCount = this.state.ingredients[type] - 1;
        if (updatedCount < 0) {
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.total_price - this.ingredientPrices[type];
        this.setState({
            total_price: newPrice,
            ingredients: updatedIngredients,
        });
        this.updatePurchasable(updatedIngredients);
    }
    render() {
        return (
            <div>
                <p>Total Price:<b>${this.state.total_price.toFixed(2)}</b></p>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    purchasble={this.state.purchasble} />
            </div>

        );
    }
}

export default BurgerBuilder;
