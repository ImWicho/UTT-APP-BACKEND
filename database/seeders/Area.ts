import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Area from 'App/Models/Area'

export default class AreaSeeder extends BaseSeeder {
  public static async run() {
    await Area.createMany([
      {
        name: 'Desarrollo',
      },
      {
        name: 'Recursos Materiales y Servicios Generales',
      },
      {
        name: 'Servicios Administrativos',
      },
      {
        name: 'Vinculación',
      },
      {
        name: 'Recursos Humanos',
      },
    ])
  }
}
