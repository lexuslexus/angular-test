define(function(require, exports, module){

	module.exports = function(app){
		app.controller('BookCtrl', ['$scope', '$route', '$routeParams', '$location', '$http',
		    function($scope, $route, $routeParams, $location, $http) {
		    	console.log($routeParams)
		        $scope.name = 111;
		        $scope.bookId = $routeParams.bookId;
		        $scope.btnName = 'btn1';
		        $scope.btnClick = function(){
		        	angular.bootstrap(document, ['app2']);
		        }

		        var a = $http.get('api/fruit.json', {
		        	// transformResponse : function(data){
		        	// 	data = JSON.parse(data);
		        	// 	data.t = +new Date; console.log(data)
		        	// 	return data
		        	// }
		        })
		        .success(function(data){
		        	$scope.list = data;
		        	console.log('success', arguments)
		        })
		        .then(function(){
		        	console.log('then', arguments)
		        })

		        console.log(a)


		    }
		])
	}
	
})


