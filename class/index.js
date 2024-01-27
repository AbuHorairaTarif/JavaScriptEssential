class student {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    set studentName(name){
        this.name = name;
    }
}

let s1 = new student(101,"Asif Ali");
console.log(s1.id+" "+s1.name);

console.log(s1.studentName="Habib");
console.log(s1);