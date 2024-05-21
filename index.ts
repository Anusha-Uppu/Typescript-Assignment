import { returnValue } from "./utils";
type course="javascript" | "typescript";
type address={
    city:String;
    state:String;
    pincode:number;
}
interface Student{
    name:String;
    age:number;
    email:String;
    courselist:course;
    address:address;
}
let address1:address={
   city:"Bhadrachalam",
   state:"Telangana",
   pincode:507111
}
let student1:Student={
    name:"Anusha",
    age:21,
    email:"anusha.uppu@everest.engineering",
    courselist:"typescript",
    address:address1
}
let student2:Student={
    name:"keerthana",
    age:21,
    email:"keerthana.durgam@everest.engineering",
    courselist:"javascript",
    address:address1
}
console.log(student1);
console.log(student2);
// assignment-2
class StudentClass{
    name: String;
    age: number;
    email: String;
    courselist:course;
    address:address;
    constructor(name: String, age: number, email: String, courselist:course, address:address){
        this.name=name;
        this.age=age;
        this.email=email;
        this.courselist=courselist;
        this.address=address;
    }
    getDetail=():void =>{
        console.log("name"+" "+this.name);
        console.log("age"+" "+this.age);
        console.log("email"+" "+this.email);
        console.log("course"+" "+this.courselist);
        console.log("city"+" "+this.address.city);
        console.log("state"+" "+this.address.state);
        console.log("pincode:"+" "+this.address.pincode);
    } 
}
let student3=new StudentClass('anusha',21,'anusha.uppu@everest.engineering','typescript',address1);
student3.getDetail();

const number=3;
const result=returnValue(number);
type ReadonlyStudent<Type>={
   readonly [P in keyof Type]:Type[P];
}
// let result2=ReadonlyStudent<Student>
let student4:ReadonlyStudent<Student>={
    name:'anjani',
    age:21,
    email:'anjani.barlapati@everest.engineering',
    courselist:'javascript',
    address:address1
}
const name2=student4.name;
// student4.name='keethana';