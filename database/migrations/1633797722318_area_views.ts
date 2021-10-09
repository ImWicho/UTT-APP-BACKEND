import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AreaViews extends BaseSchema {
  protected tableName = 'area_views'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.bigInteger('area_id').unsigned().references('areas.id').notNullable()
      table.bigInteger('view_id').unsigned().references('views.id').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
