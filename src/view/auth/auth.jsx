import React, { Component } from 'react';
import './auth.css';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Pis: '',

        }
    };
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSubmit = async (e) => {
        const { Pis } = this.state
        const cookies = new Cookies();

        if (Pis.length > 11) {
            axios.get(`http://localhost:8000/api/auth/p/${Pis}`).then(res => {
                // console.log(res.data)
                const idCap = res.data.map(value => value.id);
                const nomeCap = res.data.map(value => value.nome);
                const matCap = res.data.map(value => value.matricula);
                const pisCap = res.data.map(value => value.pis);

                cookies.set("idCap", idCap.toString(), { path: "/home" });
                cookies.set("matCap", matCap.toString(), { path: "/home" });
                cookies.set("nomeCap", nomeCap.toString(), { path: "/home" });
                cookies.set("pisCap", pisCap.toString(), { path: "/listMarcacao" });
                cookies.set("pisCap", pisCap.toString(), { path: "/ListaHoras" });
                window.location.replace('/home')
                if (res.data.length === 0) {
                    console.log("Acesso negado! Numero do pis incorreto ou não cadastrado no sistema.")
                    console.log("Tente novamente!!")
                };
            })
        } else
            console.log("O campo não pode ser menor que 12 caracteres!!")

        e.preventDefault()
    };

    render() {
        return (
            <div id="contain-acesso" className="container">

                <div className="row">
                    <section className="col-md-12">
                        <h4 className="text-center text-white mt-5">ACESSO AO GERENCIADOR DE PONTO</h4>

                        <form onSubmit={this.handleSubmit} className="form-inline  d-flex justify-content-center align-items-center">
                            <label htmlFor="mat" className="sr-only text-white">Matricula:</label>
                            <div className="form-group m-1">
                                <Input type="text" className="form-control" onChange={this.handleChange} name="Pis" id="mat" placeholder="Digite sua matricula" maxLength='12' />
                            </div>

                            <button id="btn" className="btn btn-primary" type="submit">Acessar</button>
                            <Link to={'/registro'}>
                                <button id="btn" className="btn btn-success" type="submit">Adcionar</button>
                            </Link>
                        </form>
                    </section>
                </div>

            </div>
        );
    }

};



