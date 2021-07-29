import React, { Component } from 'react';
import './Registrar.css';
import Input from '../components/Input';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Registrar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getNome: '',
            getPis: '',
            getMat: ''
        }
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSubmit = async (e) => {
        const { getNome, getPis, getMat } = this.state
        axios.post("http://localhost:8000/api/registros", { getNome, getPis, getMat })
            .then(res => {
                console.log(res.data)
                alert("Cadastro realizado com sucesso!");
                window.location.replace('/');
            });
        
        e.preventDefault()
    };

    render() {

        return (
            <div id="contain-central" className="container bg-primary">

                <div className="row">
                    <section className="col-md-12">
                        <Menu />
                    </section>

                    <section className="col-md-12">
                        <h4 className="text-center text-white mt-5">PAINEL DE REGISTRO DE COLABORADOR</h4>

                        <form id='formRegistro' className=" d-flex justify-content-center align-items-center" onSubmit={this.handleSubmit}>
                            <section className="w-50  justify-content-center">

                                <div className="w-100 ">
                                    <label className="text-white">Nome:</label>
                                    <Input type='texto' className="form-control " required onChange={this.handleChange} name="getNome" placeholder="Digite seu nome" maxLength='20' />

                                    <label className="text-white">PIS:</label>
                                    <Input type='texto' className="form-control " required onChange={this.handleChange} name="getPis" placeholder="Digite seu Pis" maxLength='20' />

                                    <label className="text-white">Matrícula:</label>
                                    <Input type='texto' className="form-control" required onChange={this.handleChange} name="getMat" placeholder="Digite a matrícula" maxLength='16' />

                                    <button id="btn" type='texto' className="btn btn-success mt-1 h-25">Cadastrar</button>
                                </div>

                            </section>
                        </form>
                    </section>
                </div>

            </div>
        );

    }

};
