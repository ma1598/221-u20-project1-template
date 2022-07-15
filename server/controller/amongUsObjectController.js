//declaring the variable amongUsObject
var amongUsObject = require('../model/amongUsObject')
//variable amongUsObject is going to be assigned a value, multiple.
var amongUsObjects = [];
//function createamongUsObject has a list containing color, height, isSus, isImposter, each one has their own list of variables
var amongUsObject1 = amongUsObject.createamongUsObject("purple", "3'6", "true", "true");
var amongUsObject2 = amongUsObject.createamongUsObject("blue", "3'6", "true", "false");
var amongUsObject3 = amongUsObject.createamongUsObject("yellow", "3'6", "true", "false");
var amongUsObject4 = amongUsObject.createamongUsObject("brown", "3'6", "true", "false");
//push method, adds elements onto the end of the array previously made, and returns the updatred length of such array.
amongUsObjects.push(amongUsObject1);
amongUsObjects.push(amongUsObject2);
amongUsObjects.push(amongUsObject3);
amongUsObjects.push(amongUsObject4);
/*export shows certain parts of code, while leaving other parts private. The .get method returns a vertain element from the object.
The setHeader sets a response header, with the given value and name.
.send then sends the request right to the server. */
exports.getamongUsObjects = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(amongUsObjects);
}
/*method saves what is input for the list.*/
exports.saveamongUsObject = function(req, res) {
	let newamongUsObject = amongUsObject.createamongUsObject(req.body.color, req.body.height, req.body.isSus, req.body.isImposter);
	amongUsObjects.push(newamongUsObject);
	res.setHeader('Content-Type', 'application/json');
	res.send(amongUsObjects);
}
/*the attribute id is used to both use and manipulate the element because it has a specific id*/
exports.getamongUsObject = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
 res.send(amongUsObjects[req.params.amongUsObjectId]);
}
/*.delete deletes a line of code when prompted*/
exports.deleteamongUsObject = function(req, res) {
	amongUsObjects.splice(req.params.amongUsObjectId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(amongUsObjects);
}
/*Updates if the user would like to replace*/
exports.updateamongUsObject = function(req, res) {
	var updatedamongUsObject = amongUsObjects[req.params.amongUsObjectId];
/*Ensures that all items in the list are set and can be changed.*/
	console.log(req.body.color);
	if(req.body.color)

		updatedamongUsObject.color = req.body.color;
	if(req.body.height)
		updatedamongUsObject.height = req.body.height;
	if(req.body.isSus)
		updatedamongUsObject.isSus = req.body.isSus;
	if(req.body.isImposter)
		updatedamongUsObject.isImposter = req.body.isImposter;

	amongUsObjects[req.params.amongUsObjectId] = updatedamongUsObject;

	res.setHeader('Content-Type', 'application/json');
	res.send(amongUsObjects[req.params.amongUsObjectId]);
}