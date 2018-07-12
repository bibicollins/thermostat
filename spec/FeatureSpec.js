'use strict';

var thermostat;
var count;

beforeEach(function() {
    thermostat = new Thermostat;
  });

describe('Feature test:', () => {
  it('The thermostat should start at 20 degrees',() => {
    expect(thermostat.temperature).toEqual(20);
  });
  it('The temperature can be increased', () => {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });
  it('The temperature can be decreased', () => {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });
  describe('Minimum temperature', () => {
    it('Throws an error when the temperature is 9 or below', () => {
      for (count = 0; count < 10; count++) {
        thermostat.down();
      }
      expect(function() {thermostat.down();}).toThrowError('NOOO ITS COLD');
    });
    it('Does not throw an error when the temperature is 10 or above', () => {
      for (count = 0; count < 9; count++) {
        thermostat.down();
      }
      expect(function() {thermostat.down();}).not.toThrowError('NOOO ITS COLD');
    });
  });
});
