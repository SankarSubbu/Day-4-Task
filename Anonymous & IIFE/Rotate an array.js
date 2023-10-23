let rotateArrayAnonymous = (array, k) => {
 let rotatedArray = []

 for(let i=0; i < array.length; i++){
  rotatedArray[(i + k) % array.length] = array[i]
 }
 return rotatedArray
}

let rotateArrayIIFE = (array,k) => {
 (function() {
  let rotatedArray = []
  for (let i = 0; i < array.length; i++) {
   rotatedArray[(i + k) % array.length] = array[i];
 }
 console.log(rotatedArray);
  })();
 }
