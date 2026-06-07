let input=document.querySelector("#input")
const btn=document.querySelector("#add-btn")
let list=document.querySelector("#todo-list")
document.getElementById("add-btn").addEventListener("click",function(){
    if(input.value===""){
        alert("required filds can not be empty")
    }else{
        let x 
        let button
        let edit
        let span
         button=document.createElement("button")
         x=document.createElement("li")
         button.className =
"bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition";
         x.className =
"flex justify-between items-center bg-slate-100 p-3 rounded-lg shadow"
         x.addEventListener("click",function(){
            // x.classList.add("completed")
            x.classList.toggle("completed")
         })
         list.appendChild(x)
         span=document.createElement("span")
         span.textContent=input.value
         x.appendChild(span)
         button.textContent="Delete"
         button.addEventListener("click",function(){
              x.remove();
            })
            edit=document.createElement("button")
            edit.className =
"bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition";
            edit.textContent="edit"
            x.appendChild(edit)
            x.appendChild(button)
            input.value=""
        edit.addEventListener("click",function(){
            span.textContent=prompt("what do you want to edit in task")
            event.stopPropagation();
        })
   
    }
})



