// CODE EXPLAINED channel
const refresh = document.querySelector("[data-js=refresh]");
const date = document.querySelector("[data-js=date]");
const inputField = document.querySelector("[data-js=input-field]");
const list = document.querySelector("[data-js=list]");

//class names
const CHECKED = "fa-check-circle";
const UNCHECKED = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Variables
let LIST;
let id;

//get items from localStorage 
let data = localStorage.getItem("TODO");

//Check whether data is available here
if(data){
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
}else {
    LIST = [];
    id = 0;
}

//LoadList Func
function loadList(LIST){
    LIST.forEach(item => {
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

//store data into localStorage
//This func should be added into any funcs that will update LIST data
localStorage.setItem("TODO", JSON.stringify(LIST));

//load data function


//show Date
const today = new Date();
const options = {weekday:"long", month: "short", day: "numeric" };
date.innerHTML = today.toLocaleDateString("en-US",options);

//Add to do func
function addToDo(todo, id, done, trash){
    if(trash){return ;}
    const DONE = done ? CHECKED : UNCHECKED;
    const LINE = done ? LINE_THROUGH : "";
    const item = `
        <li class="item">
            <i class="fa ${DONE} co" job="complete" id=${id}></i>
            <p class="text ${LINE}">${todo}</p>
            <i class="fa fa-trash-o de" job="trash" id=${id}></i>
        </li>
    `;
    const position = 'beforeend';
    list.insertAdjacentHTML(position, item);
    // inputField.value="";
}
// addToDo("Coffee", 1, false, false);

//Add an item into the list using Enter Key
document.addEventListener("keyup", event => {
    console.log(event.key);
    console.log(event.code);

    if(event.key === "Enter"){
        const toDo = inputField.value;
        if(toDo){
            addToDo(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            })
            localStorage.setItem("TODO", JSON.stringify(LIST));
            id++;
        }
        inputField.value="";
    }
})

function completeToDo(element){
    element.classList.toggle(CHECKED);
    element.classList.toggle(UNCHECKED);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

function trashToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

list &&
list.addEventListener("click", e => {
    const element = e.target;
    const elementJob = element.attributes.job.value;
    if(elementJob === "complete"){
        completeToDo(element)
    }else if(elementJob === "trash"){
        trashToDo(element)
    }
    localStorage.setItem("TODO", JSON.stringify(LIST));

})

refresh &&
refresh.addEventListener("click", e => {
    localStorage.clear();
    location.reload();
})