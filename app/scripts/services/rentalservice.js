'use strict';

/**
 * @ngdoc service
 * @name app6App.rentalService
 * @description
 * # rentalService
 * Factory in the app6App.
 */
angular.module('app6App')
  .factory('rentalService', function () {
    var rentalService = {
      getRentalFee: function (item, days) {
        var amount = 0;

        if (item.type === 'new') {
          // 新作

          // 一日 300 円
          amount += days * 300;
        } else if (item.type === 'regular') {
          // 旧作

          // 最初の二日までは 200 円
          amount += 200;

          // 三日目からは一日ごとに 150 円
          if (days > 2) {
            amount += (days - 2) * 150;
          }
        } else if (item.type === 'kids') {
          // 子供向け

          // 最初の三日までは 150 円
          amount += 150;

          // 四日目からは一日 150 円
          if (days > 3) {
            amount += (days - 3) * 150;
          }
        }

        return amount;
      }
    };

    return rentalService;
  });
