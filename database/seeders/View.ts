import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import View from 'App/Models/View'

export default class ViewSeeder extends BaseSeeder {
  public static async run() {
    await View.createMany([
      {
        name: 'Proveedores',
        path: '/main/providers',
        icon: 'account-group',
      },
      {
        name: 'Ordenes',
        path: '/main/orders',
        icon: 'clipboard-file',
      },
      {
        name: 'Encuestas',
        path: '/main/quizes',
        icon: 'text-box-check',
      },
      {
        name: 'Resultados',
        path: '/main/results',
        icon: 'counter',
      },
    ])
  }
}
