import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Result from 'App/Models/Result'

export default class ResultSeeder extends BaseSeeder {
  public static async run() {
    await Result.createMany([
      {
        quizId: 1,
        providerId: 1,
      },
      {
        quizId: 2,
        providerId: 2,
      },
      {
        quizId: 3,
        providerId: 3,
      },
      {
        quizId: 1,
        providerId: 3,
      },
      {
        quizId: 2,
        providerId: 1,
      },
      {
        quizId: 3,
        providerId: 2,
      },
    ])
  }
}
