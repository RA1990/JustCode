
function numericSpirals(num){
var array = [0,1];
for(var arrayIndex=2;arrayIndex<num;arrayIndex++){
  array.push(array[arrayIndex - 2]+array[arrayIndex-1])
}
return array;
}
