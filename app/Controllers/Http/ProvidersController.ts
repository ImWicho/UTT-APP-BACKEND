import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Provider from 'App/Models/Provider'
import CreateProviderValidator from 'App/Validators/CreateProviderValidator'

export default class ProvidersController {
  public async index({ response }: HttpContextContract) {
    const providers = await Provider.query().preload('status')
    return response.ok(providers)
  }

  public async store({ request, response }: HttpContextContract) {
    await request.validate(CreateProviderValidator)

    const providerData = request.body()
    const provider = await Provider.create(providerData)
    return response.created(provider)
  }

  public async show({ response, params }: HttpContextContract) {
    const provider = await Provider.query().preload('status').where('id', params.id).first()
    if (!provider) {
      return response.notFound()
    }
    return response.ok(provider)
  }

  public async update({ request, response, params }: HttpContextContract) {
    await request.validate(CreateProviderValidator)
    const provider = await Provider.findOrFail(params.id)
    provider.merge(request.body())
    provider.save()
    return response.ok(provider)
  }

  public async destroy({ response }: HttpContextContract) {
    return response.notFound()
  }
}
