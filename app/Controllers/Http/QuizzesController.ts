import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Quiz from 'App/Models/Quiz'
import Result from 'App/Models/Result'

export default class QuizzesController {
  public async index({ response }: HttpContextContract) {
    const quizes = await Quiz.query().preload('providers')

    return response.ok(quizes)
  }

  public async store({ response, request }: HttpContextContract) {
    const trx = await Database.transaction()
    try {
      const { orderId, providers } = request.body()
      const quiz = await Quiz.create({ orderId }, trx)

      for (const provider of providers) {
        await Result.create({ providerId: provider, quizId: quiz.id }, trx)
      }
      await trx.commit()
      return response.created({
        status: true,
        message: 'Quiz was created successfully',
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

  public async show({ response }: HttpContextContract) {
    return response.notFound()
  }

  public async update({ response }: HttpContextContract) {
    return response.notFound()
  }

  public async destroy({ response }: HttpContextContract) {
    return response.notFound()
  }
}
