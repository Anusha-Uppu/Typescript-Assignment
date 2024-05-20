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
// using type 
