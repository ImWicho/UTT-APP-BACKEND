import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Area from 'App/Models/Area'
import CreateAreaValidator from 'App/Validators/CreateAreaValidator'

export default class AreasController {
  public async index({ response }: HttpContextContract) {
    const areas = await Area.query().preload('views')
    return response.ok(areas)
  }

  public async store({ request, response }: HttpContextContract) {
    await request.validate(CreateAreaValidator)
    const areaData = request.body()
    const area = await Area.create(areaData)
    return response.created(area)
  }

  public async show({ response, params }: HttpContextContract) {
    const area = await Area.query().where('id', params.id).first()
    if (!area) {
      return response.notFound()
    }
    return response.ok(area)
  }

  public async update({ request, response, params }: HttpContextContract) {
    await request.validate(CreateAreaValidator)
    const area = await Area.findOrFail(params.id)
    area.merge(request.body())
    area.save()
    return response.ok(area)
  }

  public async destroy({ response }: HttpContextContract) {
    return response.notFound()
  }
}
