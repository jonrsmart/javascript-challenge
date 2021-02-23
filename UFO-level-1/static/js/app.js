// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var form = d3.select("form");

button.on("click", runEnter);
form.on("submit",runEnter);
function init(){
    var tbody = d3.select("tbody");
        tableData.forEach((sighting) => {
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        })})
      }
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    var chosenSightings = tableData.filter(sighting => sighting.datetime === inputValue);

    var tbody = d3.select("tbody");
    tbody.html("")
    chosenSightings.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    })})
};
init();