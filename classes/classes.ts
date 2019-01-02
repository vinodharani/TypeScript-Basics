class Person {
    private firstName : string;
    private lastName : string;
    readonly rollNo : number;

    greet() {
        console.log("Hello there");
    }

    constructor(firstName : string, lastName : string, rollNo : number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rollNo = rollNo;
    }

    getFirstName() : string {
        return this.firstName;
    }

    setFirstName(firstName : string) {
        this.firstName = firstName;
    }

    getLastName() : string {
        return this.lastName;
    }

    setLastName(lastName : string) {
        this.lastName = lastName;
    }

    getFullName() : string {
        return this.firstName + " " + this.lastName;
    }
}

class Programmer extends Person {
    greet() {
        console.log("Hello world");
    }

    greetLikeANormalPerson() {
        console.log("Hello there");
    }
}

var aProgrammer : Person = new Programmer("Vino", "Dharani", 123);
aProgrammer.greet();
console.log(aProgrammer)
