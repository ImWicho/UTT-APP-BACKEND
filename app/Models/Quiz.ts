import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Provider from './Provider'

export default class Quiz extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public orderId: number

  @column()
  public isAnswered: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Provider, {
    pivotTable: 'results',
  })
  public providers: ManyToMany<typeof Provider>
}
