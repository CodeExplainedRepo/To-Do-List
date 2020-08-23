class AddToDoComponent extends HTMLElement {
  constructor(){
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.close = this.close.bind(this);
    }

  connectedCallback() {
    const template = document.createElement('template');
    template.innerHTML = `<style>
    @import '../css/font-awesome.css';
      @import '../css/style.css';
    </style>
    
    <div class="add-to-do">
    <i class="fa fa-plus-circle"></i>
    <input type="text" id="input" placeholder="Add a to-do">
</div>`;
let LIST, id;
let data = localStorage.getItem("TODO");
   
const list1 = this.shadowRoot.getElementById('list');
      if(data){
        LIST = JSON.parse(data);
        id = LIST.length; // set the id to the last one in the list
        //this.loadList(LIST, list); // load the list to the user interface
    }else{
        // if data isn't empty
        LIST = [];
        id = 0;
    }
    this.shadowRoot.appendChild(template.content.cloneNode('true'));
  
    this.shadowRoot.querySelector('input').addEventListener('keyup', this.addToDoItem.bind(event,LIST, list1, id));
 }

  disconnectedCallback() {
    this.shadowRoot.querySelector('input').removeEventListener('keyup', this.addToDoItem.bind(event,LIST, id));
 }

 addToDoItem(LIST,list1, id, event){

    const input = event.target;
    if(event.keyCode == 13){
      const toDo = input.value;
      
      // if the input isn't empty
      if(toDo){
        if(false){ return; }
    
        const DONE = false ? CHECK : UNCHECK;
        const LINE = false ? LINE_THROUGH : "";
        
        const item = `<li class="item">
                        <i class="fa ${DONE} co" job="complete" id=1></i>
                        <p class="text ${LINE}">${toDo}</p>
                        <i class="fa fa-trash-o de" job="delete" id=1></i>
                      </li>
                    `;
        
        const position = "beforeend";
        
        //list1.insertAdjacentHTML(position, item);
          
          LIST.push({
              name : toDo,
              id : id,
              done : false,
              trash : false
          });
          
          // add item to localstorage ( this code must be added where the LIST array is updated)
          localStorage.setItem("TODO", JSON.stringify(LIST));
          
          id++;
      }
      input.value = "";
  }
  }
  addToDo(toDo, id, done, trash){
    
    if(false){ return; }
    
    const DONE = false ? CHECK : UNCHECK;
    const LINE = false ? LINE_THROUGH : "";
    
    const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id=1></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id=1></i>
                  </li>
                `;
    
    const position = "beforeend";
    
    list.insertAdjacentHTML(position, item);
};

  close() {
    if (this.open !== false) {
      this.open = false;
    }
    const closeEvent = new CustomEvent('dialog-closed');
    this.dispatchEvent(closeEvent);
  }
}
    
window.customElements.define('add-component', AddToDoComponent);
