/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
      var triangle = takeTriangles(preferences, i + 1);
      if ((triangle[0] === triangle[triangle.length - 1] && (triangle[1]) !== triangle[triangle.length - 1])) {
        count++;
      }
  }
  return count / 3;
};

function takeTriangles(preferences, startIndex) {
   var count = 0, index = 1, value = -1;
   var loveTriangle = [], loveMatrix = [];
   var i = 0;
   index = startIndex;
   for (i = 0; i < 2; i++) {
     loveTriangle.push(index);
     value = preferences[index - 1];
     loveTriangle.push(value);
     index = preferences[value - 1];
   }
   return loveTriangle;
}
