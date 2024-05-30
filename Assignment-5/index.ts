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
   
  export  function printing<T extends Object>(p:T){
    let k: keyof typeof p;
    // console.log(k);
         for( k in p){
            result2+= String(k)+":";
            if(typeof p[k] === 'object'){
                console.log("yes\n"+typeof k);
                console.log(typeof p[k]);
                let add3=typeof p[k];
                // let add2:addres=p[k];
                newExample.printing<typeof add3>(p[k] as typeof add3);
            }
            else{
                console.log("no\n"+typeof p[k]+" "+String(k));
                result2+=p[k]+", "
            }
            
         }
         console.log(result2);
    }
}
newExample.printing(example2);              
// function calculateTax(amount:number,year:number=2023):number{
//     if(year<2023)
//        return amount*2.2;
//     else
//        return amount*3.3;
//  }
//  let result6=calculateTax(10000);
//  console.log(result6);
//  let anusha:combinedType={
//     name:"Anusha",
//     age:21,
//     isHuman:true,
//  }
//  console.log(anusha.address?.city);