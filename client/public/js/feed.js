

function checkclick(e) {

    if ('click') {
      goToLocation('https://my.marist.edu');
    }
  }
  
document.getElementById('portal_button').addEventListener('click', checkclick);


function feedItem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

let story1 = new feedItem('Eren Jaeger', 'Is a character in Attack On Titan, he can be seen below.', 'https://www.marist.edu/', 'images/chaderen.png');
let story2 = new feedItem('Sus Red Crewmate', 'This man is very sus, the other crewmates susect he could actually be an imposter, who killed the white crewmate.He can also be seen in the to right corner, as the logo of this site.', 'https://www.marist.edu/', 'images/erenjaeger.png');
let story3 = new feedItem('This is Dead White Crewmate', 'He is so dead because he was actually killed by the red imposter, which is what some of the crewmates have susected.', 'https://www.marist.edu/', 'images/eric.png');

var currentStories = [story1, story2, story3];


function displayItem() {
    for (var i=0; i < currentStories.length; i++){
        let item = currentStories[i];
        document.getElementById("newsfeed").innerHTML += "<a href=" + item.linkUrl + ">(Suspectual link)</a>" + "<div>" + item.title + "<div>" + item.body + "</div>" + "</div>" + "<img class = 'feedImage' src = " + item.imageUrl + ">";
        
    }
} 

window.addEventListener("load", displayItem);
