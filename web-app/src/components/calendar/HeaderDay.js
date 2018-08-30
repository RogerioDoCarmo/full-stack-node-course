import React, { Component } from 'react';

import './headerday.css';

export default class HeaderDay extends Component {

    render() {

        return (
            <div className="headerday" >
                <p>{this.props.value}</p>
            </div>
        );
    }
}