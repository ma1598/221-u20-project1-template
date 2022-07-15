


//Checks for key press in order to take to feed.
function checkKeyPress(e) {

  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}

function click1(e) {

  if ('click') {
    goToLocation('/feed');
  }
}
document.getElementById('fade_text').addEventListener('click', click1);
document.addEventListener('keypress', checkKeyPress);
