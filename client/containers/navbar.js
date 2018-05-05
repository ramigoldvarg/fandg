import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchAvailableData} from '../actions/index.js';

class Navbar extends Component {
    constructor() {
        super();

        this.renderNavbar = this.renderNavbar.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchAvailableData();
    }

    renderNavbar() {
        if (!this.props.navbarOptions) {
            return (<li>Loading</li>);
        }

        return this.props.navbarOptions.map(curr=> <li key={curr}>{curr}</li>)
    }

    render() {
        return (
            <ul>
                {
                    this.renderNavbar()
                }
            </ul>
        )
    }
}

function mapStateToProps({navbarOptions}) {
    return {navbarOptions}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchAvailableData }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);