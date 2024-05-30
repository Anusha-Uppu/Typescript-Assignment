var item = /** @class */ (function () {
    function item(name, done_status, delete_status, display) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.SetDoneStatus = function (setvalue) {
            _this.done_status = setvalue;
        };
        this.setDeleteStatus = function (setvalue) {
            _this.delete_status = setvalue;
        };
        this.setDisplay = function (setvalue) {
            _this.display = setvalue;
        };
        this.name = name;
        this.delete_status = delete_status;
        this.done_status = done_status;
        this.display = display;
    }
    return item;
}());
var document1 = document;
var total = document1.getElementById('total');
var donet = document.getElementById('done');
var undonet = document.getElementById('undone');
var list_items = document.getElementById('list-items');
var list_of_items = [];
var mytext = document.getElementById('input-text');
mytext.addEventListener('keydown', function (event) {
    event.preventDefault;
    if (event.key === 'Enter' && !(mytext.value.trim() === '')) {
        console.log("entered" + " " + event.key);
        additem();
    }
});
function findCount(array) {
    var c = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var data = array_1[_i];
        if (!data.done_status) {
            c++;
        }
    }
    return c;
}
function creating(element, index) {
    var div = document.createElement('li');
    var cross = document.createElement('label');
    var label = document.createElement('label');
    label.innerHTML = element.getName();
    cross.innerHTML = 'X';
    cross.className = 'cross';
    label.className = 'label';
    div.appendChild(label);
    div.appendChild(cross);
    element.display = true;
    div.className = 'div';
    total.innerHTML = 'Total:' + (count + 1);
    console.log(findCount(list_of_items));
    undonet.innerHTML = "Undone:" + (findCount(list_of_items));
    cross.addEventListener('click', function () {
        deletee(index);
    });
    div.addEventListener('click', function () {
        console.log("render lo");
        toggle(index);
    });
    list_items.appendChild(div);
    return div;
}
var checkbox = document.getElementById('checkbox');
var count = 0;
function additem() {
    var items = new item(mytext.value, false, false, false);
    list_of_items.push(items);
    mytext.value = '';
    // render();
    creating(items, count);
    count++;
}
function render() {
    list_items.innerHTML = " ";
    var done = 0;
    var undone = 0;
    total.innerHTML = "Total" + (0);
    donet.innerHTML = "Done" + 0;
    undonet.innerHTML = "Undone" + 0;
    list_of_items.forEach(function (element, index) {
        if (!element.delete_status) {
            var div = creating(element, index);
            if (element.done_status) {
                div.className = 'done';
                done++;
                if (checkbox.checked) {
                    div.style.display = 'none';
                }
            }
            else {
                div.className = 'div';
                undone++;
            }
            element.display = true;
            total.innerHTML = "Total" + (done + undone);
            donet.innerHTML = "Done" + done;
            undonet.innerHTML = "Undone" + undone;
        }
    });
}
function toggle(index) {
    console.log('ochhina');
    list_of_items[index].done_status = !list_of_items[index].done_status;
    // list_of_items[index].SetDoneStatus(!list_of_items[index].done_status);
    // list_of_items[index].display=false;
    list_of_items[index].setDisplay(false);
    render();
}
function deletee(index) {
    // list_of_items[index].delete_status=true;
    list_of_items[index].setDeleteStatus(true);
    // list_of_items[index].display=false;
    list_of_items[index].setDisplay(false);
    render();
    if (list_items.innerHTML === '') {
        total.innerHTML = 'total' + 0;
    }
}
checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
        hiding();
    }
    else {
        render();
    }
});
function hiding() {
    var list = document.getElementsByClassName('done');
    var i;
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        i = list_1[_i];
        console.log('yes');
        i.style.display = 'none';
    }
}
