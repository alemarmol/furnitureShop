var app = angular.module('furnitureShopApp',["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/homeView.html',
			controller: 'indexController'
		})

		.when('/furnitures', {
			templateUrl: 'views/products.html',
			controller: 'furnitures'
		})

		.when("/furnitures/category/:category", {
			templateUrl: "views/categoryFurniture.html",
			controller: "categoryFurniture"
		})

		.when("/contact",{
			templateUrl: "views/furnitureForm.html",
			controller: "furnitureForm"
		})

		.otherwise({
			redirectTo: "/"
		})
}]);

//Controlador Pagina Principal
app.controller('indexController',['$scope',function($scope) {

}]);

//Controlador para el catálogo de productos
app.controller('furnitures',['$scope','$http', function($scope,$http) {
    
    $http.get("js/furnitures.json").success(function(data) {
        $scope.furnitures = data;
    });

}]);

//Controlador para tipo de muebles
app.controller("categoryFurniture",["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
	$scope.category = $routeParams.category;

	$http.get("js/furnitures.json").success(function(data) {
		$scope.furnitures = data;
	});
}]);

//Controlador para el formulario
app.controller("furnitureForm", ["$scope", function(){

}]);

















/*app.directive('parallax', [function () {
	return {
		templateUrl: 'views/parallax.html'
	};
}])*/