import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Score from './Score'

export default class ResultScore extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public resultId: number

  @column()
  public scoreId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Score)
  public score: BelongsTo<typeof Score>
}
