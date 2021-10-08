import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasOne,
  hasOne,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
// import Status from './Status'
import Provider from './Provider'
import Area from './Area'
import Quiz from './Quiz'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cost: number

  @column()
  public statusId: number

  @column()
  public areaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // @belongsTo(() => Status)
  // public status: BelongsTo<typeof Status>

  @belongsTo(() => Area)
  public area: BelongsTo<typeof Area>

  @hasOne(() => Quiz)
  public quiz: HasOne<typeof Quiz>

  @manyToMany(() => Provider, {
    pivotTable: 'order_providers',
  })
  public providers: ManyToMany<typeof Provider>
}
