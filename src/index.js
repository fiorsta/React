class Developer {
    constructor(name, age, dateOfBirth, salary, department) {
        this.name = name,
        this.age = age,
        this.dateOfBirth = dateOfBirth;
        this.salary = salary,
        this.department = department;
    }
}

export let developer = new Developer('Peter', 25, '13.12.1994', 15500, 'Web');