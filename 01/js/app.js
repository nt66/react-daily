/**
 * context方式传递消息
 * 华凌锋
 */
import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';

export default class App extends React.Component {
    /*声明接收对象的类型（必须）否则报错*/
    static childContextTypes = {
        text:React.PropTypes.array,
        onChildCallBack:React.PropTypes.func,
    };

    /*传递对象赋值 */
    getChildContext() {
        return {
            text: ['金', '木', '水', '火', '土'], // 给子组件的值
            onChildCallBack: this.onChildCallBack.bind(this) 
        }
    }

    /**回调 */
    onChildCallBack(msg) {
        console.log(msg,'回来了');
    }

    constructor(props){
        super(props);
    }

    render() {
        return (
            <List />
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));