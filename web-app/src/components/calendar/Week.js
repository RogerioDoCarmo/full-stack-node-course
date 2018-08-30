import React, { Component } from 'react';

import Day from './Day';

import './week.css';


export default class Week extends Component {

    generateDays = () => {
    
        let start = this.props.startDay;
        let days = [];
        let weekEnd = false;

        let counter = 6 - (6 - start.getDay());
        while (counter--) this.fill(days, counter);

        let sameMonth = true;

        while (!weekEnd && sameMonth) {

            if (start.getDay() === 6) weekEnd = true;
            days.push(
                <Day
                    key={start.getDay()}
                    day={start}
                />
            );

            start = this.nextDay(start);
            if (this.props.month !== start.getUTCMonth()) sameMonth = false;
        };

        let num = 30;
        while(days.length < 7) {
            
            days.push(
                <Day
                    key={num++}
                    day={''}
                />
            );
        }
        
        return days;
    }

    fill = (array, counter) => {
        array.push(
            <Day
                key={counter}
                day={''}
            />
        );
    }

    nextDay = (date) => {

        return new Date(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            1 + date.getUTCDate()
        );
    }

    render = () => {

        return (
            <div className="week">
                { this.generateDays() }
            </div>
        );
    }
}