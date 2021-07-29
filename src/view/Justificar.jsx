import React, { Component } from 'react';
import '../Home.css';
import './Justificar.css';
import Menu from '../components/Menu';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Input from '../components/Input';

export default class Justificar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueDados: [],
            data: '',
        }

    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    };

    ConvertDate = () => {
        const { data } = this.state;
        const cookies = new Cookies();
        const dateMod = data.split('-').reverse().join('');
        cookies.set("dateMod", dateMod, { path: "/listMarcacao" });
        window.location.replace('/listMarcacao')
    };

    componentDidMount = () => {
        const cookies = new Cookies();
        const getPis = cookies.get('getPis');
        //'01022019'
        axios.get(`http://localhost:8000/api/dados/cap/${getPis}`).then(res => {
            const searchDate = res.data.filter(b => b.dado_user)
            this.setState({ valueDados: searchDate });
            // console.log(searchDate)
        })

    };


    render() {
        const { valueDados } = this.state;
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
                                <div className="inp1 form-group">
                                    <label htmlFor="formFileSm" className="form-label">Setor: *</label>
                                    <select id="setor" className="form-control form-control-sm">
                                        <option className="value" value="administrador"></option>
                                    </select>
                                </div>

                                <div className="w-100 ">
                                    <label className="text-white">Data da marcação:</label>
                                    <Input type='date' className="form-control " required onChange={this.handleChange} name="getNome" placeholder="Digite seu nome" maxLength='20' />

                                    <label className="text-white">hora:</label>
                                    <Input type='time' className="form-control " required onChange={this.handleChange} name="getPis" placeholder="Digite seu Pis" maxLength='20' />

                                    <button id="btn" type='texto' className="btn btn-success mt-1 h-25 m-1">Adicionar</button>
                                    <button id="btn" type='texto' className="btn btn-success mt-1 h-25 m-1">Alterar</button>
                                </div>

                            </section>
                        </form>
                    </section>
                </div>

            </div>
        );
    }

};



