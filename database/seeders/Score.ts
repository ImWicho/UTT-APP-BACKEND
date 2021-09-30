import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Score from 'App/Models/Score'

export default class ScoreSeeder extends BaseSeeder {
  public static async run() {
    await Score.createMany([
      {
        name: 'Excelente',
        value: 25,
      },
      {
        name: 'Bueno',
        value: 20,
      },
      {
        name: 'Regular',
        value: 15,
      },
      {
        name: 'Deficiente',
        value: 10,
      },
    ])
  }
}
