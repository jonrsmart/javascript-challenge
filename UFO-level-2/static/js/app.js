// from data.js
var tableData = data;

// var datedrop = d3.select("#date");
// datedrop.on("change", runEnter);
// var statedrop = d3.select("#state");
// statedrop.on("change", runEnter);
// var countrydrop = d3.select("#country");
// countrydrop.on("change", runEnter);
// var shapedrop = d3.select("#shape");
// shapedrop.on("change", runEnter);
// var citydrop = d3.select("#city");
// citydrop.on("change", runEnter);
d3.selectAll(".options").on("change", runEnter);
function init(){
var tbody = d3.select("tbody");
    tableData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    })})
  }
var dates = [];
//Get a Distinct list of Dates
tableData.forEach(x => {
  if(!dates.includes(x.datetime)){
    //console.log(x.datetime);
    dates.push(x.datetime);
  }
});

dates.forEach((date) => {
    var datelist = d3.select("#date");
    var dateoption = datelist.append("option");
    dateoption.text(date);
})

var cities = [];
//Get a Distinct list of Dates
tableData.forEach(x => {
  if(!cities.includes(x.city)){
    //console.log(x.city);
    cities.push(x.city);
  }
});

cities.forEach((city) => {
    var citylist = d3.select("#city");
    var cityoption = citylist.append("option");
    cityoption.text(city);
})

var states = [];
//Get a Distinct list of Dates
tableData.forEach(x => {
  if(!states.includes(x.state)){
    //console.log(x.state);
    states.push(x.state);
  }
});

states.forEach((state) => {
    var statelist = d3.select("#state");
    var stateoption = statelist.append("option");
    stateoption.text(state);
})

var countries = [];
//Get a Distinct list of Dates
tableData.forEach(x => {
  if(!countries.includes(x.country)){
    //console.log(x.country);
    countries.push(x.country);
  }
});
countries.forEach((country) => {
    var countrylist = d3.select("#country");
    var countryoption = countrylist.append("option");
    countryoption.text(country);
})

var shapes = [];
//Get a Distinct list of Dates
tableData.forEach(x => {
  if(!shapes.includes(x.shape)){
    //console.log(x.shape);
    shapes.push(x.shape);
  }
});

shapes.forEach((shape) => {
    var shapelist = d3.select("#shape");
    var shapeoption = shapelist.append("option");
    shapeoption.text(shape);
})

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var date = d3.select("#date").node().value;
    var city = d3.select("#city").node().value; 
    var state = d3.select("#state").node().value; 
    var country = d3.select("#country").node().value; 
    var shape = d3.select("#shape").node().value; 
    console.log(date);
    console.log(city);
    console.log(state);
    console.log(country);
    console.log(shape);

  var filtered = tableData.filter(function(value) {
    if (shape !== "All" ) {
      console.log(shape);
      return value.shape === shape;
    }
    if (country !== "All" ) {
      console.log(country);
      return value.country === country;
    }
    if (state !== "All" ) {
      console.log(state);
      return value.state === state;
    }
    if (city !== "All" ) {
      console.log(city);
      return value.city === city;
    }  
    if (date !== "All") {
        console.log(date)
        return value.datetime === date;
      }
      else {
        return true;
      }
    })
    console.log(filtered);
  
    var tbody = d3.select("tbody");
    tbody.html("")
    filtered.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    })})


};

init();