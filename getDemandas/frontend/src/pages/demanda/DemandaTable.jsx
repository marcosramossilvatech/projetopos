import React from 'react';
import Moment from 'react-moment';

export default props => {

    const lista = props.list;
    var i = 0
    const listaServico= props.lista;
    const listaCliente = props.listaCliente;


    return (
        
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tipo serviço</th>
                    <th>Cliente</th>
                    <th>Data cadastro</th>
                   
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {lista.map((demanda, index )=> {
                    return (
                        <tr key={demanda.id}>
                            <td>{demanda.id}</td>
                            <td>{props.retornaServico(listaServico, demanda)}</td>
                            <td>{props.retornaCliente(listaCliente, demanda)}</td>
                            <th> <Moment format= "DD/MM/YYYY">{demanda.dt_abertura}</Moment></th>
                            <td>
                                <button className="btn btn-warning" title='Editar' onClick={() => props.load(demanda)}>
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <button className="btn btn-danger ml-2" id='btn-excluir' title='Excluir' onClick={() => props.remove(demanda)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                                <button className="btn btn-success ml-2" id='btn-concluir' title='Finalizar' onClick={() => props.atualiza(demanda)}>
                                    <i className="fa fa-check-circle"></i>
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}