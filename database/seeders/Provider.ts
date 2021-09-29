import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Provider from 'App/Models/Provider'

export default class ProviderSeeder extends BaseSeeder {
  public async run() {
    await Provider.createMany([
      {
        name: 'Rivers Systems',
        statusId: 1,
      },
      {
        name: 'Soriana',
        statusId: 1,
      },
      {
        name: 'Walmart',
        statusId: 1,
      },
    ])
  }
}
