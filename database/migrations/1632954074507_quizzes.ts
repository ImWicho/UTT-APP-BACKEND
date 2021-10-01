import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Quizzes extends BaseSchema {
  protected tableName = 'quizzes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.bigInteger('order_id').unsigned().references('orders.id').notNullable().unique()
      table.boolean('is_answered').notNullable().defaultTo(false)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
