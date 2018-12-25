function multiplesOf3and5(max:number) {
  var three=0;
  var five=0;
  var num=0;
  var sum=0;
  while(++num<max){
    if(++three==3) three = 0;
    if(++five==5) five = 0;
    if(!five || !three) sum += num;
  }
  return sum;
}

multiplesOf3and5(1000);

[1000,49,19564].forEach(
    num=>console.log(multiplesOf3and5(num))
);