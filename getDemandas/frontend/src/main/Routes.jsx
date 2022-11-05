import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../pages/home/Home';
import ColaboradorCrud from '../pages/colaborador/ColaboradorCrud';
import ClienteCrud from '../pages/cliente/ClienteCrud';
import ServicoCrud from '../pages/servico/ServicoCrud';
import DemandaCrud from '../pages/demanda/DemandaCrud';
import Relatorio from '../pages/relatorio/Relatorio';


export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/colaboradores' component={ColaboradorCrud}/>
        <Route path='/clientes' component={ClienteCrud}/>
        <Route path='/servicos' component={ServicoCrud}/>
        <Route path='/demandas' component={DemandaCrud}/>
        <Route path='/relatorio' component={Relatorio}/>
        <Redirect from='*' to='/' />
    </Switch>