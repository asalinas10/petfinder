


function intakePieGraph(intakeType) {
    
    d3.json("/api/get_data").then( function(data) {

    
    
        for (let i = 0; i<intakeType.length; i++){

            let conCount = 0
            let retCount = 0
            let surCount = 0
            let fosCount = 0
            let strayCount = 0

            if (intakeType === "Confiscate") {
                conCount += 1
            }
            if (intakeType === "Return") {
                retCount += 1
            }
            if (intakeType === "Owner Sur") {
                surCount += 1
            }
            if (intakeType === "Foster") {
                fosCount += 1
            }
            if (intakeType === "Stray") {
                strayCount += 1
            }

            console.log(conCount);

        };


        let trace = {
            x: conCount,
            x: retCount,
            x: surCount,
            x: fosCount,
            x: strayCount,
            type: "pie"
        };

        let newData = [trace];

        let layout = {
        title: "Intake Percentages"
        };

        Plotly.newPlot("pie", newData, layout);

    });

};

intakePieGraph();


function petPopularityChart(petType) {
    
    d3.json("/api/get_data").then( function(data) {

        let dogCount = 0;
        let catCount = 0;
        let otherCount = 0;

        for (let i = 0; i<petType.length; i++){

            if (petType === "Dog") {
                dogCount += 1
            }
            if (petType === "Cat") {
                catCount += 1
            }
            if (petType === "Other") {
                otherCount += 1

            }
        };

        let petArray = [dogCount, catCount, otherCount];

        let animalArray = ["Dog", "Cat", "Other"]

        trace = {
            x: petArray,
            y: animalArray,
            type: "bar"
        };

        let newData = [trace];

        let layout = {
            title: "Intake Percentages"
        };
    
        Plotly.newPlot("bar", newData, layout);

    });
};

function petSize(petType, size) {

    d3.json("/api/get_data").then( function(data) {


        let dogCount = 0;
        let catCount = 0;
        let otherCount = 0;

        let catSize = 0;
        let dogSize = 0;
        let otherSize = 0;

        for (let i = 0; i<petType.length; i++){

            if (petType === "Cat" && size === "toy") {
                catSize += 1;
            } else if (petType === "Cat" && size === "small") {
                catSize += 2;
            } else if (petType === "Cat" && size === "med") {
                catSize += 3;
            } else if (petType === "Cat" && size === "lar") {
                catSize += 4;
            };

            if (petType === "Dog" && size === "toy") {
                dogSize += 1;
            } else if (petType === "Dog" && size === "small") {
                dogSize += 2;
            } else if (petType === "Dog" && size === "med") {
                dogSize += 3;
            } else if (petType === "Dog" && size === "lar") {
                dogSize += 4;
            };

            if (petType === "Other" && size === "toy") {
                otherSize += 1;
            } else if (petType === "Other" && size === "small") {
                otherSize += 2;
            } else if (petType === "Other" && size === "med") {
                otherSize += 3;
            } else if (petType === "Other" && size === "lar") {
                otherSize += 4;
            };

            if (petType === "Dog") {
                dogCount += 1
            };
            if (petType === "Cat") {
                catCount += 1
            };
            if (petType === "Other") {
                otherCount += 1
            };

            avgDog = dogSize/dogCount;
            avgCat = catSize/catCount;
            avgOther = otherSize/otherCount;

            sizeArray = [avgDog, avgCat, avgOther];

            animalArray = ["Dog", "Cat", "Other"];

            let trace = {
                x: animalArray,
                y: sizeArray,
                mode: "markers",
                marker: {
                    size: sizeArray,
                    color: otuIds.map(function(i) {
                        return '#' + i;
                    }),

                },
            };

            let layout = {
                xaxis: {
                    title: "Pet Sizes",
                    margin: { t: 0, r: 25, l: 100, b: 50 },
                },
            };

            Plotly.newPlot("bubble", [trace], layout);

        };

    });
};
