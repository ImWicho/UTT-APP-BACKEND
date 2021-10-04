import Route from '@ioc:Adonis/Core/Route'

Route.post('login', 'AuthController.login')
Route.post('logout', 'AuthController.logout')

Route.group(() => {
  Route.resource('providers', 'ProvidersController')
  Route.resource('statuses', 'StatusesController')
  Route.resource('areas', 'AreasController')
  Route.resource('roles', 'RolesController')
  Route.resource('users', 'UsersController')
  Route.resource('scores', 'ScoresController')

  Route.resource('orders', 'OrdersController')
  Route.get('orders/with/quiz', 'OrdersController.withQuiz')
  Route.get('orders/without/quiz', 'OrdersController.withOutQuiz')

  Route.resource('quizzes', 'QuizzesController')
  Route.resource('results', 'ResultsController')
  Route.resource('resultScore', 'ResultScoresController')
}).prefix('api/v1')
