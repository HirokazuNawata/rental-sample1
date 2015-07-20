/* globals alert */

'use strict';

/**
 * @ngdoc function
 * @name app6App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app6App
 */
angular.module('app6App')
  .controller('MainCtrl', function ($scope, rentalService) {
    $scope.items = [
      {id: 'v2001', title: 'デス・ノート (実写)', type: 'new'},
      {id: 'v0001', title: '機動戦士ガンダム', type: 'regular'},
      {id: 'v0002', title: '機動戦士ガンダムII 哀・戦士編', type: 'regular'},
      {id: 'v0003', title: '機動戦士ガンダムIII めぐりあい宇宙編', type: 'regular'},
      {id: 'v1001', title: 'ポケモン', type: 'kids'},
    ];

    $scope.rental = function () {
      var item = $scope.items
        .filter(function (item) {
          return item.id === $scope.selectedItem;
        })[0];

      // レンタル料を計算する
      var amount = rentalService.getRentalFee(item, $scope.days);

      // サーバーへ書き込んでると思ってください
      alert(amount + ' 円です');
    };
  });
