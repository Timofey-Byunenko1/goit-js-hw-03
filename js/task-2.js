function makeArray(firstArray, secondArray, maxLength ) {
 const masuv = firstArray.concat(secondArray);

if (masuv < maxLength) {
return masuv.slice(0, ); 
} else {
 return masuv.slice(0, maxLength);
}


}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));