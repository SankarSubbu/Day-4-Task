array1=[]
array2=[]
//arrow function
let getMedian = (array1,array2) => {
 let mergedArray = array1.concat(array2).sort()

  let medianIndex = Math.floor(mergedArray.length/2)
  let median = (mergedArray[medianIndex-1]+mergedArray[medianIndex])/2
  return median
}
// IIFE function
let getMedianOfTwoSortedArraysIIFE = (array1, array2) => {
 (function() {
   // Merge the two arrays
   let mergedArray = array1.concat(array2).sort();

   // Find the median
   let medianIndex = Math.floor(mergedArray.length / 2);
   let median = (mergedArray[medianIndex - 1] + mergedArray[medianIndex]) / 2;
 })();
};

