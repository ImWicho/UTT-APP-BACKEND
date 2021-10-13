import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Area from 'App/Models/Area'

export default class AreaSeeder extends BaseSeeder {
  public static async run() {
    await Area.createMany([
      {
        name: 'Desarrollo',
        email: 'desarrollo@gmail.com',
      },
      {
        name: 'Recursos Materiales y Servicios Generales',
        email: 'desarrollo@gmail.com',
      },
      {
        name: 'Servicios Administrativos',
        email: 'desarrollo@gmail.com',
      },
      {
        name: 'Vinculación',
        email: 'aguscas43630@gmail.com',
      },
      {
        name: 'Recursos Humanos',
        email: 'luis.carrilloo.perez@gmail.com',
      },
    ])
  }
}
