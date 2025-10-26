class FormData{
    constructor(name, address, phone){
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    formInfo(){
        let mydata = "<h2>Your Data</h2>";
        mydata += "Name: " + this.name + "<br>";
        mydata += "Address: " + this.address + "<br>";
        mydata += "Phone: " + this.phone;
        return mydata;
    }
}