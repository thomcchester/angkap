var myApp = angular.module('myApp', []);

myApp.controller("IntroController", ["$scope", "$http", function($scope, $http){
  $scope.students = {};
  // $scope.meow = function () {
  //   console.log("Meow");
  //
  // };
  // $scope.saveStudents = function(value){
  //   console.log(value);
  //   $scope.studentArray.push(value);
  //
  //   $scope.student ={};
  //   console.log($scope.studentArray);
  // };
  $scope.saveStudents = function (){
    $http.get("/students").then(function(res){
      $scope.students = res.data.students;

      console.log(res.data.students);
    });
  };

  $scope.saveStudents();
}]);
