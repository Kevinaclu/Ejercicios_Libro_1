class Person {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    introduceSelf() {
        console.log("Hi, I am " + this.name + "!");
    }
}

let personA = new Person("Sally");
// Prints "Hi, I am Sally!"
personA.introduceSelf();
personA.name = "Mindy";
// Prints "Hi, I am Mindy!"
personA.introduceSelf();