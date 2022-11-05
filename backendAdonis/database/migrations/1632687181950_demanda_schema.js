'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DemandaSchema extends Schema {
  up () {
    this.create('demandas', (table) => {
      table.increments()
      table.string('descricao', 240)
      table.boolean('status').notNullable()
      table.string('observacao', 240)
      table
      .integer('servico_id')
      .unsigned()
      .notNullable()
      .references('id').inTable('servicos')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table
      .integer('cliente_id')
      .unsigned()
      .notNullable()
      .references('id').inTable('clientes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table
      .integer('colaborador_id')
      .unsigned()
      .notNullable()
      .references('id').inTable('colaboradors')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.timestamps()      
    })
  }

  down () {
    this.drop('demandas')
  }
}

module.exports = DemandaSchema
