import React, { Component } from 'react';
import '../Home.css';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

export default class BancoHrList extends Component {
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
                    <table className="table table-striped table-bordered  table-dark">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Horário</th>
                                    <th scope="col">Horas trabalhadas</th>
                                    <th scope="col">Horas extras</th>
                                    <th scope="col">Horas faltosas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1ª Marcação</td>
                                    <td>08:00</td>
                                    <td>3:00</td>
                                    <td>-9:00</td>
                                    <td>@twitter</td>
                                </tr>

                                <tr>
                                    <td>2ª Marcação</td>
                                    <td>12:00</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@twitter</td>
                                </tr>

                                <tr>
                                    <td>3ª Marcação</td>
                                    <td>13:00</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                </tr>

                                <tr>
                                    <td>4ª Marcação</td>
                                    <td>18:00</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>

            </div>
        );
    }

};
