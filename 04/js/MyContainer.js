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

    //state 写法二
    // state = {
    //      seconds: 0
    // }
    
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
    ahandle(){
        //sth to do
    }
    bhandle(){
        //sth to do
    }
    render() {
        const newProps = {
            ahandle:this.ahandle,
            bhandle:this.bhandle
        }
        return (<WrappedContent {...newProps} {...this.state} />)
    }
}
export default MyContainer
