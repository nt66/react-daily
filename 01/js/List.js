import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class List extends Component {
    /*声明接收对象的类型（必须）否则出不来*/
    static contextTypes = {
        text: React.PropTypes.array,
        onChildCallBack: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        // this.backRoot = this.backRoot.bind(this)
    }

    backRoot(value) {
        this.context.onChildCallBack(value);
    }

    render() {
        console.log('context text:',this.context.text)
        return (
            <div>
                {
                    (this.context.text).map((item, index) => {
                        return <a style={{marginRight:10}} href="javascript:void(0)" onClick={this.backRoot.bind(this,item)} >{item}</a>
                    })
                }
            </div>
        )
    }
}