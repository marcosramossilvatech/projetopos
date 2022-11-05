'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Api criado para uso no Relatório de Projeto Aplicado desenvolvido para fins de conclusão do curso MBA em Desenvolvimento Full Stack ' }
})

Route.post('/user/register', 'UserController.register');
Route.post('/user/authenticated', 'UserController.authenticated');
Route.resource('colaborador','ColaboradorController').apiOnly();
Route.resource('cliente','ClienteController').apiOnly();
Route.resource('servico','ServicoController').apiOnly();
Route.resource('demanda','DemandaController').apiOnly();
Route.resource('home', 'HomeController').apiOnly().except(['store','show','delete', 'update']);
Route.resource('finalizar', 'FinalizarController').apiOnly().except(['store','show','delete']);

// Route.group(()=>{
//   // Route.resource('colaborador','ColaboradorController').apiOnly();
//   // Route.resource('cliente','ClienteController').apiOnly();
//   // Route.resource('servico','ServicoController').apiOnly();
//   // Route.resource('demanda','DemandaController').apiOnly();
// }).middleware('auth');