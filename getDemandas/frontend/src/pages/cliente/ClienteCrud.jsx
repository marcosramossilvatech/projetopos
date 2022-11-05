import React from 'react';
import Main from '../../components/Main';
import Clienteform from './Clienteform';
import ClienteTable from './ClienteTable';
import api from "../../services/api";

import { NotificationManager } from 'react-notifications';

const headerProps = {
    icon: 'id-badge',
    title: 'Clientes',
    subtitle: 'Cadastro de clientes'
}

var base = '/cliente'

const initialState = {
    cliente: {
        nome    : '',
        email   : '',
        telefone:'', 
        endereco:'', 
        bairro  :'',
        cidade  :'',
        uf  :''
    },
    list: []
}

export default class ClienteCrud extends React.Component {

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
                <Clienteform nome={this.state.cliente.nome}
                    email={this.state.cliente.email}
                    telefone = {this.state.cliente.telefone}
                    endereco = {this.state.cliente.endereco}
                    bairro = {this.state.cliente.bairro}
                    cidade = {this.state.cliente.cidade}
                    uf = {this.state.cliente.uf}
                    clear={this.clear}
                    save={this.save}
                    updateField={this.updateField}
                    handleEnterPress={this.handleEnterPress}
                />
                <ClienteTable list={this.state.list}
                    load={this.load}
                    remove={this.remove}
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
    }

    handleEnterPress(event) {
        if (event.key === 'Enter') {
            this.save()
        }
    }

    clear() {
        this.setState({ cliente: initialState.cliente })
    }

    save() {
        const cliente = this.state.cliente
        const method = cliente.id ? 'put' : 'post'
        const url = cliente.id ? `${base}/${cliente.id}` : base

        if (cliente.nome === '' || cliente.telefone === '') {
            NotificationManager.warning('Nome e telefone obrigatórios', 'Preencha os campos')
        } else {
            if (method === 'post')
            {
                api.post(url,cliente)
                .then(response => {
                        const list = this.getUpdatedList(response.data)
                        this.setState({ cliente: initialState.cliente, list });
                        NotificationManager.success('Cliente criado com sucesso', 'Criar cliente');                                   
                })
                .catch((err) => {
                        NotificationManager.error('Erro ' + err, 'Editar cliente')
                });
            } else{
                api.put(url,cliente)
                .then(response => {
                        const list = this.getUpdatedList(response.data)
                        this.setState({ cliente: initialState.cliente, list });
                        NotificationManager.success('cliente alterado com sucesso', 'Editar cliente')
                })
                .catch((err) => {
                        NotificationManager.error('Erro ' + err, 'Editar cliente')
                });

            }

        }

    }

    getUpdatedList(cliente, add = true) {
        const list = this.state.list.filter(u => u.id !== cliente.id)
        if (add)
            list.unshift(cliente)
        return list
    }

    updateField(event) {
        const cliente = { ...this.state.cliente }
        cliente[event.target.name] = event.target.value
        this.setState({ cliente })
    }

    load(cliente) {
        this.setState({ cliente })
    }

    remove(cliente) {
        api
        .delete(`${base}/${cliente.id}`)
        .then(response => {
            const list = this.getUpdatedList(cliente, false)
            this.setState({ list })
            NotificationManager.success('Cliente excluído com sucesso', 'Excluir cliente')
        })
        .catch((err) => {
            NotificationManager.success('Erro ao  excluír', 'Excluir cliente')
        });  
    }
}