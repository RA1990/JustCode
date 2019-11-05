

function countOccurences(array,string){
var array=array;
var string=string;
var sumToReturn=0;
for(var i=0;i<array.length;i++){
  if(array[i]=== string){
    sumToReturn++
  }
}
  return sumToReturn;
}

function wordLengths(array){
var array = array;
var arrayToReturn=[];
for(var arrayIndex=0;arrayIndex<array.length;arrayIndex++){
arrayToReturn.push(array[arrayIndex].length);
}
return arrayToReturn;
}
//[9,14,3,2,5,8]
function getMinMaxMean(array){
  var array=array;
  var min =array[0];
  var max =array[0];
  var mean=null;
  var total=null;
  for(var arrayIndex=0;arrayIndex<array.length;arrayIndex++){
    total += array[arrayIndex];
    if(array[arrayIndex]<min){
      min = array[arrayIndex];
    }
    if (array[arrayIndex]>max) {
      max = array[arrayIndex];
    }
  }
  mean = total/array.length;
  return {
    "min":min,
    "max":max,
    "mean":mean
  };
}

function findMode(array){
var mode = null;
var count = null;
for(var arrayIndex=0;arrayIndex<array.length;arrayIndex++){
  for(var modeIndex=0;modeIndex<arrayIndex;modeIndex++){
    if(array[arrayIndex] === array[modeIndex]){
      mode = array[modeIndex];
      count++
      console.log(count);
    }
  }
}

return mode;
}
