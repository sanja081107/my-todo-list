var taskInput = document.getElementById("newTask");
var taskList = document.getElementById("list");
var addList = document.getElementById("add");
var delList = document.getElementById("delete");

var addTask = function() {
	var listItem = document.createElement("li");
	var checkBox = document.createElement("input");
	var label = document.createElement("label");
    var butt = document.createElement("button");

    
    butt.className = "delete"
	checkBox.type = "checkbox";
	label.innerHTML = (taskInput.value);

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
    listItem.appendChild(butt);

	listItem.className = "taskList";

	//предотвращается добавление пустых задач. только если кто-то вводит задачу, оно должна быть добавлена.
	if (taskInput.value) {
		taskList.insertBefore(listItem, taskList.firstChild);
	} else {
		alert("please enter a task");
	}
	
	//после добавления задачи поле ввода должно быть пустым
	taskInput.value = "";

	//добавление отметки события в флажок, чтобы всякий раз, когда он //отмечен, задача удаляется 
	checkBox.addEventListener("click", textDecoration);
    butt.addEventListener("click", deleteItem);
};


function deleteTask(){
    var cd = document.getElementsByTagName('input'),
        L = cd.length;
        console.log(L);
                
    for(var i=0; i<L; i++){
            if (cd[i].checked){
                var listItem = cd[i].parentNode;
                var ul = listItem.parentNode;
                //удалить элемент родительского списка из ul
                ul.removeChild(listItem);
                i--;
            }
    }       
};

var textDecoration = function() {
        var cd = document.getElementsByTagName('input'),
        L = cd.length;
        console.log(L);
                
    for(var i=0; i<L+1; i++){
            if (cd[i].checked){
                var listItem = cd[i].parentNode;
                var ul = listItem.parentNode;
                listItem.style.cssText = 'text-decoration: line-through;';
                } else{
                var listItem = cd[i].parentNode;
                var ul = listItem.parentNode;
                listItem.style.cssText = 'text-decoration: none;';
                }
        
    } 
};

var deleteItem = function() {

	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	//remove the parent list item from ul
	ul.removeChild(listItem);
};



// Получаем ссылку на текстовое поле, изменение которого будем отслеживать. (не работает)
var field = document.getElementsByTagName('input');

for(var i=0; i<field.length; i++){
            // Проверяем наличие значения 'autosave'
            if (localStorage.getItem("autosave")) {
            // Восстанавливаем содержимое текстового поля
              listItem = localStorage.getItem("autosave");
            }
    
            var listItem = field[i].parentNode;
            var ul = listItem.parentNode;
            // сохраняем в объект storage
            localStorage.setItem("autosave", listItem);
                    
} 


addList.addEventListener("click", addTask, false);
delList.addEventListener("click", deleteTask, false);