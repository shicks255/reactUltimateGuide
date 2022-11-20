import React from 'react';



class MyClassComponent extends React.Component {

    // MOUTNING
    constructor(props ) {
        super();
        this.state = {
            color: 'red'
        }
    }

    // MOUNTING
    /**
     * Called right before render.
     * For when you need to set some state based on props
     * This is usually a bad practice
     */
    static getDerivedStateFromProps(props, state) {
        console.log('get derived from props');
        console.log(props)
        return {
            ...state,
            secondColor: props.color
        }
    }

    // MOUNTING
    /**
     * Called after component is rendered for the first time
     */
    componentDidMount() {
        console.log('component did mount')

        this.setState({color: 'yellow'})
    }
    


    // UPDATING
    /**
     * Return a boolean whether to continue rendering
     */
    shouldComponentUpdate() {

        return true;
    }

    // UPDATING
    /**
     * 
     */
    getSnapshotBeforeUpdate(props, state) {
        console.log(props);
        console.log(state);
    }

    // UPDATING
    componentDidUpdate() {
        console.log('component did update')

        // The following line would throw an error due to infinite rerender loop
        // this.setState({color: 'yellow'})
    }

    // UNMOUNTING
    componentWillUnmount() {
        
    }

    // MOUNTING, UPDATING
    render() {
        return(
            <>
                <h1>Hello from a react component {this.state.color}</h1>
                <h1>Hello from a react component {this.state.secondColor}</h1>
            </>
        ) 
    }
}

export default MyClassComponent;