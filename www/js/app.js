// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('myApp', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'template/home.html'
        })
        .state('panoview', {
            url: '/pano',
            templateUrl: 'template/panopage.html',
            controller: 'PanoCtrl'
        });
    $urlRouterProvider.otherwise('/');
});

app.controller('MainCtrl', function($scope) {
    $scope.toggle = function() {
        alert('This is a click event');
    };
});

app.controller('PanoCtrl', function($scope) {
    $scope.$on('$ionicView.loaded', function(event) {
        console.log('enter panopage');
        var viewFrame = angular.element(document.querySelector('#PanoView'));
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "js/pano.js";
        viewFrame.append(s);
        // if (viewFrame != null) { //if the container is visible on the page
        //     viewFrame.contentWindow.open = function(url, windowName, windowFeatures) {
        //         // do whatever you want here (e.g. open an ajax modal frame)
        //         // window.alert(url);
        //         viewFrame.setAttribute("src", "office/index.html?vr");
        //     };
        // }
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
