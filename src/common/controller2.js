define(function(require, exports, module){

	module.exports = function(app){
		app.controller('BookCtrl2', ['$scope', '$route', '$routeParams', '$location',
		    function($scope, $route, $routeParams, $location) {
		    	console.log($routeParams)
		        $scope.name = 222;
		        $scope.btnName = 'btn2';
		        $scope.bookId = $routeParams.bookId;
		    }
		])
	}
	
})


