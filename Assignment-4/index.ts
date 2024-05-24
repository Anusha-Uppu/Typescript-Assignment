type addresss={
    city:String;
    state:String;
    pincode:number;
}
let address5:addresss={
    city:"bhadrachalam",
    state:"telangana",
    pincode:507111
}
type Students={
    name:String;
    age:number;
    email:String;
    address:addresss;
}
type ChangeStudent=Pick<Students,'name'| 'email'>
let changin:ChangeStudent={
    name:"Anusha",
    email:"anusha.uppu@everest.engineering"
}
let student5:Students={
    name:"anusha",
    age:21,
    email:'uppuanusha3@gmail.com',
    address:address5
}
function updateStudent(student:Students, update:ChangeStudent):Students{
    console.log("anuu")
    return {...student, ...update};
}
let result5= updateStudent(student5,changin);
console.log("details");
console.log(result5);
type Stringcheck<T>=T extends String? 'yes': 'no';
type s=String;
type r=Stringcheck<s>;



type Employee={
    name:String;
    age:number;
    leader?:Employee;
}
let employee1:Employee={
    name:"anusha",
    age:21,
}
let employee2:Employee={
    name:"keerthana",
    age:21,
    leader:employee1
}

let employeearray:Employee[]=[employee1, employee2];
for (const data of employeearray){
    if(data['leader']){
        console.log(data.name+"is not a leader");
    }
    else{
        console.log(data.name+"is a leader");
    }
}