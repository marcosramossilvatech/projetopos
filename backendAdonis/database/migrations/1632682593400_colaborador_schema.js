'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ColaboradorSchema extends Schema {
  up () {
    // this.create('colaboradors', (table) => {
    //   table.increments()
    //   table.string('nome', 240).notNullable()
    //   table.string('funcao', 100).notNullable()
    //   table.integer('user_id')
    //   .unsigned()
    //   .references('id').inTable('user')
    //   .onUpdate('CASCADE')
    //   .onDelete('CASCADE')
    //   table.string('telefone', 20)
    //   table.string('endereco', 240)
    //   table.string('bairro', 100)
    //   table.string('cidade', 100)
    //   table.string('uf', 100)
    //   table.boolean('ativo').notNullable()
    //   table.timestamps()
    // })
  }

  down () {
    this.drop('colaboradors')
  }
}

module.exports = ColaboradorSchema
