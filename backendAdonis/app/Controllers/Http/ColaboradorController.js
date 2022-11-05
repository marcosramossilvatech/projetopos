'use strict'
const Colaborador = use('App/Models/Colaborador');
const User = use('App/Models/User');

class ColaboradorController {
  async index () {
    const colaborador = await Colaborador.query().with('user').fetch();
    return colaborador;
  }

  //Post /colaborador
  async store ({ request}) {
    try {
      const data = request.only(['nome', 'funcao','telefone',
      'endereco' ,'bairro','cidade',
      'uf']);
      const user = request.only(['email', 'password']);  
      var idUser;
      // if(user !== ''){ 
        
      //   const retorno = await User.create({username: user.email,...user});
      //   idUser = retorno.id;
      //   console.log(retorno);
      // }           
                    
      const colaborador = await Colaborador.create({ativo:true,user_id:0,...data});
      return colaborador;
      
    } catch (error) {
      return {mensagem:'Erro a criar registro!!!', error: error.message}
    }

  }

  async show ({ params}) {
    try {
      const colaborador = await Colaborador.findOrFail(params.id);
      return colaborador;
    } catch (error) {
      return {mensagem:'Não foi encontrado informações!!', error: error.message}
    }
  }

  async update ({ params, request}) {
    try {
      const data = request.only(['nome', 'funcao','telefone',
      'endereco' ,'bairro','cidade',
      'uf']);
      const colaborador = await Colaborador.findOrFail(params.id);
      colaborador.merge(data);
      await colaborador.save();
      return colaborador;      
    } catch (error) {
      return {mensagem:'Erro a editar registro!!!', error: error.message}
    }
  }

  async destroy ({ params }) {
    try {
      const colaborador = await Colaborador.findOrFail(params.id);
      await colaborador.delete();
      
    } catch (error) {
      return {mensagem:'Erro a excluir registro!!!', error: error.message} 
    }
  }
}

module.exports = ColaboradorController
