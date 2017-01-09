/**
 * 子组件
 */
import React from 'react';
import MyContainer from './MyContainer';

class MyComponent extends React.Component {
    static defaultProps = {
        seconds:150
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

//注意输出的写法
export default MyContainer(MyComponent)