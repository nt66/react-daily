import React, { Component } from 'react';//可以这样写欧
import ReactDOM from 'react-dom';
import emitter from './events';

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    emitterRoot(value){
        emitter.emit('ItemClick',value,'来自list的问候');
    }
    
    render() {
        const textAry = ['金','木','水','火','土'];
        return (
            <div>
                {textAry.map((item, index) => {
                    return <a style={{ marginRight: 10 }} href="javascript:void(0)" onClick={this.emitterRoot.bind(this,item)} >{item}</a>
                })}
            </div>
        )
    }
}