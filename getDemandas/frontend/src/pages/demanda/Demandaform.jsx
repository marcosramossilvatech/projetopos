import React from 'react';
import Select from 'react-select';


export default props =>

    <div className="form">
        <div className="row">
            <div className="col-12 col-md-12">
                <div className="form-group">
                    <label>Descrição</label>
                    <input type="text"
                        name="descricao"
                        id="descricao"
                        className="form-control"
                        value={props.descricao}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder='Descrição da ordem serviço...' />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Tipo serviço</label>
                 
                    <select name="servico_id" id="servico_id"  className="form-control"
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress} 
                        value={props.servico_id}>
                    <option value= {0}>{'Escolha o tipo de serviço'}</option>
                        {props.lista.map(tipoServico => {
                        return (
                            <option value= {tipoServico.id}>{tipoServico.nome}</option>
                        )
                        })}
                    </select>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Cliente</label>
                    <select name="cliente_id" id="cliente_id"  className="form-control"                     
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress} 
                        value={props.cliente_id}>
                        <option value= {0}>{'Escolha o cliente'}</option>
                        {props.listaCliente.map(cliente => {
                        return (
                            <option value= {cliente.id}>{cliente.nome}</option>
                        )
                        })}
                    </select>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Responsavel pela execução</label>
                    <select name="colaborador_id" id="colaborador_id"  className="form-control"                    
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress} 
                        value={props.colaborador_id} >
                        <option value= {0}>{'Escolha o responsavel pela execução'}</option>
                        {props.listaColaborador.map(colaborador => {
                        return (
                            <option value= {colaborador.id}>{colaborador.nome}</option>
                        )
                        })}
                    </select>
                </div>
            </div>   
            <div className="col-6 col-md-3">
                <div className="form-group">
                    <label>Data cadastro</label>
                    <input type="date"
                        name="dt_abertura"
                        id="dt_abertura"
                        className="form-control"
                        value={props.dt_abertura}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="" />
                </div>
            </div> 
            <div className="col-12 col-md-12">
                <div className="form-group">
                    <label>Endereço</label>
                    <input type="text"
                        name="observacao"
                        id="observacao"
                        className="form-control"
                        value={props.observacao}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="Observação final" />
                </div>
            </div>                     
        </div>

        <hr />

        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-success" onClick={props.save}>
                    <i className="fa fa-save mr-1"></i> Salvar
                </button>
                <button className="btn btn-danger ml-2" onClick={props.clear}>
                    <i className="fa fa-remove mr-1"></i> Cancelar
                </button>
            </div>
        </div>

    </div>