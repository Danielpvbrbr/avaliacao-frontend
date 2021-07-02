import React, { Component } from 'react';
import './App.css';
import CampoText from './components/CampoText';
import ContainLateral from './components/ContainLateral';
import Input from './components/Input';
import axios from 'axios';
import Cookies from 'universal-cookie';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            valorCamp:'',
            getCampo: '',
            getId:'',
            getTitulo:'',
            IdCockie:[],
            UserCockie:[]
        }

    };

    handleChange = (e) =>{
        this.setState({[e.target.name] : e.target.value});
    };
    
    getCampoValue = (e) => {
        this.setState({getCampo: e.target.value } );
    };
    
    getTituloValue = (e) => {
        this.setState({getTitulo: e.target.value } );
    };

    componentDidMount(){
        const cookies = new Cookies();
        const Id = cookies.get('Id');
        this.setState({IdCockie: Id})

        const Usuario = cookies.get('Usuario');
        this.setState({UserCockie: Usuario})

        axios.get(`http://localhost:8000/api/list/${Id}`)
        .then(res => {
            //  console.log('=>1',res.data) 
        })
        
    }

    handleSubmit = async (e)=>{
        const {getTitulo, getCampo, getId, IdCockie} = this.state
        const getCondicao = getCampo.length > 0 ? true : false
        // const cookies = new Cookies();
        // const IdCockie = cookies.get('Id');

        if(getCondicao === true){
            if(!getId === false){
                axios.put(`http://localhost:8000/api/edit/${getId}/${getTitulo}/${getCampo}`)
                .then(res => {
                    // console.log(res);
                    // console.log(res.data);
                    window.location.replace('/home')
                })
            }else{
                axios.post(`http://localhost:8000/api/form/${IdCockie}/${getTitulo}/${getCampo}`)
                .then(res => {
                    // console.log(res);
                    // console.log(res.data);
                    window.location.replace('/home')
                    console.log("Valores Salvo no banco !!")
                })
            }
        }else{
            console.log("Campo vazio! Preenche o campo.")  
        }
        e.preventDefault(); 
    };

    UpdateCamp=(id)=>{
        const { IdCockie }= this.state
        this.setState({getId : id})
        
        // const cookies = new Cookies();
        // const Id = cookies.get('Id');

        axios.get(`http://localhost:8000/api/list/${IdCockie}`)
        .then(res => {
            const getValue = res.data.filter(result => result.id === id);
            //  console.log(getValue)

            const getCampo = getValue.map(getValue=>{
                return getValue.campoTexto	
            });
            const getTitulo = getValue.map(getValue=>{
                return getValue.titulo
            });
            this.setState({getCampo});
            this.setState({getTitulo});
        });

    };
    
   logout=()=>{
        window.location.replace('/')
   }

render(){
    return(
         <div onSubmit={this.handleSubmit} className="contain-princ">
            <ContainLateral setInfo={(data) => this.setState(state => ({...state, info: data} ),()=>this.UpdateCamp(this.state.info))} />
            <div className="contain-secun">
            
                <section className="contain-topo">
                    <form className="area-salvar">
                    
                        <Input
                        className="campo-texto" 
                        type="text" 
                        name="titulo" 
                        value={this.state.getTitulo}
                        onChange={this.getTituloValue}
                        placeholder="Nova página"
                        maxLength="15"
                        required
                        />
                        
                        <Input
                        className="btn-salvar" 
                        type="submit" 
                        name="salvar" 
                        value="Salvar"
                        />
                         <h1 id="space"> </h1> 

                    </form>
                    <section className="area-section">
                            <label className="labelUser">Usuário:</label>
                            <Input
                            className="userInput" 
                            type="texto" 
                            value={this.state.UserCockie}
                            name="usuario" 
                            readOnly
                            disabled="disabled"
                            />

                            <Input
                            className="btn-sair" 
                            type="button" 
                            onClick={this.logout} 
                            name="sair" 
                            value="Sair"
                            />
                            
                            <h1 id="space"> </h1>
                        </section>

                        
                </section>
            
                    <section> 
                    
                        <CampoText 
                        // setNegrito={(data)=> this.setState(state => ({...state, negrito: data}))}
                        className="campoText"
                        name="campo"
                        value={this.state.getCampo}
                        onChange={this.getCampoValue} 
                        maxLength="1000"
                        required
                        /> 
                    
                    </section>

                    {/* <div className='containInfoMaio'>
                        <section>
                           <h4>Usuário:</h4> <p>{this.state.UserCockie}</p> 
                            <button onClick={this.logout}>Sair</button>
                        </section>
                        
                    </div> */}
                
                </div>
               
            </div>
            
    
        );
    }
    
};