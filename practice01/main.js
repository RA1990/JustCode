
function biggerWords(string,arrayOfStrings){
var stringLength = string.length;
var arrayIndexCounter = 0;
var biggerStringArray=[];
var arraylengthCounter = arrayOfStrings.length;
while(0 != arraylengthCounter){
  if(arrayOfStrings[arrayIndexCounter].length>stringLength){
    biggerStringArray.push(arrayOfStrings[arrayIndexCounter]);
  }
  arraylengthCounter--;
  arrayIndexCounter++;
}

return biggerStringArray;
}
