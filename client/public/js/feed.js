
/*function check for a click, will then take to marist.edu*/
function checkclick(e) {

    if ('click') {
      goToLocation('https://my.marist.edu');
    }
  }
//event listener that checks for a click in order to commit to an action.
document.getElementById('portal_button').addEventListener('click', checkclick);

//shows what will be inside a feedItem
function feedItem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}
//shows what specifically will be said in each feedItem, or the story.
let story1 = new feedItem('<strong>Eren Jaeger</strong>', 'Is a character in Attack On Titan, he can be seen below.', 'https://www.marist.edu/', 'images/chaderen.png');
let story2 = new feedItem('<strong>Sus Red Crewmate</strong>', 'This man is very sus, the other crewmates susect he could actually be an imposter, who killed the white crewmate.He can also be seen in the to right corner, as the logo of this site.', 'https://www.marist.edu/', 'images/erenjaeger.png');
let story3 = new feedItem('<strong>This is Dead White Crewmate</strong>', 'He is so dead because he was actually killed by the red imposter, which is what some of the crewmates have susected.', 'https://www.marist.edu/', 'images/eric.png');

var currentStories = [story1, story2, story3];

//displays the item onto the feed part of the webpage.
function displayItem() {
    for (var i=0; i < currentStories.length; i++){
        let item = currentStories[i];
        document.getElementById("newsfeed").innerHTML += "<a href=" + item.linkUrl + ">(Suspectual link)</a>" + "<div>" + item.title + "<div>" + item.body + "</div>" + "</div>" + "<img class = 'feedImage' src = " + item.imageUrl + "><hr>";
        
    }
} 

window.addEventListener("load", displayItem);
