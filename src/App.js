import React, { Component } from 'react';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './components/Layout/Layout';
// import Burger from './components/BurgerBuilder/Burger';
// import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';

class App extends Component {
    state = { loading: false };

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
        setTimeout(() => {
            this.setState({
                show: false,
            });
        }, 5000);
    }

    render() {
        return (
            <div className="App">
                <Layout>
                    <BurgerBuilder />
                </Layout>
            </div>
        );
    }
}

export default App;
