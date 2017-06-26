var number = 100;

while (number <= 200){
  if (number % 12 === 0){
    console.log("LoopyLighthouse");
  }else if(number % 4 === 0){
    console.log("Lighthouse");
  }else if(number % 3 === 0){
    console.log("Loopy");
  }else{
    console.log(number);
  }
  number++;
}