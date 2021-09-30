import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'

export default class OrdersController {
  public async index({ response }: HttpContextContract) {
    const orders = await Order.query()
      .preload('providers')
      .preload('status')
      .preload('area')
      .preload('quiz', (query) => {
        query.preload('providers')
      })

    return response.ok(orders)
  }

  public async withQuiz({ response }: HttpContextContract) {
    const orders = await Order.query()
      .has('quiz')
      .preload('providers')
      .preload('status')
      .preload('area')
      .preload('quiz', (query) => {
        query.preload('providers')
      })

    return response.ok(orders)
  }

  public async withOutQuiz({ response }: HttpContextContract) {
    const orders = await Order.query()
      .doesntHave('quiz')
      .preload('providers')
      .preload('status')
      .preload('area')
      .preload('quiz', (query) => {
        query.preload('providers')
      })

    return response.ok(orders)
  }

  public async store({ response }: HttpContextContract) {
    return response.notFound()
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
