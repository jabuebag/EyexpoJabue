// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('myApp', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'template/home.html',
            controller: 'IndexCtrl'
        })
        .state('panoview', {
            url: '/pano/:id',
            templateUrl: 'template/panopage.html',
            controller: 'PanoCtrl'
        });
    $urlRouterProvider.otherwise('/');
});

app.service('PanoDataService', function($http) {
    var panoData = [ 
        {
            index: 0,
            name: 'demo 1',
            image: 'vr/shopping/images/sky.jpg',
            panoUrl: 'vr/shopping/index.html',
            description: 'The VR show of ammolite 1.'
        },
        {
            index: 1,
            name: 'demo 2',
            image: 'vr/shoppingAframeJquery/images/sky.jpg',
            panoUrl: 'vr/shoppingAframeJquery/index.html',
            description: 'The VR show of ammolite 2.'
        }
        // {
        //     index: 2,
        //     name: 'SFU',
        //     image: 'vr/sfu/indexdata/thumbnail.jpg',
        //     panoUrl: 'vr/sfu/index.html',
        //     description: 'Simon Fraser University VR show.'
        // },
        // {
        //     index: 3,
        //     name: 'Office',
        //     image: 'vr/newoffice/indexdata/thumbnail.jpg',
        //     panoUrl: 'vr/newoffice/index.html',
        //     description: 'VR show of EYEXPO office.'
        // },
        // {
        //     index: 4,
        //     name: 'Canada Place',
        //     image: 'vr/canadaplace/canadaPlace.jpg',
        //     panoUrl: 'vr/canadaplace/krpano.html?xml=videopano.xml',
        //     description: 'VR video show of canada place.'
        // },  
        // {
        //     index: 5,
        //     name: 'Driving Car',
        //     image: 'vr/driving/indexdata/thumbnail.jpg',
        //     panoUrl: 'vr/driving/index.html',
        //     description: 'VR video of Benz driving advertisement.'
        // }, 
        // {
        //     index: 6,
        //     name: 'Vancouver',
        //     image: 'vr/vancouver/indexdata/thumbnail.jpg',
        //     panoUrl: 'vr/vancouver/index.html',
        //     description: 'VR show of Vancouver view.'
        // }, 
        // {
        //     index: 7,
        //     name: 'Alien',
        //     image: 'vr/alien/alien.jpg',
        //     panoUrl: 'vr/alien/krpano.html?xml=videopano.xml',
        //     description: 'Alien VR movie'
        // }, 
        // {
        //     index: 8,
        //     name: 'Hotpot',
        //     image: 'vr/hotpot/krpano/hotspot.jpg',
        //     panoUrl: 'vr/hotpot/krpano/krpano.html?xml=videopano.xml',
        //     description: 'VR video show of ChaoTianMen hotpot.'
        // }
    ];

    this.getByIndex = function(index) {
        return panoData[index];
    }

    this.getAll = function() {
        return panoData;
    }
});

app.controller('MainCtrl', function($scope) {
    $scope.toggle = function() {
        alert('This is a click event');
    };
});

app.controller('IndexCtrl', function($scope, PanoDataService, $ionicPopover, $state) {
    $scope.panoData = PanoDataService.getAll();
    $ionicPopover.fromTemplateUrl('template/popover.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });
    $scope.openPopover = function($event) {
        $scope.popover.show($event);
    };
    $scope.goPage = function(index) {
        $state.go('panoview', { id: index });
        $scope.popover.hide();
    };
});

app.controller('PanoCtrl', function($scope, $stateParams, PanoDataService, $ionicHistory) {
    $scope.goBack = function() {
        $ionicHistory.goBack();
    };
    $scope.$on('$ionicView.loaded', function(event) {
        $scope.panoUrl = PanoDataService.getByIndex($stateParams.id).panoUrl
        var viewFrame = angular.element(document.querySelector('#PanoView'));
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "js/pano.js";
        viewFrame.append(s);
    });
});

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
