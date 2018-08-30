import React, { Component } from 'react';

import Year from './Year';

export default class Calendar extends Component {

    render = () => {

        return (
            <div className="calendar">
                <Year year={this.props.year} />
            </div>
        );
    }
}