import React, { Component } from 'react'

class Test extends Component {
    constructor(props){
        super(props);
        console.log("constructor");
        this.state = {
            a: 10
        }
    }
    componentDidMount(){
        console.log("componentDidMount");
        this.setState({
            a: 20
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        //return false
        return false;
    }
    
    
    render() {
        console.log("render");
        return (
            <div>
                
            </div>
        )
    }
}

export default Test;