function findMiddleLetter(string){
    var stringIndex;
    var length;
    if (string.length % 2 == 1) {
      stringIndex = string.length / 2;
      length = 1;
    } else {
      stringIndex = string.length / 2 - 1;
      length = 2;
    }
    return string.substring(stringIndex, stringIndex + length)
  }
