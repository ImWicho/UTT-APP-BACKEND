import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ResultScore from 'App/Models/ResultScore'

export default class ResultScoresController {
  public async index({ response }: HttpContextContract) {
    const resultScores = await ResultScore.query().preload('score').where('resultId', 1)
    const values = resultScores.map((x) => x.score.value)
    const finalScore = values.reduce((a, b) => a + b)
    return response.ok(finalScore)
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
