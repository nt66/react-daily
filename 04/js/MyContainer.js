/**
 * 容器组件
 * 
 */
import React from 'react';

//注意此处写法
const MyContainer = (WrappedContent) => class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 0
        }
    }
    
    componentDidMount() {
        console.log('container');
        this.timeHandler = setInterval(this.tick.bind(this), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timeHandler);
    }
    tick() {
        this.setState({
            seconds: this.state.seconds + 1000
        });
    }
    render() {
        return (<WrappedContent {...this.props} {...this.state} />)
    }
}
export default MyContainer
