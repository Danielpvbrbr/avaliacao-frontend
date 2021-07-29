import React, { Component } from 'react';
import '../Home.css';
import './MarcPontoList.css';
import Menu from '../components/Menu';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Input from '../components/Input';

export default class MarcPontoList extends Component {
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
        axios.get(`http://localhost:8000/api/dados/cap/${getPis}`).then(res => {
            const searchDate = res.data.filter(b => b.dado_user.toString().slice(10, 18) === dateMod)
            this.setState({ valueDados: searchDate });
        })



    };


    //Formatação de hora
    formatTime = (hr) => {
        const hora = hr.split('');
        hora.splice(2, ":", ":");
        return hora.join('')
    };

    calcHoras = () => {
        const cookies = new Cookies();
        const valor = this.state.valueDados;
        valor.map((item, i) => {
            const horat = item.dado_user.slice(18, 22)
            cookies.set(`v${i++}`, horat, { path: "/listMarcacao" });
        });
        const hr1 = cookies.get('v1');
        const hr2 = cookies.get('v2');
        const hr3 = cookies.get('v3');
        const hr4 = cookies.get('v4');
    }

    //Formatação de data
    formatDate = (hd) => {
        const data = hd.split('');
        data.splice(2, "/", "/")
        data.splice(5, "/", "/")

        return data.join('')
    };

    render() {
        const { valueDados } = this.state;
        this.calcHoras()
        return (
            <div id="contain-central" className="container bg-primary">

                <div className="row">
                    <section className="col-md-12">
                        <Menu />
                    </section>

                    <section id="contain-listMarcacao" className="col-md-12 ">


                        <div className="form-inline  d-flex justify-content-center align-items-center">
                            <label htmlFor="mat" className="sr-only text-white">Selecione a data para visualizar os dados:</label>

                            <div className="form-group m-1">
                                <Input type="date" className="form-control" name="data" id="buscaDate" onChange={this.handleChange} />
                            </div>

                            <button id="btn" onClick={() => this.ConvertDate()} className="btn btn-secondary h-25" type="submit">Buscar</button>

                        </div>

                        <table className="table table-striped table-bordered  table-dark">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Horário</th>
                                    <th scope="col">Data da marcação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    valueDados.map((lista, i) =>
                                        <tr key={i}>
                                            <td>{i++ + 1}ª Marcação</td>
                                            <td>{this.formatTime(lista.dado_user.slice(18, 22))}</td>
                                            <td>{this.formatDate(lista.dado_user.slice(10, 18))}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </section>
                </div>

            </div>
        );
    }

};



