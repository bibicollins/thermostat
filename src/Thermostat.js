'use strict';

function Thermostat() {
  this.temperature = 20;
  this.maxTemperature = 25;
};

Thermostat.prototype.up = function() {
  this.temperature += 1
  return this.temperature
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    return this.temperature -= 1
  } else {
    throw new Error ('NOOO ITS COLD')
  }
};
