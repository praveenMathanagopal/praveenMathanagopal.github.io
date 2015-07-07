/**
 * Created by Praveen on 6/27/2015.
 */

angular.module('myapp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/template', {
                templateUrl: 'template/template.html',
                controller: 'templateCtrl'
            })
            .when('/template/:id', {
                templateUrl: 'template/template-details.html',
                controller: 'templateDetailCtrl'
            })
            .otherwise({redirectTo: '/template'})
    }])
    .controller('templateCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get("./json/templates.json").success(function (data) {
            $scope.templates = data;
        });
    }])
    .controller('templateDetailCtrl', ['$scope', '$http', '$routeParams', '$filter', function ($scope, $http, $routeParams, $filter) {
        var id = $routeParams.id;
        $http.get("./json/templates.json").success(function (data) {
            $scope.template = $filter('filter')(data,function(d){
                return d.id==id;
            })[0];

            $scope.mainimage = $scope.template.images[0];

            $scope.change = function(image){
                $scope.mainimage = image;
            }
        });


    }]);
