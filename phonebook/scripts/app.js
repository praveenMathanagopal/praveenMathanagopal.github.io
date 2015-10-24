/**
 * Created by Praveen on 7/7/2015.
 */
(function IIFE() {
    angular.module('phonebook', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', routeConfigfunction]);

    function routeConfigfunction($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('/', {
                url: '/',
                controller: "HomeCtrl as home",
                templateUrl: './views/homeView.html',
                resolve: {
                    data: ['DataBank', function (DataBank) {
                        return DataBank.getContacts();
                    }]
                }
            })
            .state('contact', {
                url: '/contact/{id}',
                templateUrl: './views/contactView.html',
                controller: 'ContactCtrl as contrl',
                resolve: {
                    contact: ['DataBank', '$stateParams', function (DataBank, $stateParams) {
                        return DataBank.getOneContact($stateParams.id).then(function (response) {
                            return response.data;
                        });
                    }]
                }
            })
            .state('add', {
                url: "/add",
                templateUrl: "./views/addView.html",
                controller: "AddCtrl as add"
            })
            .state('edit', {
                url: "/edit/{id}",
                templateUrl: "./views/editView.html",
                controller: "EditCtrl as edit",
                resolve: {
                    editcontact: ['DataBank', '$stateParams', function (DataBank, $stateParams) {
                        console.log("edit....");
                        return DataBank.getOneContact($stateParams.id).then(function (response) {
                            return response.data;
                        });
                    }]
                }
            });
        $urlRouterProvider.otherwise('/');
    }
})();

