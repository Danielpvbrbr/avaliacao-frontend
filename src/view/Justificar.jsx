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
        const dateMod = cookies.get('dateMod');
        //'01022019'
        axios.get(`http://localhost:8000/api/dados/cap/${getPis}`).then(res => {
            const searchDate = res.data.filter(b => b.dado_user.toString().slice(10, 18) === dateMod)
            this.setState({ valueDados: searchDate });
            console.log(searchDate)
        })

    };


    //Formatação de hora
    formatTime = (hr) => {
        const hora = hr.split('');
        hora.splice(2, ":", ":");

        return hora.join('');
    };

    //Formatação de data
    formatDate = (hd) => {
        const data = hd.split('');
        data.splice(2, "/", "/")
        data.splice(5, "/", "/")

        return data.join('')
    };

    render() {
        const { valueDados } = this.state;
        return (
            <div id="contain-central" className="container bg-primary">

                <div className="row">
                    <section className="col-md-12">
                        <Menu />
                    </section>

                    <section id="contain-listMarcacao" className="col-md-12 ">

                        <form onSubmit={this.handleSubmit} className=" row contain-form ">

                            <div className="col-md-12">
                                <section id="formJust" className="form border  d-flex justify-content-center">

                                    <div className="mb-1 inp1">
                                        <label htmlFor="formFile" className="form-label">Código da cliente:</label>
                                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="cod_produt" type="text" />
                                    </div>

                                    <div className="mb-1 inp">
                                        <label htmlFor="formFileMultiple" className="form-label">Nome do clientes:</label>
                                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="descricao_produt" type="text" />
                                    </div>

                                    <div className="mb-1 inp">
                                        <label htmlFor="formFileSm" className="form-label">Data de nascimento:</label>
                                        <Input className="form-control form-control-sm " onChange={this.handleChange} name="forn_produt" type="date" />
                                    </div>

                                </section>
                                
                            <div id="contButton" className="w-100 bg-dark p-1 d-flex justify-content-center align-items-center">
                                <section>
                                    <button className="btn-sm btn-primary m-1">Adicionar</button>
                                    <button className="btn-sm btn-primary m-1">Alterar</button>
                                </section>
                            </div>
                            </div>

                        </form>


                    </section>

                </div>

            </div>
        );
    }

};



