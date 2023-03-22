const insert = document.getElementById('insert')
window.addEventListener('keydown', (event) => {
    console.log(event);
     insert.innerHTML = 
     ` 
     
     <div class="key">
     ${event.key === '' ? ' ' : event.key}
     <small>event.key</small>
 </div>

 <div class="key">
     ${event.keyCode}
     <small>event.code</small>

 </div>

 <div class="key">
     ${event.code}
     <small> event.code</small>
 </div>
     `
    
})