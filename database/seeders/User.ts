import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/user'

export default class UserSeeder extends BaseSeeder {
  public static async run() {
    await User.createMany([
      {
        email: 'luis@gmail.com',
        roleId: 1,
        areaId: 1,
        isActive: true,
        password: 'admin123',
      },
    ])
  }
}
