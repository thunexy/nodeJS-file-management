const {convertCsv} = require("./csv.parse");
const {readFile} = require("fs");

readFile("./data/pulitzer-circulation-data.csv", "utf-8", (err, data) => {
  if (err) {
    console.log(`Error: ${err}`);
    return;
  }
  console.table(convertCsv(data));
});
