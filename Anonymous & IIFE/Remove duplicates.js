// Anonymous function
let removeDuplicatesAnonymous = (array) => {
 // Create a set to store the unique elements of the array.
 let uniqueElements = new Set();

 // Iterate over the array and add each element to the set.
 for (let element of array) {
   uniqueElements.add(element);
 }

 // Return the list of unique elements.
 return [...uniqueElements];
};

// IIFE function
let removeDuplicatesIIFE = (array) => {
 (function() {
   // Create a set to store the unique elements of the array.
   let uniqueElements = new Set();

   // Iterate over the array and add each element to the set.
   for (let element of array) {
     uniqueElements.add(element);
   }

   // Return the list of unique elements.
   console.log([...uniqueElements]);
 })();
};
