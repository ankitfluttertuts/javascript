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

// Function to update the UI with the current todo list
function updateTodoListUI(todoList) {
    // Clear the current todo list displayed
    todoListContentElement.innerHTML = "";

    // Loop through the todo list and create list items
    // todoList.forEach(function(task) {
    //     let newListItem = document.createElement("p");
    //     newListItem.textContent = task;
    //     todoListContentElement.appendChild(newListItem);
    // });

    todoList.forEach(function(task,index){
        let newDiv = document.createElement("div")
        newDiv.classList="listtasks";
            let newListItem = document.createElement("p");
            newListItem.textContent = task;
            newDiv.appendChild(newListItem);
            let button = document.createElement("button");
            button.textContent = "Delete";
            button.classList = "deleteBtn";
            newDiv.appendChild(button);
            todoListContentElement.appendChild(newDiv);
            button.addEventListener("click",function(){
                todoList.splice(index,1);
                browserLocalStorage.setItem("todoList", JSON.stringify(todoList));
                console.log("Event Called")
                updateTodoListUI(todoList);
            })
    })
}




