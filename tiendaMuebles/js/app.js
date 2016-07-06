var app = angular.module('expensesApp', ['ngRoute']);

//Configuramos nuestras rutas

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/expenses.html',
			controller: 'ExpensesViewController'
		})

		.when('/expenses', {
			templateUrl: 'views/expenses.html',
			controller: 'ExpensesViewController'
		})

		.when('/expenses/new', {
			templateUrl: 'views/expensesForm.html',
			controller: 'ExpenseViewController'
		})

		.otherwise({
			redirectTo: '/'
		})
}]);

//Empezamos con nuestros controladores. Controlador para todo el HTML
app.controller('HomeViewController', ['$scope', function($scope) {
	$scope.appTitle = 'Simple Expenses Tracker';
}]);

//Controlador solo para añadir nuevos gastos. Para las vistas del gasto
app.controller('ExpensesViewController', ['$scope', function($scope) {
	$scope.expenses = [
		{description: 'Food', amount: 10.12345, date: '2016-10-01'},
		{description: 'Tickets', amount: 12.4556, date: '2016-09-01'},
		{description: 'Bills', amount: 15.11, date: '2016-08-01'},
		{description: 'Phone', amount: 23.15, date: '2016-07-01'},
		{description: 'House', amount: 10.23, date: '2016-06-01'},
		{description: 'Fuel', amount: 10, date: '2016-05-01'}
	]
}]);

app.controller('ExpenseViewController', ['$scope', function($scope) {
	$scope.someText = 'The World is mine Yeah!!';
}])