function randomizeArray(array) {
  var currentIndex = array.length;
  var temporaryValue =null;
  var randomIndex=null;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining elements in array
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // Swaps it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
