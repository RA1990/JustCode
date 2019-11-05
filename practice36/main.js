function vowels(string) {
  var newarray = [];
  for(var i =0;i<string.length;i++){
    var stringIndex = string[i]
    switch(stringIndex){
      case "a":
        newarray.push(stringIndex);
        break;
      case "i":
        newarray.push(stringIndex);
        break;
      case "e":
        newarray.push(stringIndex);
        break;
      case "o":
        newarray.push(stringIndex);
        break;
      case "u":
        newarray.push(stringIndex);
        break;
    }
  }
  return newarray;
}
