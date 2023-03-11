let inputTasks = document.getElementById('taskList');
let btn = document.getElementById('submitBtn');
let todoContainer = document.getElementById('tasks')

btn.addEventListener('click', function(){
    if(inputTasks.value == ""){
        console.log("You must write something");
    }else{
        var para = document.createElement('p');
        para.innerText = inputTasks.value;
        todoContainer.appendChild(para);
        inputTasks.value = ""
    }

    para.addEventListener('click', function(){
        para.classList.toggle('para-strike');
    })

    para.addEventListener('dblclick', function(){
        todoContainer.removeChild(para);
    })
})