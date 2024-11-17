function checkAge(myAge) {
    if (myAge < 18) {
        console.log('child');
    } else if (myAge >= 18 && myAge < 67) {
        console.log('adult');
    } else {
        console.log('retired');
    }
}

let student = {name:'jake', age:18};
student.age = 20;

function setAge(newAge) {
    if (typeof(newAge) == "number") {
        student.age = newAge;
    }
}

function calculateSum(a, b) {
    return a + b;
}

let calculateSumTwo = (a, b) => {
    return a + b;    
}

// let calculateSumThree = (a, b) => return a + b; 


// books = [...books, {name: ""}
// books.push({title: "xys", author:"John"})
// books.push({title: "hello", author:"Jane"})
// let [first, second, third] = books
// let [,, third] = books
// let [first, ...rest] = books
// let books = [...rest, first]

// for (const book of books) {
//     console.log(book.title) 
// }

