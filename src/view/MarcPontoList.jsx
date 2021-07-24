import React, { Component } from 'react';
import '../Home.css';
import './MarcPontoList.css';
import Menu from '../components/Menu';

export default class MarcPontoList extends Component {
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

                    <section id="contain-listMarcacao" className="col-md-12 ">
                        <table className="table table-striped table-bordered  table-dark">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Horário</th>
                                    <th scope="col">Data da marcação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1ª Marcação</td>
                                    <td>08:00</td>
                                    <td>18/06/2021</td>
                                </tr>

                                <tr>
                                    <td>2ª Marcação</td>
                                    <td>12:00</td>
                                    <td>18/06/2021</td>
                                </tr>

                                <tr>
                                    <td>3ª Marcação</td>
                                    <td>13:00</td>
                                    <td>18/06/2021</td>
                                </tr>

                                <tr>
                                    <td>4ª Marcação</td>
                                    <td>18:00</td>
                                    <td>18/06/2021</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>

            </div>
        );
    }

};



