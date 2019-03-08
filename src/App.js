import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
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

    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <Layout>
                    <BurgerBuilder />
                </Layout>
            </div>
        );
    }
}

export default App;
