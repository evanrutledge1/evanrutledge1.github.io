document.write('<div class="w3-sidebar w3-bar-block w3-card w3-dark-grey" style="width:25%"><a href="index.html" class="w3-bar-item w3-button w3-black">Home</a>');
document.write('<a href="/games/index.html" class="w3-bar-item w3-button w3-black">Games</a>');
document.write('<a href="http://youtube.com/@sussteve226" class="w3-bar-item w3-button w3-black">Youtube</a>');
document.write('<a href="http://github.com/evanrutledge226" class="w3-bar-item w3-button w3-black">Github</a>');
document.write('<button class="w3-bar-item w3-btn w3-light-grey" onclick="darkMode()">Toggle dark mode</button></div><div style="margin-left:25%">');
function darkMode() {
  var element = document.body;
  element.classList.toggle("w3-dark-grey");
}
