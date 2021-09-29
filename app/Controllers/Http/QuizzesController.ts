import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Quiz from 'App/Models/Quiz'

export default class QuizzesController {
  public async index({ response }: HttpContextContract) {
    const quizes = await Quiz.query().preload('providers')

    return response.ok(quizes)
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
