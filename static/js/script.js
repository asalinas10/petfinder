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
        addChoice.text(`${sex[i]}`).attr('value',`${sex[i]}`)
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