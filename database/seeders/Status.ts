import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Status from 'App/Models/Status'

export default class StatusSeeder extends BaseSeeder {
  public static async run() {
    await Status.createMany([
      {
        name: 'No calificado',
      },
      {
        name: 'Confiable',
      },
      {
        name: 'Condicionado',
      },
      {
        name: 'Incompleta',
      },
      {
        name: 'Completa',
      },
    ])
  }
}
