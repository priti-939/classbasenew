import React, { Component } from 'react';

class Demo extends Component{

    state = {
        count:0
    };

    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleRemove = () => {
        this.state.count !== 0 &&  this.setState({
            count:  this.state.count - 1
        })
    }

    render(){
        return(
            <div>
                <h1>Total count : {this.state.count}</h1>
                <button className='add-btn' onClick={this.handleAdd}>Add</button>
                <button className='add-btn' onClick={this.handleRemove}>Remove</button>
            </div>
        )
    }
}

export default Demo;