

function igpayAtinlay(string){
  var myString = string.toLocaleLowerCase();
  var stringArray = myString.split(' ');
  var stringToReturn = '';
  for(var stringIndex=0;stringIndex<stringArray.length;stringIndex++){
  var stringCut = stringArray[stringIndex];
  var stringToMoveToEndOfString = stringCut.charAt(0);
  var newFristLetter = stringCut.charAt(1).toUpperCase();
  var reverseArray= stringArray[stringIndex].slice(2,5);
  var newString = reverseArray+stringToMoveToEndOfString+"ay";
  stringToReturn += " "+newFristLetter+newString+'';
  }



  return stringToReturn;

}
