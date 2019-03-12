// from data.js
var tableData = data;

// select table body
var tableBody = d3.select("tbody");

// add data to table
tableData.forEach((ufoSighting) => {
    var row = tableBody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = tableBody.append("td");
        cell.text(value);
    });
});

// filter table by date
var filterButton = d3.select("#filter-btn");

filterButton.on("click", function () {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    var filteredTableBody = d3.select("tbody");
    filteredTableBody.text("");
    filteredData.forEach((ufoSighting) => {
        var filteredRow = filteredTableBody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var filteredCell = filteredRow.append("td");
            filteredCell.text(value);
        });
    });
});

// reset table
var resetButton = d3.select("#reset-button");

resetButton.on("click", function () {
    d3.event.preventDefault();
    var tableBody = d3.select("tbody");
    tableBody.text("");
    tableData.forEach((ufoSighting) => {
        var row = tableBody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = tableBody.append("td");
            cell.text(value);
        });
    });
});