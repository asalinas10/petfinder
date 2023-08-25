 //read in the data with d3
function init() {
    d3.json("https://data.montgomerycountymd.gov/api/views/e54u-qx42/rows.json?accessType=DOWNLOAD").then(function(data) {
        getPiedata(data)
    });
}

    // loop to get the data for each piece of the pie
    for (let i = 0; i < data.length; i++) {
        let breed = data[i].breed;
        if(breed) {
            if (breed[breed]) {
                breed[breed]++;
            }else {
                breed[breed] = 1;
            }
        }
    }

// Display the default plot
function init() {
    let data = [{
      values: Object.values(breed),
      labels: Object.keys(breed),
      domain: {column:0},
      name: "Number of Animals by Breed",
      hoverinfo: 'label+percent',
      hole: .4,
      type: "pie"
    }];
  
    Plotly.newPlot("pie", data, layout);
  }
  
  init();
  

