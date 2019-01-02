// mark this as export, so this class can be imported in some other TypeScript file
export class Student {

    constructor(private firstName : string, private lastName : string, readonly rollNo : number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rollNo = rollNo;
    }

    getStudentDetails() : Student {
        return this;
    }
}