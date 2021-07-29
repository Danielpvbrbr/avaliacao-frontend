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

    workedHours = () => {
        const cookies = new Cookies();
        const hr1 = cookies.get('v0') || '0000';
        const hr2 = cookies.get('v1') || '0000';
        const hr3 = cookies.get('v2') || '0000';
        const hr4 = cookies.get('v3') || '0000';

        const a = hr1.split('');
        a.splice(2, ".", ".");

        const b = hr2.split('');
        b.splice(2, ".", ".");

        const c = hr3.split('');
        c.splice(2, ".", ".");

        const d = hr4.split('');
        d.splice(2, ".", ".");

        const h1 = Number.parseFloat(a.join(''));
        const h2 = Number.parseFloat(b.join(''));
        const h3 = Number.parseFloat(c.join(''));
        const h4 = Number.parseFloat(d.join(''));

        const trabalhadas = h1 - h2 + h3 - h4;
        const faltosas = h1 - h2 + h3 - h4;
        const extra = h1 - h2 + h3 - h4;

        const horasTb = (trabalhadas.toFixed(2).split(''));
        const horasFt = (faltosas.toFixed(2).split(''));
        const horasHx = (extra.toFixed(2).split(''));

        horasTb.shift();
        horasFt.shift();
        horasHx.shift();
        horasHx.slice(0, 4)

        return [Number.parseFloat(horasTb.join('')), Number.parseFloat(horasFt.join('')), Number.parseFloat(horasHx.join('')) - 9]
    };

    componentDidMount = () => {
        const cookies = new Cookies();
        const getPis = cookies.get('getPis');
        const dateMod = cookies.get('dateMod');
        axios.get(`http://localhost:8000/api/dados/cap/${getPis}`).then(res => {
            const searchDate = res.data.filter(b => b.dado_user.toString().slice(10, 18) === dateMod)
            this.setState({ valueDados: searchDate });

            searchDate.map((item, i) => {
                const horat = item.dado_user.slice(18, 22)
                cookies.set(`v${i++}`, horat, { path: "/" });
            });
        })

    };
    
    //Atualiza tabela
    ToUpdate = () => {
        window.location.replace('/listMarcacao')
    };

    //COnverte data remove -
    ConvertDate = () => {
        const { data } = this.state;
        const cookies = new Cookies();
        const dateMod = data.split('-').reverse().join('');
        cookies.set("dateMod", dateMod, { path: "/listMarcacao" });

        window.location.replace('/listMarcacao')
    };


    //Formatação de hora
    formatTime = (hr) => {
        const hora = hr.split('');
        hora.splice(2, ":", ":");

        return hora.join('')
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
        this.workedHours()
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
                        <table className="table table-striped table-bordered  table-dark">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Horas trabalhadas</th>
                                    <th scope="col">Horas faltosas</th>
                                    <th scope="col">Horas extra</th>
                                    <th scope="col">Atulizar Valores</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.workedHours()[0]}</td>
                                    <td>{this.workedHours()[1] < 9 ? this.workedHours()[1] : '0'}</td>
                                    <td>{this.workedHours()[2].toFixed(2)}</td>
                                    <td><button className="btn btn-success w-100 h-25" onClick={() => this.ToUpdate()}>Atulizar</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>

            </div>
        );
    }

};



