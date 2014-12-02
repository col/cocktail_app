'use strict';

describe('Services: drunkamatronService', function () {

  beforeEach(module('cocktailNinjaApp'));

  var drunkamatronService;

  beforeEach(inject(function (_drunkamatronService_) {
    drunkamatronService = _drunkamatronService_;
  }));

  it('should', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});