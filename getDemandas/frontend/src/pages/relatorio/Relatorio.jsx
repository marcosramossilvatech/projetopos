import React from 'react';
import Main from '../../components/Main';
import Relatorioform from './Relatorioform';
import RelatorioTable from './RelatorioTable';
import api from "../../services/api";
const headerProps = {
    icon: 'list-alt',
    title: 'Relatório',
    subtitle: 'Relatório'
}
var base = '/finalizar';
const initialState = {
    demanda: {
        descricao         : '',
        servico_id         : '',
        cliente_id         :'',
        colaborador_id     :'',
        dt_abertura      :'', 
        dt_fechamento   :'', 
        observacao  :'',
        filtar     : false
    },
    list: []
}

var dataPesquisa ='' ;

export default class Relatorio extends React.Component {
    constructor() {
        super()

        this.state = { ...initialState }
        this.updateField = this.updateField.bind(this)
    }
    render() {
        return (
            <Main {...headerProps}>
                <Relatorioform 
                    filtrar={this.filtrar}
                    updateField={this.updateField}
                    lista = {this.state.list}                    
                />
                <RelatorioTable list={this.state.list}/>
            </Main>
        )
    }
    componentWillMount() {
        api
        .get(base)
        .then((response) => this.setState({ list: response.data }))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });  
      
    }
    updateField(event) {
        const demanda = { ...this.state.demanda }
        demanda[event.target.name] = event.target.value
        dataPesquisa = event.target.value;
        this.setState({ demanda })
    }

    getUpdatedList() {
        const lista = this.state.list.filter(u => u.dt_abertura >= dataPesquisa)
        return lista;
    }


    filtrar(listas) {
    

    }
}