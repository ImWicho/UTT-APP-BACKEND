import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Area from 'App/Models/Area'

export default class AreaSeeder extends BaseSeeder {
  public async run() {
    await Area.createMany([
      {
        name: 'Recursos Materiales y Servicios Generales',
      },
      {
        name: 'Servicios Administrativos',
      },
    ])
  }
}
