
app.controller('detailsController', ['$scope', 'CalcService', function($scope, CalcService) {
  $scope.meal = {};
  $scope.detailPrice = function(){
    CalcService.addMeals($scope.meal)
      console.log(CalcService.getMeals())
      $scope.meal = {};
    }
}]);

app.controller('chargesController', ['$scope', 'CalcService', function($scope, CalcService) {
  $scope.subTotal = CalcService.chargeTotal().sub_total;
  $scope.tipTotal = CalcService.chargeTotal().tip_total;
  $scope.finalCost = CalcService.chargeTotal().finalCost;
  $scope.mealCount = CalcService.chargeTotal().mealCount;
  
}]);

app.controller('earningsController', ['$scope', 'CalcService', function($scope, CalcService) {
  $scope.tipTotals = CalcService.getTotals().tip;
  $scope.mealCount = CalcService.getTotals().count;
  $scope.tipAvg = CalcService.getTotals().tipAvg;
}]);

app.controller('resetController', ['$scope', 'CalcService', function($scope, CalcService) {
  
}]);