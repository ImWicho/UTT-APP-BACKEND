import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ResultScore from 'App/Models/ResultScore'

export default class ResultScoreSeeder extends BaseSeeder {
  public static async run() {
    await ResultScore.createMany([
      // Results for Order 1
      {
        resultId: 1,
        scoreId: 1,
      },
      {
        resultId: 1,
        scoreId: 2,
      },
      {
        resultId: 1,
        scoreId: 3,
      },
      {
        resultId: 1,
        scoreId: 3,
      },
      {
        resultId: 1,
        scoreId: 1,
      },
    ])
  }
}
