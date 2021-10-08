import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/user'

export default class UserSeeder extends BaseSeeder {
  public static async run() {
    await User.createMany([
      {
        email: 'admin@gmail.com',
        roleId: 1,
        areaId: 1,
        isActive: true,
        password: '1234',
      },
      {
        email: 'rm@gmail.com',
        roleId: 2,
        areaId: 2,
        isActive: true,
        password: '1234',
      },
      {
        email: 'sa@gmail.com',
        roleId: 2,
        areaId: 3,
        isActive: true,
        password: '1234',
      },
      {
        email: 'vc@gmail.com',
        roleId: 2,
        areaId: 4,
        isActive: true,
        password: '1234',
      },
      {
        email: 'rh@gmail.com',
        roleId: 2,
        areaId: 5,
        isActive: true,
        password: '1234',
      },
    ])
  }
}
