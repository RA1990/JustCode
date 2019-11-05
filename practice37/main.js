function capitalizeString(str){
var output = "";
for(var i=0;i<str.length;i++){
  str[i];
  if(output.length % 2 ===1){
    output+= str[i].toUpperCase();
  }else{
     output += str[i];
    }
  }
  return output;
}
