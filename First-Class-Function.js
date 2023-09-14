// * 1 Pure Function

function addPure(a,b) {
    return a + b;
}

console.log('Pure Function',addPure(5,5))

// * First Class Function

const addAssigning = function addAssigning(a,b) {
    return a + b;
}

console.log('Assigning',addAssigning(1,1))

// * Returning Function
function addReturning(a,b) {
    return function() {
        return a + b;
    }
}

const addTwoNumber = addAssigning(1,4)
console.log('Returning',addTwoNumber)

// * Accepting Function

function addNumber(a,b) {
    return a + b;
}

function addAccepting(add, a, b) {
    return add(a, b);
}

console.log('Accepting', addAccepting(addNumber,3,3))