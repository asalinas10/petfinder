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

function searchClicked(intakeType, petType, size, sex, age) {
    // Handle the logic using the selected choices
    
    let intake_type = d3.select("#intake-type");
    console.log("Intake Type:", intake_type);
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
        addChoice.text(`${intakeType[i]}`);
    }
};

function getPetType(petType) {
    let dropdown = d3.select("#pet-type")
    for (i=0; i<petType.length; i++) {
        let addChoice = dropdown.append("option");
        addChoice.text(`${petType[i]}`);
    }
};

function getSize(petSize) {
    let dropdown = d3.select("#size")
    for (i=0; i<petSize.length; i++) {
        let addChoice = dropdown.append("option");
        addChoice.text(`${petSize[i]}`)
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
        addChoice.text(`${sex[i]}`)
    }
};

function getAge(petAge) {
    let dropdown = d3.select("#age")
    for (i=0; i<petAge.length; i++) {
        let addChoice = dropdown.append("option");
        addChoice.text(`${petAge[i]}`)
    }
};

init();