$( document ).ready(function() {
  var thermostat = new Thermostat();

  $("#plus").click(function() {
    thermostat.up();
  });

  $("#current_temp").text(thermostat.getCurrentTemperature());
  $("#usage").text(thermostat.currentEnergyUsage());

  // $("#minus").click(thermostat.down())
  // $("#reset").click(thermostat.reset())
  // $("#ps_on").click(thermostat.powerSaveOn())
  // $("#ps_off").click(thermostat.powerSaveOff())
});
