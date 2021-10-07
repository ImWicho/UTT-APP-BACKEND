import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Score from 'App/Models/Score'

export default class ScoresController {
  public async index({ response }: HttpContextContract) {
    const scores = (await Score.all()).reverse()

    return response.ok(scores)
  }

  public async create({ response }: HttpContextContract) {
    return response.notFound()
  }

  public async store({ response }: HttpContextContract) {
    return response.notFound()
  }

  public async show({ response }: HttpContextContract) {
    return response.notFound()
  }

  public async edit({ response }: HttpContextContract) {
    return response.notFound()
  }

  public async update({ response }: HttpContextContract) {
    return response.notFound()
  }

  public async destroy({ response }: HttpContextContract) {
    return response.notFound()
  }
}
