class StudentClass{
    constructor(name, roll, address){
        this.name = name;
        this.roll = roll;
        this.address = address;   
    }

    StudentInfo(){ // function but inside a class so it's call method
        let output = "<h1> Student Information </h1>";
        output += "Name: " + this.name + "<br>";
        output += "Roll: " + this.roll + "<br>";
        output += "Address: " + this.address + "<br>";

        return output;
    }
}

