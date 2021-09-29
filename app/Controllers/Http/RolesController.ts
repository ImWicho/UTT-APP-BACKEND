import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Role from 'App/Models/Role'
import CreateRoleValidator from 'App/Validators/CreateRoleValidator'

export default class RolesController {
  public async index({ response }: HttpContextContract) {
    const roles = await Role.all()
    return response.ok(roles)
  }

  public async store({ request, response }: HttpContextContract) {
    await request.validate(CreateRoleValidator)
    const roleData = request.body()
    const role = await Role.create(roleData)
    return response.created(role)
  }

  public async show({ response, params }: HttpContextContract) {
    const role = await Role.query().where('id', params.id).first()
    if (!role) {
      return response.notFound()
    }
    return response.ok(role)
  }

  public async update({ request, response, params }: HttpContextContract) {
    await request.validate(CreateRoleValidator)
    const role = await Role.findOrFail(params.id)
    role.merge(request.body())
    role.save()
    return response.ok(role)
  }

  public async destroy({ response }: HttpContextContract) {
    return response.notFound()
  }
}
