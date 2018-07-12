xlsxj = require("xlsx-to-json");
xlsxj({
  input: "./xlsx/API-Well-Insight.xlsx",
  output: "./json/apiWI.json"
}, function (err, result) {
  if (err) {
    console.error(err);
  } else {
    // console.log(result);
  }
});