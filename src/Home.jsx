import React, { Component } from 'react';
import './Home.css';
import Menu from './components/Menu';
import Cookies from 'universal-cookie';
import axios from 'axios';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeCap:'',
            func: []
        }

    };
    getValue = (pis) => {
        console.log(this.state.pis)
        const cookies = new Cookies();
        cookies.set("getPis", pis, { path: "/listMarcacao" });
    };
    componentDidMount = () =>{
        const cookies = new Cookies();
        const nomeCap = cookies.get('nomeCap');
        this.setState({nomeCap});

        axios.get(`http://localhost:8000/api/auth/funcionarios`).then(res => {
            this.setState({ func: res.data });
            console.log(res.data)
        })
    }

    render() {
        const { func } = this.state;
        return (
            <div id="contain-central" className="container bg-primary">

                <div className="row">
                    <section className="col-md-12">
                        <Menu />
                    </section>

                    <section className="col-md-12">
                        <h2 className="text-center text-white mt-4">Olá {this.state.nomeCap } Seja bem-vindo! ao sistema!</h2>
                    </section>

                    <section id="contai-select" className="col-md-5 border p-2">
                        <h3>Selecione o funcionario</h3>
                        {
                            func.map((lista, i) =>
                                <ul key={i} className="list-group">
                                    <li onClick={() => this.getValue(lista.pis)} className="list-group-item"><p>Nome:{lista.nome}</p> <p>Matricula:{lista.matricula} </p> <p>PIS:{lista.pis}</p></li>
                                </ul>
                            )
                        }
                    </section>
                </div>

            </div>
        );
    }

};
