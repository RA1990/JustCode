function randomRange(num1,num2,Array){
  var answer = Math.floor(Math.random(num1) * num2);
  var answer1 = Math.floor(Math.random(1) * 100);
  var answer2 = Math.floor(Math.random() * Array.length);
  return "num1 & num2 random num is:" + answer+" Array random is:" +
   Array[answer2]+" random 1 - 10 is:"+answer1;
}
