/**
 * 子组件
 */
import React, { Component } from 'react';
import MyContainer from './MyContainer';

class MyComponent extends Component {
    static defaultProps = {
        seconds: 150
    }
    componentDidMount() {
        console.log('component');
    }
    render() {
        console.log(this.props.seconds);
        return (
            <span>定时器:{this.props.seconds}ms</span>
        )
    }
}
// const MyComponent = () => (
//     <span>定时器:{this.props.seconds}ms</span>
// )

//注意输出的写法
export default MyContainer(MyComponent)