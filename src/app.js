define(function(require, exports, module){
    var app = angular.module('app', ['ngRoute']),
        app2 = angular.module('app2', ['ngRoute']);

    require('common/controller')(app);
    require('common/controller2')(app);

    app.config(['$routeProvider', '$locationProvider', '$httpProvider',
        function($routeProvider, $locationProvider, $httpProvider) { 
            $routeProvider
                .when('/book/:bookId', {
                    templateUrl: '/common/modules/product/book.html',
                    controller: 'BookCtrl'
                    // controllerAs: 'book'
                });

            // configure html5 to get links working on jsfiddle 这个设置会导致页面跳转到/book路径 排查
            // $locationProvider.html5Mode(true);


            $httpProvider.defaults.transformResponse.push(function(data){
                if(data.status){

                }else{

                }
                // data = JSON.parse(data);
                data.t2 = +new Date;console.log(data)
                return data;
            })

            $httpProvider.defaults.transformRequest.push(function(data){
                console.log(arguments)
                return data;
            })
        }
    ])

    // app2.config(['$routeProvider', '$locationProvider',
    //     function($routeProvider, $locationProvider) {
    //         $routeProvider
    //             .when('/book/:bookId', {
    //                 templateUrl: '/common/modules/product/book2.html',
    //                 controller: 'BookCtrl'
    //                 // controllerAs: 'book'
    //             });

    //         // configure html5 to get links working on jsfiddle 这个设置会导致页面跳转到/book路径 排查
    //         // $locationProvider.html5Mode(true);
    //     }
    // ])
})



