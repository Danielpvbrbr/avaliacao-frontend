import React, { Component } from 'react';
import './Home.css';
import Menu from './components/Menu';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
                        <h3 className="text-center text-white mt-5">Seja bem-vindo! ao sistema!</h3>
                    </section>
                </div>

            </div>
        );
    }

};
