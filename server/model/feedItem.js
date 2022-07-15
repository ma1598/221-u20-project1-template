
//this function is created to declare the variaubles within a feedItem.
function feedItem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

//This export shows the function createfeedItem, now has the string.
exports.createfeedItem = function(title, body, linkUrl, imageUrl) {
  return new feedItem(title, body, linkUrl, imageUrl);
};
