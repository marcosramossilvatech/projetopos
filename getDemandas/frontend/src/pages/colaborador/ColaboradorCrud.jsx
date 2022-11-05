import React from 'react'
import Main from '../../components/Main'
import Colaboradorform from './Colaboradorform'
import ColaboradorTable from './ColaboradorTable';
import api from "../../services/api";

import { NotificationManager } from 'react-notifications'

const headerProps = {
    icon: 'user',
    title: 'Colaboradores/usuários',
    subtitle: 'Cadastro de colaboradores e usuários'
}
var base = '/colaborador'
const initialState = {
    colaborador: {
        nome    : '',
        email   : '',
        password:'',
        funcao  :'',        
        telefone:'', 
        endereco:'', 
        bairro  :'',
        cidade  :'',
        uf      :''
    },
    list: []
}

export default class ColaboradorCrud extends React.Component {

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
        this.setState({ colaborador: initialState.colaborador })
    }

    save() {

        const colaborador = this.state.colaborador
        const method = colaborador.id ? 'put' : 'post'
        const url = colaborador.id ? `${base}/${colaborador.id}` : base

        if (colaborador.nome === ''  || colaborador.funcao === '') {
            NotificationManager.warning('Nome, email e função são obrigatórios', 'Preencha os campos')
        } else {
            if (method === 'post')
            {
                api.post(url,colaborador)
                .then(response => {
                        const list = this.getUpdatedList(response.data)
                        this.setState({ colaborador: initialState.colaborador, list });
                        NotificationManager.success('colaborador criado com sucesso', 'Criar colaborador');                                   
                })
                .catch((err) => {
                        NotificationManager.error('Erro ' + err, 'Editar colaborador')
                });
            } else{
                api.put(url,colaborador)
                .then(response => {
                        const list = this.getUpdatedList(response.data)
                        this.setState({ colaborador: initialState.colaborador, list });
                        NotificationManager.success('colaborador alterado com sucesso', 'Editar colaborador')
                })
                .catch((err) => {
                        NotificationManager.error('Erro ' + err, 'Editar colaborador')
                });

            }     
        }
    }

    getUpdatedList(colaborador, add = true) {
        const list = this.state.list.filter(u => u.id !== colaborador.id)
        if (add)
            list.unshift(colaborador)
        return list
    }

    updateField(event) {
        const colaborador = { ...this.state.colaborador }
        colaborador[event.target.name] = event.target.value
        this.setState({ colaborador })
    }

    load(colaborador) {
        this.setState({colaborador })
    }

    remove(colaborador) {
        api
        .delete(`${base}/${colaborador.id}`)
        .then(response => {
            const list = this.getUpdatedList(colaborador, false)
            this.setState({ list })
            NotificationManager.success('Colaborador excluído com sucesso', 'Excluir colaborador')
        })
        .catch((err) => {
            NotificationManager.success('Erro ao  excluír', 'Excluir colaborador')
        });    
    }

    render() {
        return (
            <Main {...headerProps}>
                <Colaboradorform nome={this.state.colaborador.nome}
                     user = {this.state.colaborador.user}
                    //  email=  {user.email}
                    funcao = {this.state.colaborador.funcao}
                    telefone = {this.state.colaborador.telefone}
                    endereco = {this.state.colaborador.endereco}
                    bairro = {this.state.colaborador.bairro}
                    cidade = {this.state.colaborador.cidade}
                    uf = {this.state.colaborador.uf}
                    clear={this.clear}
                    save={this.save}
                    updateField={this.updateField}
                    handleEnterPress={this.handleEnterPress}
                />
                <ColaboradorTable list={this.state.list}
                    load={this.load}
                    remove={this.remove}
                />
            </Main>
        )
    }
}