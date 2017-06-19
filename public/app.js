var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/second/', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

});

myApp.service('nameService',function functionName() {
  var self=this;
  this.name='John Doe';
  this.namelength= function () {
    return self.name.length;
  };
});

myApp.controller('mainController', ['$scope', '$log','nameService', function($scope, $log,nameService) {
$scope.person={
  name:'John Doe',
  address:'2404 Nutwood Avenue',
  city:'Fullerton',
  state:'California',
  zip:'92831'
}
/*$scope.formattedAddress = function (person) {
  return person.address + ', ' + person.city + ', ' + person.state + ', ' + person.zip;
};*/

$scope.formattedAddress = function(person) {

       return person.address + ', ' + person.city + ', ' + person.state+ ' ' + person.zip;

   };

}]);

myApp.controller('secondController', ['$scope', '$log','$routeParams','nameService', function($scope, $log,$routeParams,nameService) {



}]);

myApp.directive('searchResult',function () {
  return {
    templateUrl: 'directives/searchresult.html',
    replace: false,
    scope: {
      personObject: "=",
      formattedAddressFunction: "&"

    }

  };
});
