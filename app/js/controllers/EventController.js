'use strict';

var eventsApp = angular.module('eventsApp',[]);

eventsApp.controller('EventController',
      function ($scope){
              $scope.event = {
                  name: 'Angular Boot Camp',
                  date: '3/22/2016',
                  time: '11:00 am',
                  location: {
                            address: 'Somewhere Far Beyond',
                            city: 'Reality',
                            province: 'Fiction'
                },
                imageUrl: '/img/angularjs-logo.png'
              }



      }
);
