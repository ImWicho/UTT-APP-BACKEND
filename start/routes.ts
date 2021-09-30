import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.resource('providers', 'ProvidersController')
  Route.resource('statuses', 'StatusesController')
  Route.resource('areas', 'AreasController')
  Route.resource('roles', 'RolesController')
  Route.resource('users', 'UsersController')
  Route.resource('orders', 'OrdersController')

  Route.resource('quizzes', 'QuizzesController')
  Route.resource('results', 'ResultsController')
}).prefix('api/v1')
