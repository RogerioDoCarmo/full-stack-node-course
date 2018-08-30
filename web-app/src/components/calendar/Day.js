import React, { Component } from 'react';

import '../../colors/index.css';
import './day.css';
import { MyContext } from '../../context';

export default class Day extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasEvent: false,
        }
    }

    handleClick = (context) => {

        if (this.props.day !== '') {

            this.setState({hasEvent: true});
            context.setDisplay(true);
            context.setDate(this.props.day);
        }
    }

    render = () => {


        return (
            <MyContext.Consumer>
                {
                    context =>
                        <div className={(this.state.hasEvent ? "day-active" : "day")} onClick={() => this.handleClick(context)}>
                            <p>{(this.props.day !== '' ? this.props.day.getDate() : "")}</p>
                        </div>
                }
            </MyContext.Consumer>

        );
    }
}