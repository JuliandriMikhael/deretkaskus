function resultKaskus(n){
  var result = []
  var multipler = 0
  for (var m=0; m<n; m++){
    multipler += 3;
    if ( multipler % 5 === 0 && multipler % 6 === 0 ){
      result.push ("KASKUS");
    }else if ( multipler % 5 === 0 ){
      result.push ("KAS");
    }else if ( multipler % 6 === 0 ){
      result.push ("KUS");
    }else {
      result.push (multipler);
    }
}return result;
}


console.log(resultKaskus(10));

//logic exercise 2
