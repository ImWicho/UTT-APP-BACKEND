import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import AreaView from 'App/Models/AreaView'

export default class AreaViewSeeder extends BaseSeeder {
  public static async run() {
    await AreaView.createMany([
      // DESARROLLO
      {
        areaId: 1,
        viewId: 1,
      },
      {
        areaId: 1,
        viewId: 2,
      },
      {
        areaId: 1,
        viewId: 3,
      },
      {
        areaId: 1,
        viewId: 4,
      },

      // SERVICIOS
      {
        areaId: 3,
        viewId: 2,
      },
      {
        areaId: 3,
        viewId: 4,
      },
      {
        areaId: 3,
        viewId: 1,
      },

      // MATERIALES
      {
        areaId: 2,
        viewId: 1,
      },

      // OTRAS AREAS
      {
        areaId: 4,
        viewId: 3,
      },
      {
        areaId: 5,
        viewId: 3,
      },
    ])
  }
}
