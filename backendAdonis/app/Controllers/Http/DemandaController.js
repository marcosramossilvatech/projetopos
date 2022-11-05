'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Demanda = use('App/Models/Demanda');

class DemandaController {
   //Get /demanda
   async index () {

    const demanda = await Demanda.query().where('dt_fechamento', null).with('cliente').with('servico').fetch();
    return demanda;
  }

  //Post /demanda
  async store ({ request}) {
    try {
      const data = request.only(['descricao','observacao' ,'servico_id','cliente_id',
                                 'colaborador_id','dt_abertura',]);
                       
      const demanda = await Demanda.create({status : 1,...data});
      return demanda;
      
    } catch (error) {
      return {mensagem:'Erro a criar registro!!!', error: error.message}
    }

  }

  async show ({ params}) {
    try {
      const demanda = await Demanda.findOrFail(params.id);
      return demanda;
    } catch (error) {
      return {mensagem:'Não foi encontrado informações!!', error: error.message}
    }
  }

  async update ({ params, request}) {
    try {
      const data = request.only(['descricao','observacao',
                                 'status' ,'servico_id','cliente_id',
                                 'colaborador_id','dt_abertura', 'dt_fechamento']);
      const demanda = await Demanda.findOrFail(params.id);
      demanda.merge(data);
      await demanda.save();
      return demanda;      
    } catch (error) {
      return {mensagem:'Erro a editar registro!!!', error: error.message}
    }
  }

  async destroy ({ params }) {
    try {
      const demanda = await Demanda.findOrFail(params.id);
      await demanda.delete();
      
    } catch (error) {
      return {mensagem:'Erro a excluir registro!!!', error: error.message} 
    }
  }
}

module.exports = DemandaController
