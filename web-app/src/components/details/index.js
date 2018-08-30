import React, { Component } from 'react';

import './index.css';

import { MyContext } from '../../context';

export default class Details extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: this.props.date,
            horario: '',
            evento: '',
            descricao: '',
            data: [],
            updateData: false,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.date !== prevState.date) {
            
            return {
                date: nextProps.date,
                updateData: true,
            }
        }

        return {
            updateData: false,
        };
    }

    refreshList() {

        const { date } = this.props;

        fetch(`http://localhost:10000/get/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`, {
            method: 'post',
        })
            .then(response => response.json())
            .then(response => {

                let data = (response != null ? response : []);

                this.setState({
                    data: data,
                    updateData: false,
                });
            })
    }

    generateContent = () => {

        if (this.state.data.length === 0) return <p>Não registros para esta data</p>;

        return this.state.data.map((a, i) =>
            <div className='detail-item' key={i} >
                <p><b>Horário:</b> {a.horario}</p>
                <p><b>Evento:</b> {a.evento}</p>
                <p><b>Descrição:</b> {a.descricao}</p>
            </div>
        );
    }

    handleEvento = (event) => {
        this.setState({
            evento: event.target.value,
        });
    }

    handleHorario = (event) => {

        this.setState({
            horario: event.target.value,
        });
    }

    handleDescricao = (event) => {

        this.setState({
            descricao: event.target.value,
        });
    }

    handleSubmit = (event) => {

        event.preventDefault();
        const { horario, evento, descricao } = this.state;
        const { date } = this.props;

        //requisição para adicionar
        fetch("http://localhost:10000/add", {
            method: 'post',
            body: JSON.stringify({
                data: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
                horario: horario,
                evento: evento,
                descricao: descricao,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {

            document.querySelector('.form-add-event').reset();
            this.refreshList();
        });
    }

    handleClose = (context) => {

        document.querySelector('.form-add-event').reset();
        context.setDisplay(false);
    }

    render = () => {

        const { date } = this.props;

        if (this.state.updateData) this.refreshList(); 

        return (
            <div className="details" style={{ display: (this.props.display ? "flex" : "none") }}>
                <div className="form">
                    <form className="form-add-event" onSubmit={this.handleSubmit}>
                        <label>Horário</label>
                        <input
                            type="time"
                            required
                            name="horario"
                            onChange={this.handleHorario}
                        />
                        <label>Evento</label>
                        <input
                            type="text"
                            required
                            minLength="3"
                            maxLength="50"
                            name="evento"
                            onChange={this.handleEvento}
                        />
                        <label>Descrição</label>
                        <textarea
                            cols="40"
                            rows="10"
                            name="descricao"
                            onChange={this.handleDescricao}
                        />
                        <input
                            type="submit"
                            value="Adicionar evento"
                        />

                    </form>
                </div>
                <div className="descricao">
                    <MyContext.Consumer>
                        {
                            context => <div className="close" onClick={() => this.handleClose(context)}>X</div>
                        }
                    </MyContext.Consumer>
                    <p className="date">{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</p>
                    <div className="box">
                        {
                            this.generateContent()
                        }
                    </div>
                </div>

            </div>
        );
    }
}