import React, { Component } from 'react';
import '../Home.css';
// import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';
import Cookies from 'universal-cookie';

export default class Dados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueDados: []
        }

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
                        <form>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <input type="text"  className="form-control-plaintext" id="staticEmail" />
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                            </div>
                        </form>
                    </section>
                </div>

            </div>
        );
    }

};
