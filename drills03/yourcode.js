
function getPath(path){
    var pathString = path+"/";
    var pathArray = [];
    var counter = 0;
    var counter1=0;
  for(var pathIndex=0;pathIndex<pathString.length;pathIndex++){
    counter++
  if(pathString[pathIndex] === "/"){
    pathArray.push(pathString.slice(counter1,counter-1));
    counter1 = pathIndex;
    counter1++;
  }
}
return pathArray;
}

function getPathParts(string){
  var pathString = string;
  var stringInput = pathString.split("/");
  var stringToAssign = stringInput[2].split(":");
  var protocolInput= stringInput[0].split(":").join("");
  var dotCom = stringToAssign[0];
  var portNum = parseInt(stringToAssign[1]);
  var pathInput = stringInput[3]+"/"+stringInput[4];
  var fileInput = stringInput[5];

  var objectToReturn = {
    "protocol": protocolInput,
    "host": dotCom,
    "port":portNum,
    "path": pathInput,
    "file":fileInput
  };
  if(fileInput === undefined){
    objectToReturn.path = stringInput[3];
    objectToReturn.file = stringInput[4];
  }
  return objectToReturn;
}

function getCapitalCount(array){
var counter=0;
for(var arrayIndex=0;arrayIndex<array.length;arrayIndex++){
 if(array[arrayIndex].charCodeAt(0)<97){
  counter++
 }
}
  return counter;
}

function correctCalcChecker(array){
debugger;
var arrayToRetunWithCorrectMath = [];
for(var arrayIndex=0;arrayIndex<array.length;arrayIndex++){
  var num1 = array[arrayIndex].num1;
  var num2 = array[arrayIndex].num2;
  var operator = array[arrayIndex].op;
  var result = array[arrayIndex].result;
  var switchMathResult =0;
  switch(operator){
    case "/":
     switchMathResult= num1 / num2;
     break;
    case "-":
      switchMathResult = num1 - num2;
      break;
    case "+":
      switchMathResult = num1 + num2;
      break;
    case "*":
      switchMathResult = num1 * num2;
      break;
  }
  if (result === switchMathResult) {
    arrayToRetunWithCorrectMath.push(array[arrayIndex]);
  }
}

return arrayToRetunWithCorrectMath;

}

function doMath(){

}
