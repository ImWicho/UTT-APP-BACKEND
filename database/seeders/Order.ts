import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Order from 'App/Models/Order'

export default class OrderSeeder extends BaseSeeder {
  public static async run() {
    await Order.createMany([
      {
        cost: 1000,
        statusId: 4,
        areaId: 1,
      },
      {
        cost: 5000,
        statusId: 4,
        areaId: 2,
      },
      {
        cost: 4500,
        statusId: 4,
        areaId: 1,
      },
    ])
  }
}
