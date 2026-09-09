const numbers = [5, 7, 10, 11, 3];

function sum(numbers) {
    let result = 0
    for (let i = 0; i < numbers.length; i++){
        result = result + numbers[i]
    }
    return result
}


function bigestOf(numbers) {
    let biggest = numbers[0]
    for (let i = 0; i < numbers.length; i++){
        if (biggest < numbers[i]){
            biggest = numbers[i]
        }
    }
    return biggest
}

function avarage(numbers) {
    return Math.floor(sum(numbers) / numbers.length) 
}

console.log(sum(numbers))
console.log(bigestOf(numbers))
console.log(avarage(numbers))
