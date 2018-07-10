xlsxj = require("xlsx-to-json");
xlsxj({
  input: "./xlsx/WIPM-DOGE.xlsx",
  output: "./json/WIPM.json"
}, function (err, result) {
  if (err) {
    console.error(err);
  } else {
    // console.log(result);
  }
});