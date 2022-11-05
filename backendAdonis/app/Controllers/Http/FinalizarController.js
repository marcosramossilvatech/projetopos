'use strict';
var moment = require('moment'); 
const Demanda = use('App/Models/Demanda');

class FinalizarController {
    async update ({ params}) {
        try {
            const data = new Date();
            const traco ='-';
            const dia = data.getDate();
            const mes = (data.getMonth() + 1);
            const ano =  data.getFullYear();
            const dataAtual = `${ano}${traco}${mes}${traco}${dia}`;
            const demanda = await Demanda.findOrFail(params.id);
            demanda.merge({dt_fechamento :dataAtual }); 
            await demanda.save();     
        } catch (error) {
          return {mensagem:'Erro ao finalizar demanda!!!', error: error.message}
        }
    }
    async index () {

        const demanda = await Demanda.query().with('cliente').with('servico').fetch();
        return demanda;
    }
}

module.exports = FinalizarController
