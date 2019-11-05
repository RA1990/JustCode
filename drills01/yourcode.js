
function sumArray(numArray){
    var sum=0;
    for(var i=0;i<numArray.length;i++){
        if (!isNaN(numArray[i])) {
            sum += numArray[i];
        }
    }
    return sum;
}

function fitWithinVal(array,num) {
var array = array;
var targetNum = num;
var arrayToReturn =[];
var sum= 0;
for(var arrayIndex=0;arrayIndex<array.length;arrayIndex++){
    arrayToReturn.push(array[arrayIndex]);
    sum += array[arrayIndex];
    if(sum>num){
        arrayToReturn.pop();
        return arrayToReturn;
    }
}

}



function getAllNamesShorterThan(array,num){
var nameArray = array
var arrayToReturn = [];
for(var arrayIndex=0;arrayIndex<nameArray.length;arrayIndex++){
    if(nameArray[arrayIndex].length<num){
        arrayToReturn.push(nameArray[arrayIndex]);
    }
}
return arrayToReturn;




}

function makeLabel(object) {
    var label = object['greeting'] + " " + object["givenName"] + " " + object["familyName"]  + "\n" + object["home address"].streetNumber+" "
        +object["home address"].streetName+"\n"+object["home address"].city+", "+object["home address"].state+" "+object["home address"].zip;
    return label;



}
