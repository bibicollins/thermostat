# Thermostat
Week 5 of the Makers course.
I have built a simple front-end thermostat web application using javascript, which has access to current weather information for London, Amsterdam, Barcelona and Paris through the Open Weather Map API. I used jQuery to make the page dynamic, and AJAX requests to retrieve data from the API. 
![Usage example](/lib/Thermostat-screen-grab.gif)

## Getting started
Enter the following commands in your terminal:
- Clone the repository and change into the directory: `git clone https://github.com/bibicollins/thermostat.git && cd thermostat`
## Usage
To use the thermostat type `open thermostat.html` and have a go! 
## Requirements
Thermostat starts at 20 degrees
You can increase the temperature with an up function
You can decrease the temperature with a down function
The minimum temperature is 10 degrees
If power saving mode is on, the maximum temperature is 25 degrees
If power saving mode is off, the maximum temperature is 32 degrees
Power saving mode is on by default
You can reset the temperature to 20 with a reset function
You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
## Tests
- Tested using Jasmine
- To see the full test suite enter `open SpecRunner.html` in your terminal from the root of the project.
![Tests](https://imgur.com/YSlHiW5.png)


