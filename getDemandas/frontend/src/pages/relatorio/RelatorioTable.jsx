import React from 'react';
import Moment from 'react-moment';

export default props => {

    const lista = props.list;
    const listaModificada = lista.map(function(l) {
        return {
            id: l.id,
            servico_id: l.servico_id,
            tiposervico : l.servico.nome,
            cliente_id: l.cliente_id, 
            cliente : l.cliente.nome,
            dt_abertura: l.dt_abertura,            
            dt_fechamento: l.dt_fechamento
        };
      }); 

    return (
   
        <table className="table mt-4">

            <thead>
                <tr>
                    <th>Tipo serviço</th>
                    <th>Cliente</th>
                    <th>Data cadastro</th>
                    <th>Data finalização</th>
                </tr>
            </thead>
            <tbody>

                {listaModificada.map(demanda => {
                    return (
                       
                        <tr key={demanda.id}>                           
                            <td>{demanda.tiposervico}</td> 
                            <td>{demanda.cliente}</td>
                            <th><Moment format= "DD/MM/YYYY">{demanda.dt_abertura}</Moment></th>   
                            <th>{demanda.dt_fechamento !== null?<Moment format= "DD/MM/YYYY">{demanda.dt_fechamento}</Moment>: null}</th>                                     
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}