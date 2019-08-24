// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
  // Prevent the page from refreshing
    d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var inputValue1 = inputValue.replace("01/","1/")

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue1 );
  //console.log(filteredData);

    if (filteredData.length!== 0) {

    var datetime = filteredData.map(datetime => filteredData.datetime)
    var	tbody = d3.select('tbody');
    tbody.html("");

    filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    }
    )})}
    else {
    ;
    var	tbody = d3.select('tbody');
    tbody.html("");
    var row = tbody.append("tr");
    var cell = row.append("td");
    cell.text("0 RESULTS.INVALID DATE OR FORMAT.");
      }
});