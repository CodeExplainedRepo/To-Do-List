class ContentComponent extends HTMLElement {
  constructor(){
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      const template = document.createElement('template');
      template.innerHTML = `<style>
      @import '../css/font-awesome.css';
      @import '../css/style.css';
      </style>
      
      <div class="content">
          <ul id="list">
          </ul>
      </div>
      <add-component></add-component>`;
      this.shadowRoot.appendChild(template.content.cloneNode('true'));
      // Variables
let LIST, id;

// get item from localstorage
let data = localStorage.getItem("TODO");
const list = this.shadowRoot.getElementById('list');
      if(data){
        LIST = JSON.parse(data);
        id = LIST.length; // set the id to the last one in the list
        this.loadList(LIST, list); // load the list to the user interface
    }else{
        // if data isn't empty
        LIST = [];
        id = 0;
    }
      this.shadowRoot.getElementById('list').addEventListener('click', this.listItems.bind(event, LIST));
    }
    
    disconnectedCallback() {
      this.shadowRoot.getElementById('list').removeEventListener('click', this.listItems);
    }

    loadList(array, list){
      const CHECK = "fa-check-circle";
      const UNCHECK = "fa-circle-thin";
      const LINE_THROUGH = "lineThrough";
      array.forEach(function(item){
        if(item.trash){ return; }
      
      const DONE = item.done ? CHECK : UNCHECK;
      const LINE = item.done ? LINE_THROUGH : "";
      
      const itemToAdd = `<li class="item">
                      <i class="fa ${DONE} co" job="complete" id="${item.id}"></i>
                      <p class="text ${LINE}">${item.name}</p>
                      <i class="fa fa-trash-o de" job="delete" id="${item.id}"></i>
                    </li>
                  `;
      
      const position = "beforeend";
      
      list.insertAdjacentHTML(position, itemToAdd);
      });

    }

    
    listItems(LIST, event){
      const element = event.target; // return the clicked element inside list
      const elementJob = element.attributes.job.value; // complete or delete
      
      if(elementJob == "complete"){
        element.classList.toggle(CHECK);
        element.classList.toggle(UNCHECK);
        element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
        
        LIST[element.id].done = LIST[element.id].done ? false : true;
      
      }else if(elementJob == "delete"){
        element.parentNode.parentNode.removeChild(element.parentNode);
        
        LIST[element.id].trash = true;
      }
      
      // add item to localstorage ( this code must be added where the LIST array is updated)
      localStorage.setItem("TODO", JSON.stringify(LIST));
    }
  }
      
  window.customElements.define('content-component', ContentComponent);