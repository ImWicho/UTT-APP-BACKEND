import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Quiz from 'App/Models/Quiz'

export default class QuizSeeder extends BaseSeeder {
  public static async run() {
    await Quiz.createMany([
      {
        orderId: 1,
        isAnswered: false,
      },
      {
        orderId: 2,
        isAnswered: false,
      },
      {
        orderId: 3,
        isAnswered: false,
      },
    ])
  }
}
