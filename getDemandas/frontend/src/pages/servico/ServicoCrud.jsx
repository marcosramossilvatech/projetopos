import React from 'react'
import Main from '../../components/Main'
import Servicoform from './Servicoform'
import ServicoTable from './ServicoTable'
import api from "../../services/api";

import { NotificationManager } from 'react-notifications'

const headerProps = {
    icon: 'wrench',
    title: 'Serviços',
    subtitle: 'Cadastro de serviços'
}

var base = '/servico'

const initialState = {
    servico: {
        nome    : '',
        descricao   : '',
        ativo:''
    },
    list: []
}

export default class ServicoCrud extends React.Component {

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
                <Servicoform nome={this.state.servico.nome}
                    descricao={this.state.servico.descricao}
                    ativo = {this.state.servico.ativo}
                    clear={this.clear}
                    save={this.save}
                    updateField={this.updateField}
                    handleEnterPress={this.handleEnterPress}
                />
                <ServicoTable list={this.state.list}
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
        this.setState({ servico: initialState.servico })
    }

    save() {
        const servico = this.state.servico
        const method = servico.id ? 'put' : 'post'
        const url = servico.id ? `${base}/${servico.id}` : base

        if (servico.nome === '' || servico.descricao === '') {
            NotificationManager.warning('Nome e descrição obrigatórios', 'Preencha os campos')
        } else {
            if (method === 'post')
            {
                api.post(url,servico)
                .then(response => {
                        const list = this.getUpdatedList(response.data)
                        this.setState({ servico: initialState.servico, list });
                        NotificationManager.success('Serviço criado com sucesso', 'Criar serviço');                                   
                })
                .catch((err) => {
                        NotificationManager.error('Erro ' + err, 'Editar serviço')
                });
            } else{
                api.put(url,servico)
                .then(response => {
                        const list = this.getUpdatedList(response.data)
                        this.setState({ servico: initialState.servico, list });
                        NotificationManager.success('Serviço alterado com sucesso', 'Editar serviço')
                })
                .catch((err) => {
                        NotificationManager.error('Erro ' + err, 'Editar serviço')
                });

            }

        }

    }

    getUpdatedList(servico, add = true) {
        const list = this.state.list.filter(u => u.id !== servico.id)
        if (add)
            list.unshift(servico)
        return list
    }

    updateField(event) {
        const servico = { ...this.state.servico }
        servico[event.target.name] = event.target.value
        this.setState({ servico })
    }

    load(servico) {
        this.setState({ servico })
    }

    remove(servico) {
        api
        .delete(`${base}/${servico.id}`)
        .then(response => {
            const list = this.getUpdatedList(servico, false)
            this.setState({ list })
            NotificationManager.success('Serviço excluído com sucesso', 'Excluir serviço')
        })
        .catch((err) => {
            NotificationManager.success('Erro ao  excluír', 'Excluir serviço')
        });        
    }


}