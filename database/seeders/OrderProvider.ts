import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import OrderProvider from 'App/Models/OrderProvider'

export default class OrderProviderSeeder extends BaseSeeder {
  public static async run() {
    await OrderProvider.createMany([
      {
        orderId: 1,
        providerId: 2,
      },
      {
        orderId: 1,
        providerId: 2,
      },
      {
        orderId: 2,
        providerId: 2,
      },
      {
        orderId: 2,
        providerId: 2,
      },
    ])
  }
}
