import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Provider from 'App/Models/Provider'

export default class ProviderSeeder extends BaseSeeder {
  public static async run() {
    await Provider.createMany([
      {
        id: 1,
        name: 'Rivers Systems',
        statusId: 1,
      },
      {
        id: 2,
        name: 'Best Buy',
        statusId: 1,
      },
      {
        id: 3,
        name: 'PComponentes',
        statusId: 1,
      },
      {
        id: 4,
        name: 'PComponentes',
        statusId: 1,
      },
      {
        id: 5,
        name: 'Ddtech',
        statusId: 1,
      },
      {
        id: 6,
        name: 'PC DEC',
        statusId: 1,
      },
    ])
  }
}
