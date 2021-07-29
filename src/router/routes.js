import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Registrar from '../view/Registrar';
import Home from '../Home';
import MarcPontoList from '../view/MarcPontoList';
import Justificar from '../view/Justificar';
import Import from '../view/Import';
// import Auth from '../view/auth/auth';

export default function Routes(){ 
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/registrar" component={Registrar} />
                <Route path="/listMarcacao" component={MarcPontoList} />
                <Route path="/justificar" component={Justificar} />
                <Route path="/import" component={Import} />
            </Switch>
        </BrowserRouter>
    )
   
};
  