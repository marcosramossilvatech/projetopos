import React from 'react'

export default props => {

    const lista = props.list

    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    {/* <th>E-mail</th> */}
                    <th>Função</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {lista.map(colaborador => {
                    return (
                        <tr key={colaborador.id}>
                            <td>{colaborador.id}</td>
                            <td>{colaborador.nome}</td>
                            {/* <td>{colaborador.user.email}</td> */}
                            <th>{colaborador.funcao}</th>
                            <th>{colaborador.telefone}</th>
                            <td>
                                <button className="btn btn-warning" title='Editar' onClick={() => props.load(colaborador)}>
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <button className="btn btn-danger ml-2" id='btn-excluir' title='Excluir' onClick={() => props.remove(colaborador)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}