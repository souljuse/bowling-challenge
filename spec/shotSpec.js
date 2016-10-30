'use strict';

describe('Shot',function() {
  var airport;
  var plane;

  beforeEach(function() {
    shot = new Shot();
    plane = jasmine.createSpy('plane',['land']);
  });

  it('has no planes by default',function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing',function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for takeoff',function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can check for stormy conditions', function() {
    expect(airport.isStormy()).toBeFalsy();
  });

});
