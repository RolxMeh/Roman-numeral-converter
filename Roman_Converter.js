const rm = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1
}

function converter(num){
  result = '';
  for(let keys in rm){
    if(num >= rm[keys]){
      result += keys;
      num -= rm[keys];
    }
  }
  return result;
}


console.log(converter(170));
