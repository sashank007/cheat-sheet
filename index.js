var marked = require("marked");
var fs = require("fs");

var readMe = fs.readFileSync("./Javascript.md", "utf-8");
var markdownReadMe = marked(readMe);

fs.writeFileSync("./Javascript.html", markdownReadMe);
