var marked = require("marked");
var fs = require("fs");

var readMeJs = fs.readFileSync("./Javascript.md", "utf-8");
var readMeGit = fs.readFileSync("./Git.md", "utf-8");
var markdownReadMeJs = marked(readMeJs);

var markdownReadMeGit = marked(readMeGit);

fs.writeFileSync("./Javascript.html", markdownReadMeJs);

fs.writeFileSync("./Git.html", markdownReadMeGit);
