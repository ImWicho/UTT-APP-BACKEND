import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Provider from 'App/Models/Provider'
import Quiz from 'App/Models/Quiz'
import Result from 'App/Models/Result'
import ResultScore from 'App/Models/ResultScore'
import CreateResultValidator from 'App/Validators/CreateResultValidator'
import RestoreProviderValidator from 'App/Validators/RestoreProviderValidator'

export default class ResultsController {
  public async index({ response }: HttpContextContract) {
    const results = await Result.query()
      .has('scores')
      .preload('scores')
      .preload('provider', (query) => query.preload('status'))

    const resultsWithScore = results.map((x) => {
      const values = x.scores.map((x) => x.value)

      let finalScore: number = 0

      values.forEach((x) => {
        finalScore += x
      })

      return {
        ...x.$original,
        ...x.$preloaded,
        finalScore,
      }
    })
    return response.ok(resultsWithScore)
  }

  public async store({ request, response }: HttpContextContract) {
    await request.validate(CreateResultValidator)
    const trx = await Database.transaction()
    try {
      const { resultId, scores } = request.body()
      // const quiz = await Quiz.findOrFail(quizId)
      // quiz.isAnswered = true
      // quiz.useTransaction(trx)
      // await quiz.save()

      for (const score of scores) {
        await ResultScore.create({ resultId, scoreId: score }, trx)
      }

      const totalScore = await this.getScore(resultId)
      const result = await Result.findOrFail(resultId)
      result.isAnswered = true
      result.useTransaction(trx)
      await result.save()

      const provider = await Provider.findOrFail(result.providerId)
      provider.statusId = totalScore >= 80 ? 2 : 3
      provider.useTransaction(trx)
      await provider.save()

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

  public async reEvaluate({ request, response }: HttpContextContract) {
    await request.validate(CreateResultValidator)
    const trx = await Database.transaction()
    try {
      const { resultId, quizId, scores } = request.body()
      const oldResult = await ResultScore.query().where('resultId', resultId)

      for (const old of oldResult) {
        old.useTransaction(trx)
        await old.delete()
      }
      const quiz = await Quiz.findOrFail(quizId)
      quiz.isAnswered = true
      quiz.useTransaction(trx)
      await quiz.save()

      for (const score of scores) {
        await ResultScore.create({ resultId, scoreId: score }, trx)
      }

      const totalScore = await this.getScore(resultId)
      const result = await Result.findOrFail(resultId)
      const provider = await Provider.findOrFail(result.providerId)
      provider.statusId = totalScore >= 80 ? 2 : 3
      provider.useTransaction(trx)
      await provider.save()

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

  public async restoreProvider({ request, response }: HttpContextContract) {
    await request.validate(RestoreProviderValidator)
    const trx = await Database.transaction()
    try {
      const { resultId } = request.body()
      const result = await Result.findOrFail(resultId)
      result.isAnswered = false
      result.useTransaction(trx)
      await result.save()
      const provider = await Provider.findOrFail(result.providerId)
      const oldResult = await ResultScore.query().where('resultId', resultId)

      for (const old of oldResult) {
        old.useTransaction(trx)
        await old.delete()
      }

      provider.statusId = 1
      provider.useTransaction(trx)
      await provider.save()

      await trx.commit()
      return response.created({
        status: true,
        message: 'Provider has been restored successfully',
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

  private async getScore(resultId: number) {
    const resultScores = await ResultScore.query().preload('score').where('resultId', resultId)
    const values = resultScores.map((x) => x.score.value)
    const finalScore = values.reduce((a, b) => a + b)
    return finalScore
  }
}
