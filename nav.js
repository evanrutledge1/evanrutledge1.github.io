document.write('<button class="w3-btn w3-left w3-xlarge w3-light-grey" onclick="w3_open()">&#9776;</button>')
document.write('<div class="w3-left w3-sidebar w3-bar-block w3-border w3-card w3-dark-grey w3-hide-small" id="sidebar" style="width:25%">');
document.write('<button class="w3-bar-item w3-btn w3-light-grey" onclick="w3_close()">Close &times;</button>');
document.write('<a href="/index.html" class="w3-bar-item w3-button w3-black">Home</a>');
document.write('<a href="/games/index.html" class="w3-bar-item w3-button w3-border w3-black">Games</a>');
document.write('<a href="http://youtube.com/@sussteve226" class="w3-bar-item w3-button w3-border w3-black">Youtube</a>');
document.write('<a href="http://github.com/evanrutledge226" class="w3-bar-item w3-button w3-border w3-black">Github</a>');
document.write('<button class="w3-bar-item w3-btn w3-border w3-light-grey" onclick="darkMode()">Toggle dark mode</button></div><div style="margin-left:25%"></div>');
function darkMode() {
  var element = document.body;
  element.classList.toggle("w3-dark-grey");
}
if( window.money === undefined ){
  document.write('<div class="w3-panel w3-red w3-display-container">');
  document.write('<span onclick="this.parentElement.style.display=none" class="w3-btn w3-red w3-display-topright">&times;</span><h3>Disable adblock</h3>');
  document.write('<p>Please disable your adblocker to improve your expereance. Click that red "&times;" to close this message.</p></div>');
}
function w3_open() {
  document.getElementById("sidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("sidebar").style.display = "none";
}
