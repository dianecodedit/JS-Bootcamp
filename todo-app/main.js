const todos = [{
    text:"Order cat food",
    completes:false
},{
    text:"clean bedroom",
    completed:true
},{
    text:"vaccum",
    completed:true
}]

todos.forEach(function(todo){
    if(todo.completed ==false) {
        const todoParagraph = document.createElement("p")

        todoParagraph.textContent = todo.text

        document.querySelector("body").appendChild(todoParagraph)
    }
})


