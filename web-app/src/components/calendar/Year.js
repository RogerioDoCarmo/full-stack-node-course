import React, { Component } from 'react';

import Month from './Month';

import './year.css';

export default class Year extends Component {

    render = () => {

        return (
            <div className="year">
                <Month year={this.props.year} name="Janeiro" />
                <Month year={this.props.year} name="Fevereiro" />
                <Month year={this.props.year} name="Março" />
                <Month year={this.props.year} name="Abril" />
                <Month year={this.props.year} name="Maio" />
                <Month year={this.props.year} name="Junho" />
                <Month year={this.props.year} name="Julho" />
                <Month year={this.props.year} name="Agosto" />
                <Month year={this.props.year} name="Setembro" />
                <Month year={this.props.year} name="Outubro" />
                <Month year={this.props.year} name="Novembro" />
                <Month year={this.props.year} name="Dezembro" />
            </div>
        );
    }
}