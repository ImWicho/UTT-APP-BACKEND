import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Scores extends BaseSchema {
  protected tableName = 'scores'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.string('name', 50).notNullable()
      table.integer('value').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
