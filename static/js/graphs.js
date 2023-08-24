 //read in the data with d3
function init() {
    d3.json("https://data.montgomerycountymd.gov/api/views/e54u-qx42/rows.json?accessType=DOWNLOAD").then( function(data) {
    type(data[12]);    
    breeds(data[16]);
    });
}

type = []
function loop(type) {
    for (let i = 0; i < type.length; i++) {
      console.log(type[i]);
    }
  }

// Display the default plot
function init() {
    let data = [{
      values: values,
      labels: labels,
      type: "pie"
    }];
  
    let layout = {
      height: 600,
      width: 800
    };
  
    Plotly.newPlot("pie", data, layout);
  }
  
  init();
  

