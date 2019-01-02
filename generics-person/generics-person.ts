class Person {
    constructor(private firstName : string, private lastName : string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Admin extends Person {

}

class Manager extends Person {

}

let admin : Person = new Admin("admin", "admin");
let manager : Person = new Manager("manager", "manager");

// this function uses generics of classes that only extends Person
function echo<T extends Person> (person : Person) : Person {
    return person;
}

echo(admin);
echo(manager);