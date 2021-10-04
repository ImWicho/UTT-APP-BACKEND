import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Quiz from 'App/Models/Quiz'
import Result from 'App/Models/Result'
import ResultScore from 'App/Models/ResultScore'
import CreateResultValidator from 'App/Validators/CreateResultValidator'

export default class ResultsController {
  public async index({ response }: HttpContextContract) {
    const results = await Result.query().preload('scores').preload('provider')

    return response.ok(results)
  }

  public async store({ request, response }: HttpContextContract) {
    await request.validate(CreateResultValidator)
    const trx = await Database.transaction()
    try {
      const { resultId, quizId, scores } = request.body()
      const quiz = await Quiz.findOrFail(quizId)
      quiz.isAnswered = true
      quiz.useTransaction(trx)
      await quiz.save()

      for (const score of scores) {
        await ResultScore.create({ resultId, scoreId: score }, trx)
      }

      await trx.commit()
      return response.created({
        status: true,
        message: 'Quiz has been answered successfully',
      })
    } catch (error: any) {
      await trx.rollback()
      console.log(error)
      return response.internalServerError({
        status: false,
        message: 'Something went wrong',
      })
    }
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
