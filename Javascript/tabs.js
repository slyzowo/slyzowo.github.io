function openTabGemini(evt, season) {

  var i, geminiTabcontent, geminiTablinks;

  geminiTabcontent = document.getElementsByClassName("gemini-tab-content");
  for (i = 0; i < geminiTabcontent.length; i++) {
    geminiTabcontent[i].style.display = "none";
  }

  geminiTablinks = document.getElementsByClassName("gemini-tabs");
  for (i = 0; i < geminiTablinks.length; i++) {
    geminiTablinks[i].className = geminiTablinks[i].className.replace(" active", "");
  }

  document.getElementById(season).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="default-open" and click on it
document.getElementById("gemini-default-open").click();


function openTabGame(evt, gameName) {

  var i, tabContent, tabLinks;

  tabContent = document.getElementsByClassName("game-tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none"; 
  }

  tabLinks = document.getElementsByClassName("game-tabs");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(gameName).style.display = "block";
  evt.currentTarget.className += " active";

}
// Automatically open the default tab
document.getElementById("game-default-open").click();

function openTabFabric(evt, fabricName) {
  var i, tabContent, tabLinks;

  // Hide all tab content
  tabContent = document.getElementsByClassName("fabric-tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Remove "active" class from all buttons
  tabLinks = document.getElementsByClassName("fabric-tabs");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  // Show the selected tab content
  document.getElementById(fabricName).style.display = "block";

  // Add "active" class to the clicked button
  evt.currentTarget.className += " active";
}

// Automatically open the default tab when the page loads
window.onload = function() {
  document.getElementById("fabric-default-open").click();
};