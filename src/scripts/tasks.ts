const taskBtn =document.getElementById("task-btn");
const formField = document.getElementById("task-form");
taskBtn?.addEventListener('click', ()=>{
   formField?.classList.toggle("active");
})