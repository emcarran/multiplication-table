"use strict";

angular.module("table", [])

//$attrs is the initialNumberLimit variable specified in index.html like this "<div ng-controller="MultiplicationCtrl" initial-number-limit="10">"
.controller("MultiplicationCtrl", function ($scope, $attrs) {
    //if the top limit is set display it, otherwise use number 10
    //the "|| 10" is kind of redundant because the initialNumberLimit is already set to 10
    $scope.numberLimit = $attrs.initialNumberLimit || 10;


    //loop through the numbers (which are initially from 0 to 9)
    $scope.numbers = function () {
        var numbers = [];
        for (var i = 0; i < $scope.numberLimit; i++) {
            //the array starts counting from 0 but the numbers are starting from 1, so we need to add one to the array value
            numbers[i] = i + 1;
        };
        return numbers;
    };

    //create a function to calculate the multiplication
    $scope.compute = function (a, b) {
        return a * b;
    };
});
