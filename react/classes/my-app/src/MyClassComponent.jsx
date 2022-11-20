import React from 'react';



class MyClassComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            color: 'red'
        }
    }

    render() {
        return <h1>Hello from a react component {this.state.color}</h1>
    }
}

export default MyClassComponent;