'use strict';

describe('Service: rentalService', function () {

  // load the service's module
  beforeEach(module('app6App'));

  // instantiate service
  var rentalService;
  beforeEach(inject(function (_rentalService_) {
    rentalService = _rentalService_;
  }));

  it('should do something', function () {
    expect(!!rentalService).toBe(true);
  });

});
