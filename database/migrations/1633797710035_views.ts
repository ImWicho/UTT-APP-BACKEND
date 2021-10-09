import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Views extends BaseSchema {
  protected tableName = 'views'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.string('name', 50).notNullable()
      table.string('path', 50).notNullable()
      table.string('icon', 50).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
