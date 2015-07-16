(function(){
  var app = angular.module('bankSupport', ['ngMaterial']);

  app.factory('BankService', ['$q', '$http', function ($q, $http) {
    var deferred = $q.defer();

    $http.get('/js/banks.json')
      .success(function (banks) {
        deferred.resolve(banks)
      })
      .error(function (err) {
        console.log('Error getting banks.', err);
        deferred.reject(err);
      });

    return deferred.promise;
  }]);

  app.controller('BankController', ['$scope', 'BankService', function ($scope, BankService) {
    var self = $scope;

    self.filterBanks = function(searchText){
      searchText = searchText ? searchText.toLowerCase() : '';
      return self.banks.filter(function (bank) {
        var bankName = bank.name.toLowerCase();
        return bankName.indexOf(searchText) !== -1;
      });
    };

    self.selectBank = function(bank){
      // console.log('SelectBank', bank);
    };

    BankService.then(function (banks) {
      self.banks = banks;
    }, function (err) {
      // TODO: Error, handle it
    });
  }]);
})();