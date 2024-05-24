class item{
    name:String |any;
    done_status:boolean;
    delete_status:boolean;
    display:boolean;

    constructor(name:String, done_status:boolean, delete_status:boolean, display:boolean){
        this.name=name;
        this.delete_status=delete_status;
        this.done_status=done_status;
        this.display=display;
    }
    getName=():String =>{
        return this.name;
    }
}
let document1:Document=document;
type count=number| any
let total:count=document1.getElementById('total');
let donet:count=document.getElementById('done');
let undonet:count=document.getElementById('undone');
let list_items:any=document.getElementById('list-items');
let list_of_items:item[]=[];
var mytext=document.getElementById('input-text') as HTMLInputElement;
mytext.addEventListener('keydown',(event:KeyboardEvent)=>{
    event.preventDefault;
    if(event.key === 'Enter' && !(mytext.value.trim()==='')){
        console.log("entered"+" "+event.key)
        additem();
    }
});
var checkbox:any=document.getElementById('checkbox');
function additem():void{
    var items=new item(mytext.value,false,false,false);
    list_of_items.push(items);
    mytext.value='';
    render();
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
            var div:any=document.createElement('li');
            var cross:any=document.createElement('label');
            var label:any=document.createElement('label');
            label.innerHTML=element.getName();
            cross.innerHTML='X';
            cross.className='cross';
            label.className='label';
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

            div.appendChild(label);
            div.appendChild(cross);
            element.display=true;
            div.addEventListener('click',()=>{
                toggle(index);
            })
            cross.addEventListener('click',()=>{
                deletee(index);
            })
            list_items.appendChild(div);
            total.innerHTML="Total"+(done+undone);
            donet.innerHTML="Done"+done;
            undonet.innerHTML="Undone"+undone;
        }
    });

}
function toggle(index:number):void{
    list_of_items[index].done_status=!list_of_items[index].done_status;
    list_of_items[index].display=false;
    render();
}
function deletee(index:number):void{
    list_of_items[index].delete_status=true;
    list_of_items[index].display=false;
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