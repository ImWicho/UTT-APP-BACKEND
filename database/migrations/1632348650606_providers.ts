import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Providers extends BaseSchema {
  protected tableName = 'providers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.bigInteger('status_id').unsigned().references('statuses.id').notNullable()
      table.string('name', 100).notNullable()
      table.string('email', 200).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
