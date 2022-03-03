let favMovie = (movie = "The Room", myName = "Tommy Wiseau") => console.log(`My name is ${myName} and my favorite movie is ${movie}.`);


favMovie();
favMovie("The Lion King", "Santita Humphries");

let getFirstName = (string) => {
    let firstName = string.split(' ');
    return firstName[0];
}

console.log(getFirstName("Santita Humphries"));

let getFirstNameConcise = string => string.split(' ')[0];

console.log(getFirstNameConcise("Santita Humphries"));

let doMath = (a, b) => ({ exponent: a ^ b, product: a / b});

let answer = doMath(4,2);
console.log(`${answer.exponent}, ${answer.product}`);

let details = (name, location, favFood) => console.log(`${name}, ${location}, ${favFood}`);

let detailsArr = ['Paul', 'Birmingham', 'Kimchi'];

details(...detailsArr);

let me = ['Santita', 'Birmingham', 'Pizza'];

details(...me);

let someFunc = string => {
    let stringArr = [...string];

   for (let i= 0; i < stringArr.length; i++) {
       console.log(stringArr[i]);
   }

}

someFunc(...me);