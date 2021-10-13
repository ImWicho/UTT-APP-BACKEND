import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Area from 'App/Models/Area'
import Order from 'App/Models/Order'
import Quiz from 'App/Models/Quiz'
import Result from 'App/Models/Result'
import CreateQuizValidator from 'App/Validators/CreateQuizValidator'

export default class QuizzesController {
  public async index({ response }: HttpContextContract) {
    const quizes = await Quiz.query()
      .whereHas('results', (query) => {
        query.where('isAnswered', false)
      })
      .preload('providers')
      .preload('results', (query) => query.preload('scores').preload('provider'))

    return response.ok(quizes)
  }

  public async byArea({ response, auth }: HttpContextContract) {
    const areaId = auth.user?.areaId || 0
    const quizes = await Quiz.query()
      .whereHas('order', (query) => {
        query.where('areaId', areaId)
      })
      .andWhereHas('results', (query) => {
        query.where('isAnswered', false)
      })
      .preload('providers')
      .preload('results', (query) => query.preload('scores').preload('provider'))

    return response.ok(quizes)
  }

  public async store({ response, request }: HttpContextContract) {
    await request.validate(CreateQuizValidator)
    const trx = await Database.transaction()
    try {
      const { orderId, providers } = request.body()
      const quiz = await Quiz.create({ orderId }, trx)
      const area = await Area.query()
        .whereHas('order', (query) => {
          query.where('id', orderId)
        })
        .first()
      // area?.email

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
