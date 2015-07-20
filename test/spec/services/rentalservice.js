'use strict';

describe('Service: rentalService', function () {

  // load the service's module
  beforeEach(module('app6App'));

  // instantiate service
  var rentalService;
  beforeEach(inject(function (_rentalService_) {
    rentalService = _rentalService_;
  }));

  it('旧作を三日借りたら 350 円', function () {
    // どういうテストコードを書く?

    var result = rentalService.getRentalFee({type: 'regular'}, 3);

    expect(result).toBe(350);
  });
});
