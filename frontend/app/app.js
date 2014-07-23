var planetApp = angular.module('planetApp', [
        'ui.router', 'ngResource', 'xeditable', 'angularFileUpload']);

planetApp.config(['$controllerProvider', '$provide', '$compileProvider', '$stateProvider', '$urlRouterProvider', function($controllerProvider, $provide, $compileProvider, $stateProvider, $urlRouterProvider){
    /* CODE FOR ASYNC MODULE LOADING */
    planetApp._controller = planetApp.controller;
    planetApp._service = planetApp.service;
    planetApp._factory = planetApp.factory;
    planetApp._directive = planetApp.directive;

    planetApp.controller = function( name, constructor ) {
        $controllerProvider.register( name, constructor );
        return( this );
    };

    planetApp.service = function( name, constructor ) {
        $provide.service( name, constructor );
        return( this );
    };

    planetApp.factory = function( name, factory ) {
        $provide.factory( name, factory );
        return( this );
    };

    planetApp.directive = function( name, factory ) {
        $compileProvider.directive( name, factory );
        return( this );
    };

    /* ROUTING */
    $urlRouterProvider.otherwise('/user/quests');

    $stateProvider
        .state('newQuest', {
            url: '/quests/new',
            templateUrl: 'static/quest/view.html',
            controller: 'NewQuestCtrl'
        })
        .state('quest', {
            url: '/quests/:id',
            templateUrl: 'static/quest/view.html',
            controller: 'QuestCtrl'
        })
        .state('userQuests', {
            url: '/user/quests',
            templateUrl: 'static/quest/list_view.html',
            controller: 'UsersQuestsCtrl'
        });
        // HOME STATE =========================================================
        // .state('home', {
        //     url: '/',
        //     views: {
        //         '': {
        //             templateUrl: 'static/homepage/homepage.html',
        //             resolve: {
        //                 deps: function($q, $rootScope) {
        //                     var deferred = $q.defer();
        //                     var dependencies = [
        //                         'static/homepage/homepagectrl.js'
        //                     ];

        //                     $script(dependencies, function(){
        //                         $rootScope.$apply(function(){
        //                             deferred.resolve();
        //                         });
        //                     });

        //                     return deferred.promise;
        //                 }
        //             },
        //             controller: 'HomepageCtrl as homepage'
        //         },
        //         'header@home': {
        //             templateUrl: 'static/header/header.html',
        //             resolve: {
        //                 deps: function($q, $rootScope) {
        //                     var deferred = $q.defer();
        //                     var dependencies = [
        //                         'static/header/headerctrl.js'
        //                     ];

        //                     $script(dependencies, function(){
        //                         $rootScope.$apply(function(){
        //                             deferred.resolve();
        //                         });
        //                     });

        //                     return deferred.promise;
        //                 }
        //             },
        //             controller: 'HeaderCtrl as header'
        //         }
        //     }
        // });

    // $routeProvider
    //     // route for the home page
    //     .when('/', {
    //             templateUrl: 'homepage/homepage.html',
    //             resolve: {
    //                 deps: function($q, $rootScope) {
    //                     var deferred = $q.defer();
    //                     var dependencies = [
    //                         'homepage/homepagectrl.js'
    //                     ];

    //                     $script(dependencies, function(){
    //                         $rootScope.$apply(function(){
    //                             deferred.resolve();
    //                         });
    //                     });

    //                     return deferred.promise;
    //                 }
    //             },
    //             controller: 'HomepageCtrl'
    //         })
    //     .when('/mentors', {
    //         templateUrl: 'users/mentors.html',
    //         resolve: {
    //                 deps: function($q, $rootScope) {
    //                     var deferred = $q.defer();
    //                     var dependencies = [
    //                         'users/mentorsctrl.js'
    //                     ];

    //                     $script(dependencies, function(){
    //                         $rootScope.$apply(function(){
    //                             deferred.resolve();
    //                         });
    //                     });

    //                     return deferred.promise;
    //                 }
    //             },
    //         controller: 'MentorsCtrl'
    //     })
    //     .when('/profile', {
    //         templateUrl: 'profile/profile.html',
    //         resolve: {
    //                 deps: function($q, $rootScope) {
    //                     var deferred = $q.defer();
    //                     var dependencies = [
    //                         'profile/profilectrl.js'
    //                     ];

    //                     $script(dependencies, function(){
    //                         $rootScope.$apply(function(){
    //                             deferred.resolve();
    //                         });
    //                     });

    //                     return deferred.promise;
    //                 }
    //             },
    //         controller: 'ProfileCtrl'
    //     })
    //     .when('/organization', {
    //         templateUrl: 'organization/organization.html',
    //         resolve: {
    //                 deps: function($q, $rootScope) {
    //                     var deferred = $q.defer();
    //                     var dependencies = [
    //                         'organization/organizationctrl.js'
    //                     ];

    //                     $script(dependencies, function(){
    //                         $rootScope.$apply(function(){
    //                             deferred.resolve();
    //                         });
    //                     });

    //                     return deferred.promise;
    //                 }
    //             },
    //         controller: 'OrganizationCtrl'
    //     })
    //     .when('/assembly',{
    //         templateUrl: 'assembly/assembly.html',
    //         resolve: {
    //                 deps: function($q, $rootScope) {
    //                     var deferred = $q.defer();
    //                     var dependencies = [
    //                         'assembly/assemblyctrl.js'
    //                     ];

    //                     $script(dependencies, function(){
    //                         $rootScope.$apply(function(){
    //                             deferred.resolve();
    //                         });
    //                     });

    //                     return deferred.promise;
    //                 }
    //             },
    //         controller: 'AssemblyCtrl'
    //     })
    //     .otherwise({ redirectTo: '/' });
}]);

// planetApp.run(function($rootScope, $state){
//     $rootScope.pageLocation = $state.current.name;
//     console.log($state.current)
//     // $rootScope.pageLocation = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
//     // $rootScope.$on('$stateChangeSuccess', function(event) {
//     //     $rootScope.pageLocation = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
//     // });
// });
