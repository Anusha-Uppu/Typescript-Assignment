"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var address1 = {
    city: "Bhadrachalam",
    state: "Telangana",
    pincode: 507111
};
var student1 = {
    name: "Anusha",
    age: 21,
    email: "anusha.uppu@everest.engineering",
    courselist: "typescript",
    address: address1
};
var student2 = {
    name: "keerthana",
    age: 21,
    email: "keerthana.durgam@everest.engineering",
    courselist: "javascript",
    address: address1
};
console.log(student1);
console.log(student2);
// assignment-2
var StudentClass = /** @class */ (function () {
    function StudentClass(name, age, email, courselist, address) {
        var _this = this;
        this.getDetail = function () {
            console.log("name" + " " + _this.name);
            console.log("age" + " " + _this.age);
            console.log("email" + " " + _this.email);
            console.log("course" + " " + _this.courselist);
            console.log("city" + " " + _this.address.city);
            console.log("state" + " " + _this.address.state);
            console.log("pincode:" + " " + _this.address.pincode);
        };
        this.name = name;
        this.age = age;
        this.email = email;
        this.courselist = courselist;
        this.address = address;
    }
    return StudentClass;
}());
var student3 = new StudentClass('anusha', 21, 'anusha.uppu@everest.engineering', 'typescript', address1);
student3.getDetail();
var number = 3;
var result = (0, utils_1.returnValue)(number);
// let result2=ReadonlyStudent<Student>
var student4 = {
    name: 'anjani',
    age: 21,
    email: 'anjani.barlapati@everest.engineering',
    courselist: 'javascript',
    address: address1
};
var name2 = student4.name;
// student4.name='keethana';
