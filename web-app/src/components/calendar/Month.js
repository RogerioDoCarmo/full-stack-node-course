import React, { Component } from 'react';

import Week from './Week';
import HeaderDay from './HeaderDay';

import './month.css';

export default class Month extends Component {


    constructor(props) {
        super(props);

        this.state = {
            month: this.getMonth(this.props.name)
        };
    }

    generateHeader = () => {

        return <div className="header">
            <HeaderDay value="D" />
            <HeaderDay value="S" />
            <HeaderDay value="T" />
            <HeaderDay value="Q" />
            <HeaderDay value="Q" />
            <HeaderDay value="S" />
            <HeaderDay value="S" />
        </div>
    }

    getMonth = (name) => {

        switch(name) {

            case "Janeiro": return 0;
            case "Fevereiro": return 1;
            case "Março": return 2;
            case "Abril": return 3;
            case "Maio": return 4;
            case "Junho": return 5;
            case "Julho": return 6;
            case "Agosto": return 7;
            case "Setembro": return 8;
            case "Outubro": return 9;
            case "Novembro": return 10;
            case "Dezembro": return 11;
            default: return -1;
        }
    }

    nextDay = (date) => {

        return new Date(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            1 + date.getUTCDate()
        );
    }

    firstSunday = () => {

        let start = new Date(
            this.props.year, 
            this.state.month,
            1
        );

        while (start.getDay() !== 0) start = this.nextDay(start);

        return start;
    }

    getSundays = () => {

        let firstSunday = this.firstSunday(this.props.name), sundays = [];
        const currentMonth = firstSunday.getMonth();

        while (firstSunday.getMonth() === currentMonth) {

            sundays.push(firstSunday);
            firstSunday = new Date(
                firstSunday.getFullYear(),
                firstSunday.getMonth(),
                firstSunday.getDate() + 7
            );
        }

        return sundays;
    }

    render = () => {

        let sundays = this.getSundays();
        let firstWeek = new Date(this.props.year, this.state.month, 1);
        
        return (
            <div className="month">
                <div className="title">{this.props.name}</div>
                {this.generateHeader()}
                { firstWeek.getDate() !== sundays[0].getDate() ? <Week month={this.state.month} startDay={firstWeek} /> : null}
                { 
                    sundays.map((element, index) => <Week key={index} month={this.state.month} startDay={element} />) 
                }
            </div>
        );
    }
}