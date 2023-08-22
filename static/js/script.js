function init() {
    d3.json("/api/intake_type").then( function(data) {
        getIntakeType(data);
    })
    d3.json("/api/pet_types").then( function(data) {
        getPetType(data);
    })
    d3.json("/api/size").then( function(data) {
        getSize(data);
    })
    d3.json("/api/sex").then( function(data) {
        getSex(data);
    })
    d3.json("/api/pet_age").then( function(data) {
        getAge(data);
    })
    defaultResults();
}

function defaultResults() {
    d3.json("/api/get_data").then( function(data) {
        let top10 = []
        for (i=0; i<10 ; i++) {
            top10.push(data[i])
        }
        console.log("Top 10 Results", top10)
        
        let resultsList = d3.select("#result-list")


        // Loop through the top10 array and add each result to the resultsList
        top10.forEach(result => {
            // Create a div for the result and assign the "result-box" class
            let resultBox = resultsList.append("div")
                .attr("class", "result-box");

            // Create a div for the image section
            let imageSection = resultBox.append("div")
                .attr("class", "image-section");

            // Create an image element within the image section
            imageSection.append("img")
                .attr("src", result.link)
                .attr("alt", "Image");

            // Create a div for the facts section
            let factsSection = resultBox.append("div")
                .attr("class", "facts-section");

            // Populate the facts section with data (adjust as needed)
            factsSection.append("p")
                .html(
                    `<p>Animal ID: ${result.animal_id}</p>
                    <p>Name: ${result.name}</p>
                    <p>Age: ${result.age}</p>
                    <p>Animal Type: ${result.animal_type}</p>
                    <p>Intake Type: ${result.intake_type}</p>
                    <p>In Date: ${result.in_date}</p>`
                    );
        });
    });
}


function performSearch() {
    const intakeType = document.getElementById('intake-type').value;
    const petType = document.getElementById('pet-type').value;
    const size = document.getElementById('size').value;
    const sex = document.getElementById('sex').value;
    const age = document.getElementById('age').value;        
    // Pass the selected choices to the searchClicked function
    searchClicked(intakeType, petType, size, sex, age);
}

function searchClicked(intakeType, petType, size, sex, age) {
    // Handle the logic using the selected choices
    console.log("Intake Type:", intakeType);
    console.log("Pet Type:", petType);
    console.log("Size:", size);
    console.log("Sex:", sex);
    console.log("Age:", age);

    // Implement your filtering and results update logic here
    // ...
};

function getIntakeType(intakeType) {
    let dropdown = d3.select("#intake-type")
    for (i=0; i<intakeType.length; i++) {
        let addChoice = dropdown.append("option");
        addChoice.text(`${intakeType[i]}`).attr('value', `${intakeType[i]}`);
    }
};

function getPetType(petType) {
    let dropdown = d3.select("#pet-type")
    for (i=0; i<petType.length; i++) {
        let addChoice = dropdown.append("option");
        addChoice.text(`${petType[i]}`).attr('value', `${petType[i]}`);
    }
};

function getSize(petSize) {
    let dropdown = d3.select("#size")
    for (i=0; i<petSize.length; i++) {
        let addChoice = dropdown.append("option");
        addChoice.text(`${petSize[i]}`).attr('value', `${petSize[i]}`)
    }
};

function getSex(petSex) {
    let dropdown = d3.select("#sex")
    let sex = [];

    for (i=0; i<petSex.length; i++)
        if (petSex[i] == "N") {
            sex.push("NEUTERED MALE");
        }
        else if (petSex[i] == "F") {
            sex.push("FEMALE");
        }
        else if (petSex[i] == "M") {
            sex.push("MALE");
        }
        else if (petSex[i] == "S") {
            sex.push("SPAYED FEMALE");
        }
        else {
            sex.push("UNKNOWN");
        };
    
    console.log("sex", sex)

    for (i=0; i<sex.length; i++) {
        let addChoice = dropdown.append("option");
        addChoice.text(`${sex[i]}`).attr('value',`${petSex[i]}`)
    }
};

function getAge(petAge) {
    let dropdown = d3.select("#age")
    for (i=0; i<petAge.length; i++) {
        let addChoice = dropdown.append("option");
        addChoice.text(`${petAge[i]}`).attr('value', `${petAge[i]}`)
    }
};

init();