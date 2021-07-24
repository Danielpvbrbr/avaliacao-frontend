import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Registro from '../view/Registro';
import Home from '../Home';
import BancoHrList from '../view/BancoHrList';
import MarcPontoList from '../view/MarcPontoList';
import Auth from '../view/auth/auth';

export default function Routes(){ 
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Auth} />
                <Route path="/home" component={Home} />
                <Route path="/registro" component={Registro} />
                <Route path="/listMarcacao" component={MarcPontoList} />
                <Route path="/ListaHoras" component={BancoHrList} />
            </Switch>
        </BrowserRouter>
    )
   
};
  