import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Status from 'App/Models/Status'
import CreateStatusValidator from 'App/Validators/CreateStatusValidator'

export default class StatusesController {
  public async index({ response }: HttpContextContract) {
    const statuses = await Status.all()
    return response.ok(statuses)
  }

  public async store({ request, response }: HttpContextContract) {
    await request.validate(CreateStatusValidator)
    const statusData = request.body()
    const status = await Status.create(statusData)
    return response.created(status)
  }

  public async show({ response, params }: HttpContextContract) {
    const status = await Status.query().where('id', params.id).first()
    if (!status) {
      return response.notFound()
    }
    return response.ok(status)
  }

  public async update({ request, response, params }: HttpContextContract) {
    await request.validate(CreateStatusValidator)
    const status = await Status.findOrFail(params.id)
    status.merge(request.body())
    status.save()
    return response.ok(status)
  }

  public async destroy({ response }: HttpContextContract) {
    return response.notFound()
  }
}
