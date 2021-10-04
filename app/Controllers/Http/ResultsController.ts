import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Result from 'App/Models/Result'

export default class ResultsController {
  public async index({ response }: HttpContextContract) {
    const results = await Result.query().preload('scores').preload('provider')

    return response.ok(results)
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
