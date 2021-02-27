# JavaScript Homework - JavaScript and DOM Manipulation

## Background

This assignment we were tasked with creating a filtered table within Javascript utilizing the skills learned in module 14. 

#UFO Level 1

For this part of the assignment I first created an init function to display the unfiltered table. Then, after entering a date the table updates to show only the sightings that take place on that date. 

![UFO Level 1](images/ufo-level-1a.png) ![UFO Level 1b](images/ufo-level-1b.png)

#UFO Level 2
For level 2 of this assignment, I modified the filter to contain 5 sepearate drop down lists. The dropdowns are dynamically created based on the data in the data.js file. 

    var dates = [];
    //Get a Distinct list of Dates
    tableData.forEach(x => {
    if(!dates.includes(x.datetime)){
    //console.log(x.datetime);
    dates.push(x.datetime);
    }
    });
    
After getting the drop downs loaded, I created a filter function within the onchange function that took filters as long as the default "All" was not selected. 
    
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

After selecting the filters the table will update. If I had more time, I was working on getting the drop down lists to dynamically update after a fitler is selected so no errors present. Also, I could not get multi-filters even with appropriate selections to work. It appears that in our current D3 module there are better methods to update tables that I will apply in the future. 
![UFO Level 2](images/ufo-level-2a.png)
![UFO Level 2](images/ufo-level-2b.png)
![UFO Level 2](images/ufo-level-2c.png)
![UFO Level 2](images/ufo-level-2d.png)
