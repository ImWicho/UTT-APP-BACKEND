import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/user'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const users = await User.query().preload('area').preload('role')

    return response.ok(users)
  }
}
