var item = /** @class */ (function () {
    function item(name, done_status, delete_status, display) {
        var _this = this;
        this.getName = function () {
            return _this.name;
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
var checkbox = document.getElementById('checkbox');
function additem() {
    var items = new item(mytext.value, false, false, false);
    list_of_items.push(items);
    mytext.value = '';
    render();
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
            var div = document.createElement('li');
            var cross = document.createElement('label');
            var label = document.createElement('label');
            label.innerHTML = element.getName();
            cross.innerHTML = 'X';
            cross.className = 'cross';
            label.className = 'label';
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
            div.appendChild(label);
            div.appendChild(cross);
            element.display = true;
            div.addEventListener('click', function () {
                toggle(index);
            });
            cross.addEventListener('click', function () {
                deletee(index);
            });
            list_items.appendChild(div);
            total.innerHTML = "Total" + (done + undone);
            donet.innerHTML = "Done" + done;
            undonet.innerHTML = "Undone" + undone;
        }
    });
}
function toggle(index) {
    list_of_items[index].done_status = !list_of_items[index].done_status;
    list_of_items[index].display = false;
    render();
}
function deletee(index) {
    list_of_items[index].delete_status = true;
    list_of_items[index].display = false;
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
