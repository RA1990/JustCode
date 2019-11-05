
function invertNegatives(num){
  if(isNaN(num)){// checks if num is a number
    return false;
  }
  if(num<0){
    return Math.abs(num);//turns negative num to positive num
  }else{
    return  -Math.abs(num);// turns positive num to negative num
  }
}
