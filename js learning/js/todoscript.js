console.log("JS Loading started...")
let buttonEvent = document.getElementById("submitButton");
let todoContentListElement = document.getElementById("todoContentList")
let todoListContentElement = document.getElementById("todolistcontent")

let browserLocalStorage = window.localStorage;
// Ensure that the todoList is initialized correctly with an empty array if it's not set or invalid
if (!browserLocalStorage.getItem("todoList") || !isValidJson(browserLocalStorage.getItem("todoList"))) {
    browserLocalStorage.setItem("todoList", JSON.stringify([]));  // Initialize with an empty array
}

// Function to check if a string is valid JSON
function isValidJson(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}

if(JSON.parse(browserLocalStorage.getItem("todoList")).length > 0) {
    let arr = JSON.parse(browserLocalStorage.getItem("todoList"));
    updateTodoListUI(arr);
}else{
    todoListContentElement.innerHTML = "No Data Added";
    console.log("No Data Found")
}

buttonEvent.addEventListener("click",function(event){
    let inputDataTextValue = document.getElementById("textInputData").value;
    event.preventDefault();
    console.log(inputDataTextValue);
    let arr = JSON.parse(browserLocalStorage.getItem("todoList"));
    arr.push(inputDataTextValue);
    browserLocalStorage.setItem("todoList",JSON.stringify(arr));
    console.log("data added");
    updateTodoListUI(arr);
    document.getElementById("textInputData").value = "";
    }
);

function createElement(tag, classList = "", id ="",value =""){
    const element = document.createElement(tag);
    if(classList) element.classList = classList;
    if(id) element.id = id;
    if(value) element.textContent = value;
    return element;
}

// Function to update the UI with the current todo list
function updateTodoListUI(todoList) {
    todoListContentElement.innerHTML = "";
    todoList.forEach(function(task,index){
         // Iterating the todoList
         const newDiv = createElement("div","listtasks");
         const newListItem = createElement("p","","",task);
            newDiv.appendChild(newListItem);//set the paragraph to parent div
            const button = createElement("button","deleteBtn","","Delete");
            newDiv.appendChild(button); //Add the button to the parent div tag
            todoListContentElement.appendChild(newDiv); //Add the parent div to the main div
            button.addEventListener("click",function(){
                todoList.splice(index,1);
                browserLocalStorage.setItem("todoList", JSON.stringify(todoList));
                console.log("Event Called")
                updateTodoListUI(todoList);
            })
    })
}




