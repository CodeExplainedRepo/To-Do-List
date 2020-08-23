class HeaderComponent extends HTMLElement {
  constructor(){
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      const template = document.createElement('template');
      template.innerHTML = `
      <style>
      @import '../css/font-awesome.css';
      @import '../css/style.css';
      </style>
      <div class="header">
      <div class="clear">
          <i class="fa fa-refresh"></i>
      </div>
      <div id="date"></div>
  </div>`;
  const options = {weekday : "long", month:"short", day:"numeric"};
  const today = new Date();
  
  this.shadowRoot.appendChild(template.content.cloneNode('true'));
  this.shadowRoot.querySelector('.clear').addEventListener('click', this.clearData);
  this.shadowRoot.getElementById('date').innerHTML = today.toLocaleDateString("en-US", options);
}

disconnectedCallback() {
  this.shadowRoot.querySelector('clear').removeEventListener('click', this.clearData);
}

clearData(event){
  localStorage.clear();
  location.reload();
}
  }
      
  window.customElements.define('header-component', HeaderComponent);