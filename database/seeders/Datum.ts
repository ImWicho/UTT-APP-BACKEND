import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import AreaSeeder from './Area'
import AreaViewSeeder from './AreaView'
import OrderSeeder from './Order'
import OrderProviderSeeder from './OrderProvider'
import ProviderSeeder from './Provider'
// import QuizSeeder from './Quiz'
// import ResultSeeder from './Result'
// import ResultScoreSeeder from './ResultScore'
import RoleSeeder from './Role'
import ScoreSeeder from './Score'
import StatusSeeder from './Status'
import UserSeeder from './User'
import ViewSeeder from './View'

export default class DatumSeeder extends BaseSeeder {
  public async run() {
    await RoleSeeder.run()
    await AreaSeeder.run()
    await StatusSeeder.run()
    await UserSeeder.run()
    await OrderSeeder.run()
    await ProviderSeeder.run()
    await OrderProviderSeeder.run()
    await ScoreSeeder.run()
    await ViewSeeder.run()
    await AreaViewSeeder.run()
    // await QuizSeeder.run()
    // await ResultSeeder.run()
    // await ResultScoreSeeder.run()
  }
}
