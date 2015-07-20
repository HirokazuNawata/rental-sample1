'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('app6App'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('旧作を三日借りたら 350 円', function () {
    // どういうテストコードを書く?

    var result;

    expect(result).toBe(350);
  });
});
