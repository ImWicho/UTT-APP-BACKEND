import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'

export default class RoleSeeder extends BaseSeeder {
  public static async run() {
    await Role.createMany([
      {
        name: 'Lider',
      },
      {
        name: 'Secretaria',
      },
    ])
  }
}
