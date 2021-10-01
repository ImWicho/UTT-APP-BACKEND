import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ResultScores extends BaseSchema {
  protected tableName = 'result_scores'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.bigInteger('result_id').unsigned().references('results.id').notNullable()
      table.bigInteger('score_id').unsigned().references('scores.id').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
