import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Provider from 'App/Models/Provider'

export default class ProviderSeeder extends BaseSeeder {
  public static async run() {
    await Provider.createMany([
      {
        id: 1,
        name: 'Rivers Systems',
        statusId: 1,
        email: 'luis.carrillo.eon@gmail.com',
      },
      {
        id: 2,
        name: 'Best Buy',
        statusId: 1,
        email: 'luis.carrillo.eon@gmail.com',
      },
      {
        id: 3,
        name: 'PComponentes',
        statusId: 1,
        email: 'luis.carrillo.eon@gmail.com',
      },
      {
        id: 4,
        name: 'PComponentes 2',
        statusId: 1,
        email: 'luis.carrillo.eon@gmail.com',
      },
      {
        id: 5,
        name: 'Ddtech',
        statusId: 1,
        email: 'luis.carrillo.eon@gmail.com',
      },
      {
        id: 6,
        name: 'PC DEC',
        statusId: 1,
        email: 'luis.carrillo.eon@gmail.com',
      },
    ])
  }
}
