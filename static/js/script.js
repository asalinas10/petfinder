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
    d3.json("/api/get_data").then( function(data) {
        displayResults(data, 1);
    });
}

function displayResults(results, page) {
    let startIndex = (page - 1) * 10;
    let endIndex = startIndex + 10;
    let pageResults = results.slice(startIndex, endIndex);
    
    let resultsList = d3.select("#result-list");
    resultsList.selectAll("*").remove();


    pageResults.forEach(result => {
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
                <p>Sex: ${sexChange(result.sex)}</p>
                <p>Size: ${result.size}</p>
                <p>Intake Type: ${result.intake_type}</p>
                <p>In Date: ${result.in_date}</p>`
                );
    });

    createPaginationControls(results, page);
}

function createPaginationControls(results, currentPage) {
    let paginationContainer = d3.select("#pagination");

    paginationContainer.selectAll("*").remove();

    let totalPages = Math.ceil(results.length / 10);

    if (totalPages > 1) {
        let prevButton = paginationContainer.append("button")
            .text("Previous")
            .on("click", () => {
                if (currentPage > 1) {
                    displayResults(results, currentPage - 1);
                }
            });

        for (let i = 1; i <= totalPages; i++) {
            paginationContainer.append("button")
                .text(i)
                .classed("active", i === currentPage)
                .on("click", () => displayResults(results, i));
        }

        let nextButton = paginationContainer.append("button")
            .text("Next")
            .on("click", () => {
                if (currentPage < totalPages) {
                    displayResults(results, currentPage + 1);
                }
            });
    }
}


function performSearch() {
    const intakeType = document.getElementById('intake-type').value;
    const petType = document.getElementById('pet-type').value;
    const size = document.getElementById('size').value;
    const sex = document.getElementById('sex').value;
    searchClicked(intakeType, petType, size, sex);
}

function searchClicked(intakeType, petType, size, sex) {
    // Handle the logic using the selected choices
    console.log("Intake Type:", intakeType);
    console.log("Pet Type:", petType);
    console.log("Size:", size);
    console.log("Sex:", sex);
    
    
    function filterPet(pet) {
        let isMatch = (pet["intake_type"] == intakeType
            && pet["animal_type"] == petType
            && pet["size"] == size
            && pet ["sex"] == sex
        )
        // console.log(`${pet["name"]}: ${isMatch}`)
        return isMatch;
        } 
    
    
        d3.json("/api/get_data").then( function(data) {
    
            let searchedResults = data.filter(filterPet);
            let resultsList = d3.select("#result-list");
            resultsList.selectAll("*").remove();

            if (searchedResults.length == 0) {
                let resultBox = resultsList.append("div")
                    .attr("class", "result-box")
                    .text("No results found");
                let paginationContainer = d3.select("#pagination");
                paginationContainer.selectAll("*").remove();
            }
            else {
            searchedResults.forEach(result => {
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

                
                // Populate the facts section with data
                factsSection.append("p")
                    .html(
                        `<p>Animal ID: ${result.animal_id}</p>
                        <p>Name: ${result.name}</p>
                        <p>Age: ${result.age}</p>
                        <p>Animal Type: ${result.animal_type}</p>
                        <p>Sex: ${sexChange(result.sex)}</p>
                        <p>Size: ${result.size}</p>
                        <p>Intake Type: ${result.intake_type}</p>
                        <p>In Date: ${result.in_date}</p>`
                        );
                });

            displayResults(searchedResults, 1)
            };
        
        }); 
};

function sexChange(sex) {  
    if (sex == "N") {
        return "NEUTERED MALE";
    }
    else if (sex == "F") {
        return "FEMALE";
    }
    else if (sex == "M") {
        return "MALE";
    }
    else if (sex == "S") {
        return "SPAYED FEMALE";
    }
    else {
        return "UNKNOWN";
    };
}

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

    for (i=0; i<petSex.length; i++) {
            sex.push(sexChange(petSex[i]));
    }

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