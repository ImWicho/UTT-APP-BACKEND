import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Results extends BaseSchema {
  protected tableName = 'results'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.bigInteger('quiz_id').unsigned().references('quizzes.id').notNullable()
      table.bigInteger('provider_id').unsigned().references('providers.id').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
