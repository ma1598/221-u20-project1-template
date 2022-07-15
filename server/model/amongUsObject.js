//this function is created to declare the variaubles within a amongUsObject.
function amongUsObject(color, height, isSus, isImposter) {
    this.color = color;
    this.height = height;
    this.isSus = isSus;
    this.isImposter = isImposter;
}
//This export shows the function createfeedItem, now has the string.
exports.createamongUsObject = function(color, height, isSus, isImposter) {
  return new amongUsObject(color, height, isSus, isImposter);
};
