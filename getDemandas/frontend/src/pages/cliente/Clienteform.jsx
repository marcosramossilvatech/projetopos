import React from 'react';
import InputMask from 'react-input-mask';

export default props =>
    <div className="form">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text"
                        name="nome"
                        id="nome"
                        className="form-control"
                        autoComplete='off'
                        value={props.nome}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder='Digite o nome...' />
                </div>
            </div>

            <div className="col-6 col-md-6">
                <div className="form-group">
                    <label>Telefone</label>
                    <InputMask type="text"
                        name="telefone"
                        id="telefone"
                        mask="(99) 9 9999-9999"
                        className="form-control"
                        autoComplete='off'
                        value={props.telefone}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                         />
                </div>
            </div>  
            <div className="col-6 col-md-6">
                <div className="form-group">
                    <label>Endereço</label>
                    <input type="text"
                        name="endereco"
                        id="endereco"
                        className="form-control"
                        autoComplete='off'
                        value={props.endereco}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="Endereço" />
                </div>
            </div>                     
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Bairro</label>
                    <input type="text"
                        name="bairro"
                        id="bairro"
                        className="form-control"
                        autoComplete='off'
                        value={props.bairro}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="Bairro" />
                </div>
            </div> 
            <div className="col-10 col-md-5">
                <div className="form-group">
                    <label>Cidade</label>
                    <input type="text"
                        name="cidade"
                        id="cidade"
                        className="form-control"
                        autoComplete='off'
                        value={props.cidade}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="Cidade" />
                </div>
            </div> 
            <div className="col-2 col-md-2">
                <div className="form-group">
                    <label>UF</label>
                    <input type="text"
                        name="uf"
                        id="uf"
                        className="form-control"
                        autoComplete='off'
                        value={props.uf}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="UF" />
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