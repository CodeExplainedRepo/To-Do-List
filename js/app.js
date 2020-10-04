// CODE EXPLAINED channel


function myFunction() {
    var d = new Date();
    console.log(d);
    var weekday = new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thrusday";
    weekday[5]="Friday";
    weekday[6]="Saturday";

    var month = new Array(11);
     month[0] = "Jan";
     month[1] = "Feb";
     month[2] = "Mar";
     month[3] = "April";
     month[4] = "May";
     month[5] = "June";
     month[6] = "July";
     month[7] = "Aug";
     month[8] = "Sept";
     month[9] = "Oct";
     month[10] = "Nov";
     month[11] = "Dec";

    var mon = month[d.getMonth()];
    var day =  weekday[d.getDay()];
    var date = d.getDate();
    document.getElementById("date").innerHTML = day  +", "+ mon + " "+date ;
  }

  myFunction();

  function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59

    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
   
    
    var time = h + ":" + m + ":"  + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

// showing data in todolist 
const clear = document.querySelector(".clear");
const  list= document.getElementById("list");
const input=document.getElementById('input');

const check = "fa-check-circle";
const uncheck = "fa-circle-thin";
const linethrough="lineThrough";
let LIST, id;


//get item
let data = localStorage.getItem("storeitem");

if(data)
{
    LIST =JSON.parse(data);
    id=LIST.length;
    loadList(LIST);

}
else{
    LIST=[];
    id=0;
}

function loadList(array){
    array.forEach(function(item){
        add(item.name,item.id,item.done,item.trash);
    });
}
//clear
clear.addEventListener("click",function(){
    localStorage.clear();
    location.reload();
})



  function add(todo,id,done,trash){


    if(trash){
        return;
    }
    const don = done ? check:uncheck;
    const line = done ? linethrough:"";

    const item = `<li class="item">
    <i class="fa ${don} co" job="complete"  id="${id}"></i>
    <p  class="text ${line}">${todo}</p>
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i> 
    </li>`;

    const position="beforeend";

    list.insertAdjacentHTML(position, item);
    }

   
   
     document.addEventListener("keyup",function(even){
        if(event.keyCode==13)
        {   
            const todo = input.value;

            if(todo=="")
            {
                alert('ERROR :Please Input a task')
            }

            if(todo)
            {
                add(todo, id, false,false);

                LIST.push({
                    name:todo,
                    id:id,
                    done:false,
                    trash:false
                });
                localStorage.setItem("storeitem",JSON.stringify(LIST));
                id++;
                
            }
            input.value="";
            
        }
    });


   const btu= document.getElementById('foo');
   
   btu.addEventListener("click",function(cgata){

   
    const todo = input.value;

    if(todo=="")
    {
        alert('ERROR :Please Input a task')
    }

    if(todo)
    {
        add(todo, id, false,false);

        LIST.push({
            name:todo,
            id:id,
            done:false,
            trash:false
        });
        id++;
        
    }
    input.value="";

   })


   function completeto(element)
   {
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.querySelector(".text").classList.toggle(linethrough);

    LIST[element.id].done =LIST[element.id].done?false:true;
   }


   function removeto(element)
   {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash=true;

   }


   list.addEventListener("click",function(event){
    const element = event.target;
    const elementjob = element.attributes.job.value;

    if(elementjob=="complete")
    {
        completeto(element);

    }
    else if(elementjob=="delete")
    {
        removeto(element);
    }

    localStorage.setItem("storeitem",JSON.stringify(LIST));
});
