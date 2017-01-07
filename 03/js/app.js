/**
 * mixins属性示例
 * 只支持creareClass
 * 华凌锋
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MixinComponent from './MixinComponent.js';

var App = React.createClass({
    getInitialState(){
        return{
            // text:'asdasd' //不同设置相同的state
        }
    },
    mixins: [MixinComponent],
    componentWillMount(){
        console.log('app will mount');
    },
    //不能设置相同的方法
    // func(){
    //   return '我来自app';  
    // },
    render() {
        return (<span>{this.func()}</span>)
    }
});
ReactDOM.render(<App />, document.getElementById('root'));