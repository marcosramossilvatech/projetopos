'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Servico = use('App/Models/Servico');
/**
 * Resourceful controller for interacting with servicos
 */
class ServicoController {

  //Get /cliente
  async index () {
    const servico = await Servico.all();
    return servico;
  }

  //Post /cliente
  async store ({ request}) {
    try {
      const data = request.only(['nome','descricao']);
                       
      const servico = await Servico.create({ativo:true,...data});
      return servico;
      
    } catch (error) {
      return {mensagem:'Erro a criar registro!!!', error: error.message}
    }

  }

  async show ({ params}) {
    try {
      const servico = await Servico.findOrFail(params.id);
      return servico;
    } catch (error) {
      return {mensagem:'Não foi encontrado informações!!', error: error.message}
    }
  }

  async update ({ params, request}) {
    try {
      const data = request.only(['nome','descricao','Ativo']);
      const servico = await Servico.findOrFail(params.id);
      servico.merge(data);
      await servico.save();
      return servico;      
    } catch (error) {
      return {mensagem:'Erro a editar registro!!!', error: error.message}
    }
  }

  async destroy ({ params }) {
    try {
      const servico = await Servico.findOrFail(params.id);
      await servico.delete();
      
    } catch (error) {
      return {mensagem:'Erro a excluir registro!!!', error: error.message} 
    }
  }
}

module.exports = ServicoController
