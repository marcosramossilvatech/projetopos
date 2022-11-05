'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Cliente = use('App/Models/Cliente');

/**
 * Resourceful controller for interacting with clientes
 */
class ClienteController {

  //Get /cliente
  async index () {
    const cliente = await Cliente.all();
    return cliente;
  }

  //Post /cliente
  async store ({ request}) {
    try {
      const data = request.only(['nome','telefone',
                                 'endereco' ,'bairro','cidade',
                                 'uf']);
                       
      const cliente = await Cliente.create({ativo:true,...data});
      return cliente;
      
    } catch (error) {
      return {mensagem:'Erro a criar registro!!!', error: error.message}
    }

  }

  async show ({ params}) {
    try {
      const cliente = await Cliente.findOrFail(params.id);
      return cliente;
    } catch (error) {
      return {mensagem:'Não foi encontrado informações!!', error: error.message}
    }
  }

  async update ({ params, request}) {
    try {
      const data = request.only(['nome','telefone',
                                 'endereco' ,'bairro','cidade',
                                 'uf','Ativo']);
      const cliente = await Cliente.findOrFail(params.id);
      cliente.merge(data);
      await cliente.save();
      return cliente;      
    } catch (error) {
      return {mensagem:'Erro a editar registro!!!', error: error.message}
    }
  }

  async destroy ({ params }) {
    try {
      const cliente = await Cliente.findOrFail(params.id);
      await cliente.delete();
      
    } catch (error) {
      return {mensagem:'Erro a excluir registro!!!', error: error.message} 
    }
  }
}

module.exports = ClienteController
