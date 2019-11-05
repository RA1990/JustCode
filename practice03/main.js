function multiArray(array){
var output =[];
var types = {
  string:[],
  number:[],
  boolean:[]
};

for(var i=0;i<array.length;i++){
if(typeof(array[i])=== "string"){
  types.string.push(array[i]);
}
if(typeof(array[i])=== "number"){
  types.number.push(array[i]);
}
if(typeof(array[i])=== "boolean"){
  types.boolean.push(array[i]);
  }
}
for(var key in types){
output.push(types[key]);
}
return output;
}
