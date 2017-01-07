import React, { Component } from 'react';//可以这样写欧
import ReactDOM from 'react-dom';

var MixinComponent = {
    getInitialState(){
        return {
            text:'我来自mixin'
        }
    },
    componentWillMount() {
        console.log('mixin will mount');
    },
    componentDidMount() {
        console.log('mixin did mount');
    },
    func() {
        return "func返回"+this.state.text; 
    }
};

export default MixinComponent;