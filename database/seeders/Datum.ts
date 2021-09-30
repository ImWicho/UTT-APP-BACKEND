import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import AreaSeeder from './Area'
import OrderSeeder from './Order'
import OrderProviderSeeder from './OrderProvider'
import ProviderSeeder from './Provider'
import QuizSeeder from './Quiz'
import ResultSeeder from './Result'
import ResultScoreSeeder from './ResultScore'
import RoleSeeder from './Role'
import ScoreSeeder from './Score'
import StatusSeeder from './Status'
import UserSeeder from './User'

export default class DatumSeeder extends BaseSeeder {
  public async run() {
    await RoleSeeder.run()
    await AreaSeeder.run()
    await StatusSeeder.run()
    await UserSeeder.run()
    await OrderSeeder.run()
    await ProviderSeeder.run()
    await OrderProviderSeeder.run()
    await QuizSeeder.run()
    await ResultSeeder.run()
    await ScoreSeeder.run()
    await ResultScoreSeeder.run()
  }
}
