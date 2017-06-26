function merge(array1, array2){
  var newArray = [];
  for (var i = 0; i < array1.length; i++){
    newArray.push(array1[i]);
  }
  for (var j = 0; j < array2.length; j++){
    newArray.push(array2[j]);
  }
  newArray.sort();
  return newArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);