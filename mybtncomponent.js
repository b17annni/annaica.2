const template = document.createElement('template');
template.innerHTML = `
<style>
  .btn {
    background-color: rgb(38, 49, 49);
    color: rgb(222, 232, 240); 
    padding: 10px 20px;
  }

  .btn:hover {
    background-color: rgb(222, 232, 240); 
    color: rgb(38, 49, 49);

  }

</style>
<section class="btn-component">
  <span class="btn"> Main </span>
</section>`;

class MyButton extends HTMLElement{
 constructor(){
     super();
     this.attachShadow({ mode: 'open'});
     this.shadowRoot.appendChild(template.content.cloneNode(true));
     this.shadowRoot.querySelector('span').onclick = () => {
       window.location.href = '../index.html'
     }
 } 
  
}
window.customElements.define('btn-component', MyButton);