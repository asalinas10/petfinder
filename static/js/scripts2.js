function clearBar(choice) {
    let buttons = d3.selectAll("button");
    let bar = d3.select("#selection-bar")
    // let pie = d3.select("#pie");
    buttons.remove();
    if (choice == "Pie"){
        bar.append("button")
            .attr("id", "pie",)
            .text("Pie");
    }
    else if (choice == "Bar"){
        bar.append("button")
            .attr("id", "pie",)
            .text("Bar");
    }
    if (choice == "Line"){
        bar.append("button")
            .attr("id", "pie",)
            .text("Line");
    }
}

function makePie() {
    clearBar("Pie");
    let bar = d3.select("selection-bar2");
    let addChoice = bar.append("select");
    addChoice.text("Categories:")
        .attr("id","categories");
    addCat();
}

function addCat() {
    let dropdown = d3.select("categories")
    console.log("dropdown",dropdown)
    let choices = [
        "Pet Type",
        "Intake Type",
        "Breed",
        "Sex"
    ]
    for (i=0; i<choices.length; i++) {
        let addChoice = dropdown.append("option");
        addChoice.text(`${choices[i]}`)
            .attr('value', `${choices[i]}`);
    }
}

function makeBar() {
    clearBar("Bar");
}

function makeLine() {
    clearBar("Line");
}