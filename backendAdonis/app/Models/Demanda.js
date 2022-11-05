'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Demanda extends Model {
    cliente(){
        return this.belongsTo('App/Models/Cliente');
    }
    servico(){
        return this.belongsTo('App/Models/Servico');
    }
}

module.exports = Demanda
