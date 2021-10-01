import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrderProviders extends BaseSchema {
  protected tableName = 'order_providers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.bigInteger('order_id').unsigned().references('orders.id').notNullable()
      table.bigInteger('provider_id').unsigned().references('providers.id').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
