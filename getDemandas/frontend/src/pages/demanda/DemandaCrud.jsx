import React from 'react';
import Main from '../../components/Main';
import Demandaform from './Demandaform';
import DemandaTable from './DemandaTable';
import api from "../../services/api";

import {  NotificationManager } from 'react-notifications';

const headerProps = {
    icon: 'clipboard',
    title: 'Ordem de serviços',
    subtitle: 'Cadastro de ordem de serviços'
}

var base = '/demanda';
var baseServico = '/servico';
var baseCliente = '/cliente';
var baseColaborador = '/colaborador';
  
const initialState = {
    demanda: {
        descricao         : '',
        servico_id         : '',
        cliente_id         :'',
        nomecliente     :'',
        colaborador_id     :'',
        dt_abertura      :'', 
        dt_fechamento   :'', 
        observacao  :'',
        lista : [],
        listaCliente: [],
        listaColaborador:[]
    },
    list: [],
    listServico:[],
    listCliente:[],
    listColaborador:[]
}

export default class DemandaCrud extends React.Component {

    constructor() {
        super()

        this.state = { ...initialState }

        this.clear = this.clear.bind(this)
        this.save = this.save.bind(this)
        this.getUpdatedList = this.getUpdatedList.bind(this)
        this.updateField = this.updateField.bind(this)
        this.load = this.load.bind(this)
        this.remove = this.remove.bind(this)
        this.handleEnterPress = this.handleEnterPress.bind(this)
    }
    render() {
        return (
            <Main {...headerProps}>
                <Demandaform descricao={this.state.demanda.descricao}
                    servico_id={this.state.demanda.servico_id}
                    cliente_id = {this.state.demanda.cliente_id}
                    colaborador_id = {this.state.demanda.colaborador_id}
                    dt_abertura = {this.state.demanda.dt_abertura.substr(0, 10)}

                    Status = {this.state.demanda.Status}
                    observacao = {this.state.demanda.observacao}
                    lista={this.state.listServico}
                    listaCliente = {this.state.listCliente}
                    listaColaborador = {this.state.listColaborador}
                    clear={this.clear}
                    save={this.save}
                    updateField={this.updateField}
                    handleEnterPress={this.handleEnterPress}
                    
                />
                <DemandaTable list={this.state.list}
                    listServico = {this.state.listServico}
                    lista={this.state.listServico}
                    listaCliente = {this.state.listCliente}
                    load={this.load}
                    remove={this.remove}
                    atualiza={this.atualiza}
                    retornaServico ={this.retornaServico}
                    retornaCliente ={this.retornaCliente}
                />
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

        api
        .get(baseServico)
        .then((resp) => this.setState({ listServico: resp.data }))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });

        api
        .get(baseCliente)
        .then((resp) => this.setState({ listCliente: resp.data }))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });

        api
        .get(baseColaborador)
        .then((resp) => this.setState({ listColaborador: resp.data }))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
        
        
    }

    handleEnterPress(event) {
        if (event.key === 'Enter') {
            this.save()
        }
    }

    clear() {
        this.setState({ demanda: initialState.demanda })
    }

    save() {
        const demanda = this.state.demanda
        const method = demanda.id ? 'put' : 'post'
        const url = demanda.id ? `${base}/${demanda.id}` : base

        if (demanda.descricao === '' || demanda.servico_id === '' || demanda.cliente_id === ''|| demanda.colaborador_id === '') {
            NotificationManager.warning('Descrição, Tipo e cliente são obrigatórios', 'Preencha os campos')
        } else {
            if (method === 'post')
            {
                api.post(url,demanda)
                .then(response => {
                        const list = this.getUpdatedList(response.data)
                        this.setState({ demanda: initialState.demanda, list });
                        NotificationManager.success('Ordem serviço criado com sucesso', 'Criar Ordem serviço');                                   
                })
                .catch((err) => {
                        NotificationManager.error('Erro ' + err, 'Editar Ordem serviço')
                });
            } else{
                api.put(url,demanda)
                .then(response => {
                        const list = this.getUpdatedList(response.data)
                        this.setState({ demanda: initialState.demanda, list });
                        NotificationManager.success('Ordem serviço alterado com sucesso', 'Editar Ordem serviço')
                })
                .catch((err) => {
                        NotificationManager.error('Erro ' + err, 'Editar Ordem serviço')
                });

            }     
        }
    }

    getUpdatedList(demanda, add = true) {
        const list = this.state.list.filter(u => u.id !== demanda.id)
        if (add)
            list.unshift(demanda)
        return list
    }

    updateField(event) {
        const demanda = { ...this.state.demanda }
        demanda[event.target.name] = event.target.value
        this.setState({ demanda })
    }

    load(demanda) {
        this.setState({ demanda })
    }
    retornaServico(listaServico, demanda) {

        var servico = listaServico.filter((servico) => servico.id == demanda.servico_id);
        var  aux =''
        if(servico.length > 0)
         aux = servico[0].nome;
        return aux ;
    }
    retornaCliente(listaCliente, demanda) {

        var cliente = listaCliente.filter((cliente) => cliente.id == demanda.cliente_id);
        var  aux =''
        if(cliente.length > 0)
         aux = cliente[0].nome;
        return aux ;
    }
    atualiza(demanda){
        // const demanda = this.state.demanda
        const url = `${'/finalizar'}/${demanda.id}`;

        api.put(url)
        .then(response => {
            NotificationManager.success('Demanda finalizada com sucesso', 'Finalizado com sucesso')
        })
        .catch((err) => {
                NotificationManager.error('Erro ' + err, 'Editar colaborador')
        });

   
        
    }
    remove(demanda) {
        api
        .delete(`${base}/${demanda.id}`)
        .then(response => {
            const list = this.getUpdatedList(demanda, false)
            this.setState({ list })
            NotificationManager.success('Serviço excluído com sucesso', 'Excluir serviço')
        })
        .catch((err) => {
            NotificationManager.success('Erro ao  excluír', 'Excluir serviço')
        });  
    }

}