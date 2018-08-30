import React, { Component } from 'react';
import Calendar from '../../components/calendar';
import Details from '../../components/details';
import { MyContext } from '../../context';

export default class Agenda extends Component {

    constructor(props) {
        super(props);

        const {
            state,
        } = this.props.location;

        let date = new Date();

        this.state = {
            ...state,
            year: date.getFullYear(),
        };

        document.title = "Agenda";
    }


    render = () => {

        return (
            <div className="agenda">
                <Calendar year={this.state.year} />
                <MyContext.Consumer>
                    {
                        context => {
                            
                            return <Details display={context.state.display} date={context.state.date} />
                        }
                    }
                </MyContext.Consumer>
            </div>
        );
    }
}