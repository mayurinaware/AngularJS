(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject = ['$scope'];

 function LunchCheckController ($scope) {
   $scope.dishes = "";

  

    $scope.message = "";

  


    $scope.check = function() {

      $scope.message = getmessage($scope.dishes);
    };
 


$scope.reset = function() {

      $scope.message = "";


    }

  
}


  function getmessage(dishes) {

    if (dishes.trim() == "") {

      return "Please enter data first";

    }

    else if (numberOfDishes(dishes) <= 3) {

      return "Enjoy!";

    }

    else {

      return "Too much!";

    }

  }

  function numberOfDishes(dishes) {

    var items = dishes.split(",");

    var numberOfItems = 0;

    for (var i = 0; i < items.length; i++) {

      if (items[i].trim() != "") {

        numberOfItems ++;

      }

    }

    return numberOfItems;

  }




})();
