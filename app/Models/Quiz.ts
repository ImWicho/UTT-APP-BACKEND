import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Provider from './Provider'
import Order from './Order'

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

  @belongsTo(() => Order)
  public order: BelongsTo<typeof Order>

  @manyToMany(() => Provider, {
    pivotTable: 'results',
  })
  public providers: ManyToMany<typeof Provider>
}
