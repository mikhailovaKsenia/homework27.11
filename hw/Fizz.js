function fizzBuzz(num1,num2){
    let x = num1
    let z = num2
	for (let x = num1; x <= z; x++) {
      
    if(x % 3 === 0 && x % 5 === 0) {
        console.log(`FizzBuzz`)
    }
    else if(x % 3 === 0) {
        console.log(`Fizz`)
    }
    else if(x % 5 === 0) {
        console.log(`Buzz`)
    }

    else{
        console.log(x)
    }

}
return fizzBuzz
}

console.log(fizzBuzz(11,20))