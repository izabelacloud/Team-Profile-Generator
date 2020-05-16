class Employee {
    constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
    }

    getName() {
        return this.name;
    }


    getId() {
        return this.id;
    }


    getEmail() {
        return this.email
    }


    getRole() {
        return "Employee"
    }


}

module.exports = Employee;

// const bob = new Employee ("bob", 15, "bob@bob.com");
// bob.getName()
// bob.getEmail()
// bob.getRole()
// bob.getId()