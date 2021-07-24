import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

export default class Menu extends Component {

    render() {
        return (
            <ul id="contain-menu" className="nav nav-tabs mb-4">
                <li className="nav-item">
                    <Link to={"/home"} className="text-white nav-link">Home</Link>
                </li>

                <li className="nav-item">
                    <Link to={"/listMarcacao"} className="text-white nav-link">Lista de Marcaçoes</Link>
                </li>

                <li className="nav-item">
                    <Link to={"/ListaHoras"} className="text-white nav-link">Banco de horas</Link>
                </li>

                <li className="nav-item">
                    <Link to={"/registro"} className="text-white nav-link">Registro</Link>
                </li>

                <li className="nav-item">
                    <Link to={"/"} className="text-white nav-link">Sair</Link>
                </li>
            </ul>
        );
    }

};
