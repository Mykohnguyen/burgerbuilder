import React, { Component, Fragment } from 'react';
// import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axiosInstance from '../../Instance';
import Spinner from '../../components/UI/Spinner/Spinner';
import errorHandler from '../.././hoc/ErrorHandler/ErrorHandler';

class BurgerBuilder extends Component {
    ingredientPrices ={
        salad: 0.4,
        bacon: 1.5,
        cheese: 1,
        meat: 2.0,
        tomato: 0.5,
    }

    state={
        ingredients: null,
        total_price: 5,
        purchasble: false,
        purchasing: false,
        loading: false,
        loadingBackend: true,
        error: false,
        errorMessage: null,
    }
    componentDidMount() {
        axiosInstance.get('https://burger-builder-react-fbd35.firebaseio.com/ingredients.json')
            .then((response) => {
                this.setState({
                    ingredients: response.data,
                    loadingBackend: false,
                });
            })
            .catch((error) => {
                this.setState({
                    error: true,
                    errorMessage: error.message,
                });
            });
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

    purchasing = () => {
        this.setState({
            purchasing: true,
        });
    }
    hideModal = () => {
        this.setState({
            purchasing: false,
        });
    }
    continuePurchasing = () => {
        this.setState({
            loading: true,
        });
        const order = {
            customer: {
                name: 'Michael Nguyen',
                address: '51591 Testing Ln',
                email: 'myemail@email.com',
            },
            deliveryMethod: 'Ground',
            ingredients: this.state.ingredients,
            total_price: this.state.total_price,
        };
        axiosInstance.post('/orders.json', order)
            .then(
                    this.setState({ loading: false, purchasing: false }),
            )
            .catch(
                    this.setState({ loading: false, purchasing: false }),
            );
    }
    render() {
        let orderSummary = null;
        let burgeringredients = this.state.error ? <p> {this.state.errorMessage} </p> : <Spinner />;
        if (this.state.ingredients) {
            burgeringredients = (<Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    purchasble={this.state.purchasble}
                    purchasing={this.purchasing} />
            </Fragment>);
            orderSummary = (<OrderSummary
                ingredients={this.state.ingredients}
                hide={this.hideModal}
                totalprice={this.state.total_price}
                continuePurchasing={this.continuePurchasing} />);
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        return (
            <div>
                <p>Total Price:<b>${this.state.total_price.toFixed(2)}</b></p>
                {burgeringredients}
                <Modal
                    show={this.state.purchasing}
                    hide={this.hideModal}>
                    {orderSummary}
                </Modal>
            </div>

        );
    }
}

export default errorHandler(BurgerBuilder, axiosInstance);
