/**
 * events方式传递消息
 * 华凌锋
 */
import React from 'react';
import ReactDOM from 'react-dom';
import emitter from './events';
import List from './List.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.itemClick = emitter.addListener('ItemClick', (msg, data) => {
            console.log(msg, data);
        });
    }
    componentWillUnmount() {
        emitter.removeListener(this.itemClick);
    }
    render() {
        return (
            <List />
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));