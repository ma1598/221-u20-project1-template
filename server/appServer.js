const express = require('express')
const app = express();
var bodyParser = require('body-parser');
app.use(express.static('client/public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

app.use(bodyParser.json({ type: 'application/json' }));
//feedController will connect to feedController in order to access feedItem
var feedController = require('./controller/feedController');
//This creates a route for the get method, post method, get again, delete, patch, and put, so that they can be transferred into the feed.
//post sends data to a server in order to create a new post.
//patch modifies an existing research, potentially taking out or putting in new information.
//put allows one to add values to a current object.
app.route('/api/feedItems')
	.get(feedController.getfeedItems)
	.post(feedController.savefeedItem)

app.route('/api/feedItems/:feedItemId')
	.get(feedController.getfeedItem)
	.delete(feedController.deletefeedItem)
	.patch(feedController.updatefeedItem)
	.put(feedController.fullUpdate)
//other controller that connects the main controller for an item to feedItem, which is amongUsObject
var amongUsObjectController = require('./controller/amongUsObjectController');

app.route('/api/amongUsObjects')
	.get(amongUsObjectController.getamongUsObjects)
	.post(amongUsObjectController.saveamongUsObject)

app.route('/api/amongUsObjects/:amongUsObjectId')
	.get(amongUsObjectController.getamongUsObject)
	.delete(amongUsObjectController.deleteamongUsObject)
	.patch(amongUsObjectController.updateamongUsObject)
	.put(amongUsObjectController.updateamongUsObject)
//allows code to be put on page.
app.listen(1337, () => console.log('Listening on port 1337.'))

