class item{
    name:string;
    done_status:boolean;
    delete_status:boolean;
    display:boolean;

    constructor(name:string, done_status:boolean, delete_status:boolean, display:boolean){
        this.name=name;
        this.delete_status=delete_status;
        this.done_status=done_status;
        this.display=display;
    }
    getName=():string =>{
        return this.name;
    }
    SetDoneStatus=(setvalue:boolean):void=>{
        this.done_status=setvalue;
    }
    setDeleteStatus=(setvalue:boolean):void =>{
        this.delete_status=setvalue;
    }
    setDisplay=(setvalue:boolean):void =>{
        this.display=setvalue;
    }
 }
let document1:Document=document;
type count=number
let total=document1.getElementById('total')as HTMLElement;
let donet=document.getElementById('done') as HTMLElement;
let undonet=document.getElementById('undone')as HTMLElement;
let list_items=document.getElementById('list-items')as HTMLElement;
let list_of_items:item[]=[];
var mytext=document.getElementById('input-text') as HTMLInputElement;
mytext.addEventListener('keydown',(event:KeyboardEvent)=>{
    event.preventDefault;
    if(event.key === 'Enter' && !(mytext.value.trim()==='')){
        console.log("entered"+" "+event.key)
        additem();
    }
});
function findCount(array:item[]):number{
    let c:number=0;
    for(const data of array){
        if(!data.done_status){
            c++;
        }
    }
    return c;
}
function findTotalcount(array:item[]):number{
    let c:number=0;
    for(const data of array){
        if(!data.delete_status){
            c++;
        }
    }
    return c;
}
function creating(element:item,index:number):HTMLElement{
    var div:HTMLElement=document.createElement('li');
    var cross:HTMLElement=document.createElement('label');
    var label:HTMLElement=document.createElement('label');
    label.innerHTML=element.getName();
    cross.innerHTML='X';
    cross.className='cross';
    label.className='label';
    div.appendChild(label);
    div.appendChild(cross);
    element.display=true;
    div.className='div';
    total.innerHTML='Total:'+(findTotalcount(list_of_items));
    console.log(findCount(list_of_items));
    undonet.innerHTML="Undone:"+(findCount(list_of_items));
    cross.addEventListener('click',()=>{
        deletee(index);
    })
    div.addEventListener('click',()=>{
        console.log("render lo");
        toggle(index);
    })
    list_items.appendChild(div);
    return div;
}
var checkbox:any=document.getElementById('checkbox');
let count:number=0;
function additem():void{
    var items=new item(mytext.value,false,false,false);
    list_of_items.push(items);
    mytext.value='';
    // render();
    creating(items,count);
    count++;
}
function render():void{
    list_items.innerHTML=" ";
    var done:number=0;
    var undone:number=0;
    total.innerHTML="Total"+(0);
    donet.innerHTML="Done"+0;
    undonet.innerHTML="Undone"+0;
    list_of_items.forEach((element:item,index:number)=>{
        if(!element.delete_status){
            var div=creating(element,index);
            if(element.done_status){
                div.className='done';
                done++;
                if(checkbox.checked){
                    div.style.display='none';
                }
            }
            else{
                div.className='div';
                undone++;
            }
            element.display=true;
            total.innerHTML="Total"+(done+undone);
            donet.innerHTML="Done"+done;
            undonet.innerHTML="Undone"+undone;
        }
    });

}
function toggle(index:number):void{
    console.log('ochhina');
    list_of_items[index].done_status=!list_of_items[index].done_status;
    // list_of_items[index].SetDoneStatus(!list_of_items[index].done_status);
    // list_of_items[index].display=false;
    list_of_items[index].setDisplay(false);
    render();
}
function deletee(index:number):void{
    // list_of_items[index].delete_status=true;
    list_of_items[index].setDeleteStatus(true);
    // list_of_items[index].display=false;
    list_of_items[index].setDisplay(false);
    render();
    if(list_items.innerHTML === ''){
        total.innerHTML='total'+0;
    }
}
checkbox .addEventListener('click',()=>{
    if(checkbox.checked){
        hiding();
    }
    else{
        render();
    }
})
function hiding():void{
  var list:any=document.getElementsByClassName('done');
  var i:any;
  for ( i of list){
    console.log('yes');
     i.style.display='none';
  } 
}