/**
 * higher-order 高阶组件
 * 只支持creareClass
 * 华凌锋
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent.js';

export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        //注意引用的是包裹后的组件
        return (<MyComponent />) 
    }
}
ReactDOM.render(<App />, document.getElementById('root'));