var csso = require('csso');
var fs = require('fs');

var inputFile = "./dist/designkit-forms.css";
var input = fs.readFileSync(inputFile, 'utf8');
var output = csso.minify(input);
var outputFile = "./dist/designkit-forms.min.css";

// Minify css
fs.writeFile(outputFile, output.css, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("Success!");
});
