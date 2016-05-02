(function () {
    'use strict';
    var baseUrl = 'client/views/';

    angular.module('main', [
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: baseUrl+ "home.html",
                controller: "homeController",
                controllerAs: "vm"
            });
    });

})();
