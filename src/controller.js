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



  // $("#minus").click(thermostat.down())
  // $("#reset").click(thermostat.reset())
  // $("#ps_on").click(thermostat.powerSaveOn())
  // $("#ps_off").click(thermostat.powerSaveOff())



});
