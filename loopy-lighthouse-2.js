function loopyLighthouse(range,multiples,words){
  var number = range[0];
  var multiple = multiples[0]*multiples[1];
  var conc_string = words[0].concat(words[1]);

  while (number <= range[1]){
    if (number % multiple === 0){
      console.log(conc_string);
    }else if(number % multiples[1] === 0){
      console.log(words[1]);
    }else if(number % multiples[0] === 0){
      console.log(words[0]);
    }else{
      console.log(number);
    }
    number++;
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);