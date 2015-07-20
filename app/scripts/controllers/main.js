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
  .controller('MainCtrl', function ($scope) {
    $scope.days = 1;
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

      var amount = 0;

      if (item.type === 'new') {
        // 新作

        // 一日 300 円
        amount += $scope.days * 300;
      } else if (item.type === 'regular') {
        // 旧作

        // 最初の二日までは 200 円
        amount += 200;

        // 三日目からは一日ごとに 150 円
        if ($scope.days > 2) {
          amount += ($scope.days - 2) * 150;
        }
      } else if (item.type === 'kids') {
        // 子供向け

        // 最初の三日までは 150 円
        amount += 150;

        // 四日目からは一日 150 円
        if ($scope.days > 3) {
          amount += ($scope.days - 3) * 150;
        }
      }

      // サーバーへ書き込んでると思ってください
      alert(amount + ' 円です');
    };
  });
