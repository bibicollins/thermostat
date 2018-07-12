$( document ).ready(function() {
  var thermostat = new Thermostat();

  $("#current_temp").text(thermostat.getCurrentTemperature());
  $("#usage").text(thermostat.currentEnergyUsage());

  $("#plus").click(function() {
    thermostat.up();
    $("#current_temp").text(thermostat.getCurrentTemperature());
    $("#usage").text(thermostat.currentEnergyUsage());
  });

  $("#minus").click(function() {
    thermostat.down();
    $("#current_temp").text(thermostat.getCurrentTemperature());
    $("#usage").text(thermostat.currentEnergyUsage());
  });
  $("#reset").click(function() {
    thermostat.reset();
    $("#current_temp").text(thermostat.getCurrentTemperature());
  })
  $("#ps_off").click(function() {
    thermostat.powerSaveOff();
  })
  $("#ps_on").click(function() {
    thermostat.powerSaveOn();
  })



  // $("#minus").click(thermostat.down())
  // $("#reset").click(thermostat.reset())
  // $("#ps_on").click(thermostat.powerSaveOn())
  // $("#ps_off").click(thermostat.powerSaveOff())



});
