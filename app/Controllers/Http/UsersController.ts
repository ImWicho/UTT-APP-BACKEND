import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/user'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const users = await User.query().preload('area').preload('role')

    return response.ok(users)
  }

  public async getUser({ response, auth }: HttpContextContract) {
    const userId = auth.user?.id || 0

    const user = await User.query().where('id', userId).preload('area').preload('role').first()

    return response.ok(user)
  }
}
