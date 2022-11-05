'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterartabelademandaSchema extends Schema {
  up () {
    this.table('demandas', (table) => {
      table.date('dt_abertura')
      table.date('dt_fechamento')
    })
  }

  down () {
    this.table('demandas', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterartabelademandaSchema
