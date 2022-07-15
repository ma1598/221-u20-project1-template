/*declares a variable. (feedItem)*/
var feedItem = require('../model/feedItem')
/*feedItem is going to be assigned multiple values, making it feedItems.*/
var feedItems = [];
/*Function createfeedItem has a list of what will be contained, this is the title, body, linkUrl, imageUrl.*/
var feedItem1 = feedItem.createfeedItem("Eren Jaeger", "Is a very cool dude", "https://www.google.com/search?q=eren&rlz=1C1GCEA_enUS824US824&tbm=isch&source=iu&ictx=1&vet=1&fir=smm5w5x0QefXOM%252C6Uz6bNDlD0XNgM%252C_%253B4H66pYzqFs7B_M%252CAkXY7Zct-DW0sM%252C_%253BNZUTE8EYiL9uIM%252C6KjI7klD9CGcJM%252C_%253BFZYG0wbiknCG1M%252C6KjI7klD9CGcJM%252C_%253B6UfJ5m8wo8ntWM%252CdIUMf783_jQ4-M%252C_%253BLYMlZoJYYMrrdM%252ColLM3mwlxYrGIM%252C_%253Bw6JK6qK5MNkaKM%252C14suMV-wPWWabM%252C_%253Bgo3g3dUgHzWpRM%252CUbrzta_kJx4r9M%252C_%253B5lg6o8QN3cbEMM%252CI1T2ANZMFIMWmM%252C_%253BdbBNkc_2Bp3wSM%252CNd0VTvNhrrB8QM%252C_%253B3bY6t7mLqa32JM%252CcNWzZa8neGgV_M%252C_%253B9tbRtsB_dF6SQM%252CqM7CCvu1feDtkM%252C_%253BUewETLjGdOyYiM%252Ci5azIEytCxx-BM%252C_&usg=AI4_-kR4fWrkZy_obwZLb-qoH2SV82dgRQ&sa=X&ved=2ahUKEwjT9evjxvb4AhXGbTABHSs7CkAQ9QF6BAgREAE#imgrc=4H66pYzqFs7B_M", "images/erenjaeger.png");
var feedItem2 = feedItem.createfeedItem("Red Crewmate", "Is extremely sus", "https://store.steampowered.com/app/945360/Among_Us/", "images/erenjaeger.png");
var feedItem3 = feedItem.createfeedItem("Dead White Crewmate", "Is very dead", "https://store.steampowered.com/app/945360/Among_Us/", "images/erenjaeger.png");
var feedItem4 = feedItem.createfeedItem("Blue Crewmate", "Is doing tasks", "https://store.steampowered.com/app/945360/Among_Us/", "images/erenjaeger.png");
/*push method adds elements to the array and returns the updated length of such array.*/
feedItems.push(feedItem1);
feedItems.push(feedItem2);
feedItems.push(feedItem3);
feedItems.push(feedItem4);

/*
This function updates if the user would like to replace.*/ 
exports.fullUpdate = function(req, res) {
	feedItems[req.params.feedItemId] = feedItem.createfeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
	res.setHeader('Content-Type', 'applicaion/json');
	res.send(feedItems);
}
/*export shows certain parts of code, while leaving other parts private. The .get method returns a vertain element from the object.
The setHeader sets a response header, with the given value and name.
.send then sends the request right to the server. */
exports.getfeedItems = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}
//this save method saves what is put in for the list.
exports.savefeedItem = function(req, res) {
	let newfeedItem = feedItem.createfeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
	feedItems.push(newfeedItem);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}
//the id attribute is utilized to get access and change the element with that id.
exports.getfeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(feedItems[req.params.feedItemId]);
}
//Deletes a line of code when usign the delete method.
exports.deletefeedItem = function(req, res) {
	feedItems.splice(req.params.feedItemId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}
//Update method updates if the user would like to change anything.
exports.updatefeedItem = function(req, res) {
	var updatedfeedItem = feedItems[req.params.feedItemId];
/*Ensures that all items in the list are set and can be changed.*/
	console.log(req.body.title);
	if(req.body.title)

		updatedfeedItem.title = req.body.title;
	if(req.body.body)
		updatedfeedItem.body = req.body.body;
	if(req.body.linkUrl)
		updatedfeedItem.linkUrl = req.body.linkUrl;
	if(req.body.imageUrl)
		updatedfeedItem.imageUrl = req.body.imageUrl;

	feedItems[req.params.feedItemId] = updatedfeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems[req.params.feedItemId]);
}