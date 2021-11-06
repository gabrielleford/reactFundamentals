// we name the class
class User {
    // we call the constructor function and create parameters
    // these will be values that we want to be passed in and stored in the object
    constructor(first, last, e) {
              // on the right side of the below expressions, the words 'first', 'last', and 'e' are the values being passed in as the arguments when the object is created
        this.f = first;
        this.l = last;
        this.email = e;
        // on the left side, we have the actual keys of the objects being created as the value for 'this' specific object being created 
    };
};

let userOne = new User('Paul', 'O\'Connor', 'poconnor@elevenfifty.org');
console.log(userOne.first); // undefined
console.log(userOne.f); // Paul
console.log(userOne.l); // O'Connor
console.log(userOne); // User {f: 'Paul', l: 'O'Connor', email: 'poconnor@elevenfifty.org'}

class Player {
    constructor(playerName, playerNum, avgPoints) {
        this.name = playerName;
        this.number = playerNum;
        this.averagePoints = avgPoints;
    };
};

let stephCurry = new Player('Steph Curry', 30, 32);
console.log(stephCurry.name);
console.log(stephCurry.number);
console.log(stephCurry.averagePoints);
console.log(stephCurry);