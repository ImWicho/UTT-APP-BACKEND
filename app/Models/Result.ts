import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Score from './Score'
import Provider from './Provider'

export default class Result extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public quizId: number

  @column()
  public providerId: number

  @column()
  public isAnswered: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Score, {
    pivotTable: 'result_scores',
  })
  public scores: ManyToMany<typeof Score>

  @belongsTo(() => Provider)
  public provider: BelongsTo<typeof Provider>
}
