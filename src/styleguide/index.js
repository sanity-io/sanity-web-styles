const pkg = require("../../package.json");

document.getElementById("version").innerHTML = "v" + pkg.version;
document.getElementById("description").innerHTML = pkg.description.replace(
  "Sanity.io",
  '<a href="https://www.sanity.io/" target="_blank">Sanity.io</a>'
);
