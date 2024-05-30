var variable = {
    name: "anusha",
    age: 21,
    isHuman: true,
    address: {
        city: "Bhadrachalam",
        state: "Telangana",
        pincode: 507111
    }
};
var example = {
    name: 'User',
    email: 'user@gmail.com'
};
var result = '';
function printing(p) {
    for (var k in p) {
        result += k + ": ";
        result += p[k] + ", ";
        // result.concat(vall);
        //console.log(k,p[k]);
    }
}
printing(example);
console.log(result);
var add1 = {
    city: 'bhadraachalam',
    state: 'Telangana'
};
var example2 = {
    name: "Anusha",
    email: "anusha@gamil.com",
    address: add1
};
var newExample;
(function (newExample) {
    var result2 = ';';
    function printing(p) {
        var k;
        // console.log(k);
        for (k in p) {
            result2 += String(k) + ":";
            if (typeof p[k] === 'object') {
                console.log("yes\n" + typeof k);
                console.log(typeof p[k]);
                var add3 = typeof p[k];
                // let add2:addres=p[k];
                newExample.printing(p[k]);
            }
            else {
                console.log("no\n" + typeof p[k] + " " + String(k));
                result2 += p[k] + ", ";
            }
        }
        console.log(result2);
    }
    newExample.printing = printing;
})(newExample || (newExample = {}));
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
