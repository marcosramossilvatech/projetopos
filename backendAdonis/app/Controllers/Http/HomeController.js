'use strict';
var moment = require('moment'); 

const Demanda = use('App/Models/Demanda');

class HomeController {
    async index(){
        const data = new Date();
        const traco ='-';
        const dia = data.getDate();
        const mes = (data.getMonth() + 1);
        const ano =  data.getFullYear();
        const dataAtual = `${ano}${traco}${mes}${traco}${dia}`;
        const dataMenos2 = `${ano}${traco}${mes}${traco}${dia -2}`;
        const demanda = await Demanda.query()
                                     .with('cliente').with('servico').fetch();
        let listaosacima2 = demanda.rows.filter((os) => {
            return os.dt_fechamento === null && moment(os.dt_abertura).format('YYYY-MM-DD')<= dataMenos2;
        });
        let listaosabertadia = demanda.rows.filter((os) => {
            return moment(os.dt_abertura).format('YYYY-MM-DD')=== dataAtual;
        });
        let listafinalizadadia = demanda.rows.filter((os) => {
            return os.dt_fechamento !== null && moment(os.dt_fechamento).format('YYYY-MM-DD')=== dataAtual;
        });        
        return {osacima2     : `${listaosacima2.length}`,
                osabertadia  : `${listaosabertadia.length}`,
                finalizadadia: `${listafinalizadadia.length}`};
    }
}

module.exports = HomeController
