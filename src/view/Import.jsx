import React, { Component } from 'react';
// import '../Home.css';
import Menu from '../components/Menu';
import Input from '../components/Input';
import axios from 'axios';
import Cookies from 'universal-cookie';

export default class Import extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getDados: '',
            vall: ''

        }

    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    //Essa função capitura o arquivo importado.
    handleFile = (files) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const arquivTxt = event.target.result;
            this.setState({ valueDados: arquivTxt });
        }

        const file = files.target.files[0];
        reader.readAsText(file);
    };

    //Essa função converte os dados capiturados no arquivo txt e tranforma em um Array.
    convertFile = () => {

        const { valueDados } = this.state;
        const dados = `${valueDados}`;
        dados.trim();
        const ArrayDados = dados.split('\n');

        for (let i in ArrayDados) {
            if (ArrayDados[i] !== 'undefined') {
                // console.log(ArrayDados[i]);
                axios.post(`http://localhost:8000/api/dados/${ArrayDados[i]}`).then(res => {
                     console.log(res.data);
                })

            } else {
                console.log('Campo vázio!')
            }
        }
    }

    //Essa função realiza limpeza total da tabela que armazena os dados, que e importado
    clearTb = () => {
        axios.delete('http://localhost:8000/api/limparTb').then(res => {
            // console.log(res.data)
            alert('Limpesa de dados realizada com sucesso!!')
        });
        const cookies = new Cookies();
        const click = "limpo";
        cookies.set("click", click, { path: "/import" });
    }

    verLimpesa = () => {
        const cookies = new Cookies();
        const click = cookies.get('click');
        if (click === 'limpo') {
            //   console.log('ok')
        } else {
            alert('Antes de realizar a importação realiza a limpeza de dados! ')
        }

    }


    render() {
        this.convertFile()
        return (
            <div id="contain-central" className="container bg-primary">

                <div className="row">
                    <section className="col-md-12">
                        <Menu />
                    </section>
                    <section className="col-md-12">
                        <div className="form-inline  d-flex justify-content-center align-items-center">
                            <label htmlFor="dados" className="sr-only text-white m-1">AFD:</label>
                            <Input onClick={() => this.verLimpesa()} type="file" accept=".txt" className="dados form-control" onChange={(e) => this.handleFile(e)} />
                            <button onClick={() => this.clearTb()} className="h-50 btn btn-danger m-1" type="submit">Limpar dados atual</button>
                        </div>

                    </section>
                </div>

            </div>
        );
    }

};
