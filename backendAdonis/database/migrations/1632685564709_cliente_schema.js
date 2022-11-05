'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments()
      table.string('nome', 240).notNullable()
      table.string('telefone', 20)
      table.string('endereco', 240)
      table.string('bairro', 100)
      table.string('cidade', 100)
      table.string('uf', 100)
      table.boolean('ativo').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClienteSchema
