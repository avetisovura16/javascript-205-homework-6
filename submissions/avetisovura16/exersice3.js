const result = []
result.push(doubleOf(8))

function printDouble(n) {
    console.log(n * 2);
}

function doubleOf(n) {
    return n * 2;
}

printDouble(5)
console.log(doubleOf(5))
console.log(result)
console.log(doubleOf(5) + doubleOf(10))

console.log( printDouble(5) + printDouble(10) ) // this line gives you nan because function "printDouble" doesnt return you anything