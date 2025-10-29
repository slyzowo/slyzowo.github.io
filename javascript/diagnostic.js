function update_info(){

  document.getElementById("browser_window").innerHTML =
  "Browser inner window width: " + window.innerWidth + "px<br>" +
  "Browser inner window height: " + window.innerHeight + "px<br>";

  document.getElementById("screen_size").innerHTML =
  "Screen height: " + screen.height + "px<br>" +
  "Screen width: " + screen.width + "px<br>";

  document.getElementById("available_screen").innerHTML =
  "Available Screen Height: " + screen.availHeight + "px<br>" +
  "Available Screen Width: " + screen.availWidth + "px<br>";

  document.getElementById("colours").innerHTML =
  "Colour Depth: " + screen.colorDepth + "<br>" +
  "Pixel Depth: " + screen.colorDepth + "<br>";
}

window.addEventListener("resize", update_info);
window.addEventListener("load", update_info);