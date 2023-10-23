primeNumber = numArray =>{
 numArray = numArray.filter((number)=>{
  for(let i=0; i<=Math.sqrt(number); i++){
   if(number%i==0) return false
  }
  return true
 })
 console.log(numArray)
}
