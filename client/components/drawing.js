import React, {Component} from 'react';

class Drawing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <svg width={this.props.width} height={this.props.height}>
            <line x1="0" y1="0" x2={this.props.width} y2={this.props.height} stroke="black"/>
            </svg>
        );
    }
}

export default Drawing;