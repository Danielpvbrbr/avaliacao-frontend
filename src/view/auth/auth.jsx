import React, { Component } from 'react';
import './auth.css';
import Input from '../../components/Input';
import { Button } from 'reactstrap';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }

    };

    render() {
        return (
            <div id="contain-acesso" className="container">

                <div className="row">
                    <section className="col-md-12">
                    <h4 className="text-center text-white mt-5">ACESSO AO GERENCIADOR DE PONTO</h4>

                        <form className="form-inline  d-flex justify-content-center align-items-center">
                        <label for="mat" className="sr-only text-white">Matricula:</label>
                            <div className="form-group m-1">
                                <Input type="password" className="form-control " id="mat" placeholder="Digite sua matricula" />
                            </div>

                            <button id="btn" className="btn btn-primary" type="submit">Acessar</button>
                        </form>
                    </section>
                </div>

            </div>
        );
    }

};



