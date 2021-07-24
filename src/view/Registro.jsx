import React, { Component } from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Menu from '../components/Menu';

export default class BancoHrList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valorCamp: '',
            getCampo: '',
            getId: '',
            getTitulo: '',

        }

    };

    render() {
        return (
            <div id="contain-central" className="container bg-primary">

                <div className="row">
                    <section className="col-md-12">
                        <Menu />
                    </section>

                    <section className="col-md-12">
                        <form id='formRegistro' onSubmit={this.handleSubmit}>
                            <section className="w-25" >
                                <legend>Rigistro de colaboradores.</legend>

                                <label>Nome:</label>
                                <Input type='texto' className="form-control form-control-sm" required onChange={this.handleChange} name="getNome" placeholder="Digite seu nome" maxLength='20' />

                                <label>PIS:</label>
                                <Input type='texto' className="form-control form-control-sm" required onChange={this.handleChange} name="getPis" placeholder="Digite seu Pis" maxLength='20' />

                                <label>Matrícula:</label>
                                <Input type='texto' className="form-control form-control-sm" required onChange={this.handleChange} name="getMat" placeholder="Digite a matrícula" maxLength='16' />

                                <button>Cadastre-se</button>
                                <Link to={'/'}>
                                    <button>Voltar</button>
                                </Link>
                            </section>
                        </form>
                    </section>
                </div>

            </div >
        );
    }

};
