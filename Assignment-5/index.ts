type combinedType={
    name:String;
    age:number;
    isHuman:boolean;
    address?:{
        city:String;
        state:String;
        pincode:number
    }
}
type NewcombinedType<Type>={
     [p in keyof Type] -? :Type[p];
}
let variable:NewcombinedType<combinedType>={
    name:"anusha",
    age:21,
    isHuman:true,
    address:{
        city:"Bhadrachalam",
        state:"Telangana",
        pincode:507111
    }
}
type Input={
   name:string,
   email:string
}
const example:Input={
    name:'User',
    email:'user@gmail.com'
};
let result:string='';
function printing<T extends Input>(p:T){

   for(let k in p){
    result+=k+": ";
    result+=p[k]+", ";
    // result.concat(vall);
    //console.log(k,p[k]);
   }
}
printing(example);
console.log(result);
type addres={
    city:string,
    state:string
}
type newInput={
    name:string,
    email:string,
    address:addres,
}
let add1:addres={
    city:'bhadraachalam',
    state:'Telangana'
}
let example2:newInput={
    name:"Anusha",
    email:"anusha@gamil.com",
     address:add1
  
}

namespace newExample{
    let result2:string=';'
  export  function printing<T extends newInput | addres>(p:T){
         for(let k in p){
            result2+=k+":";
            if(k == 'address'){
                console.log(p[k]);
                // let add2:addres=p[k];
                newExample.printing<addres>(p[k] as addres);
            }
            else{
                result2+=p[k]+", "
            }
            
         }
         console.log(result2);
    }
}
newExample.printing(example2);