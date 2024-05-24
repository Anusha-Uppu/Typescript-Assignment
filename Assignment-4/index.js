var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var address5 = {
    city: "bhadrachalam",
    state: "telangana",
    pincode: 507111
};
var changin = {
    name: "Anusha",
    email: "anusha.uppu@everest.engineering"
};
var student5 = {
    name: "anusha",
    age: 21,
    email: 'uppuanusha3@gmail.com',
    address: address5
};
function updateStudent(student, update) {
    console.log("anuu");
    return __assign(__assign({}, student), update);
}
var result5 = updateStudent(student5, changin);
console.log("details");
console.log(result5);
var employee1 = {
    name: "anusha",
    age: 21,
};
var employee2 = {
    name: "keerthana",
    age: 21,
    leader: employee1
};
var employeearray = [employee1, employee2];
for (var _i = 0, employeearray_1 = employeearray; _i < employeearray_1.length; _i++) {
    var data = employeearray_1[_i];
    if (data['leader']) {
        console.log(data.name + "is not a leader");
    }
    else {
        console.log(data.name + "is a leader");
    }
}
