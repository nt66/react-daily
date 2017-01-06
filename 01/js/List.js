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
    }

    backRoot() {
        this.context.onChildCallBack();
    }

    render() {
        
        return (
            <div>
                {
                    (this.context.text).map((item, index) => {
                        return <a style={{marginRight:10}} href="javascript:void(0)" onClick={this.backRoot.bind(this)} >{item}</a>
                    })
                }
            </div>
        )
    }
}