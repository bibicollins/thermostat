'use strict';

function Thermostat() {
  this.temperature = 20;
  this.maxTemperature = 25;
};

Thermostat.prototype.up = function() {
  if (this.temperature < this.maxTemperature) {
    this.temperature += 1
    return this.temperature
  } else {
    throw new Error ("Ow it's hot");
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    return this.temperature -= 1
  } else {
    throw new Error ('NOOO ITS COLD')
  }
};

Thermostat.prototype.powerSaveOff = function() {
  this.maxTemperature = 32;
}

Thermostat.prototype.powerSaveOn = function() {
  this.maxTemperature = 25;
}
