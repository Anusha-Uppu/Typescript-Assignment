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
        for (var k in p) {
            result2 += k + ":";
            if (k == 'address') {
                console.log(p[k]);
                // let add2:addres=p[k];
                newExample.printing(p[k]);
            }
            else {
                result2 += p[k] + ", ";
            }
        }
        console.log(result2);
    }
    newExample.printing = printing;
})(newExample || (newExample = {}));
newExample.printing(example2);
