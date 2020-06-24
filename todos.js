let lista = document.querySelector('ul');
let inputTexto = document.querySelector('input');
let botao = document.querySelector('button');

var list_todos = [];
 var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
// var todos = JSON.parse(localStorage.getItem('list_todos')) || localStorage.setItem('list_todos', []);

function renderTodos(){
    lista.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        var linkExcluir = document.createElement('a');
        var linkText = document.createTextNode(' - Excluir');
        
        linkExcluir.appendChild(linkText);
        linkExcluir.setAttribute('href','#');

        var pos = todos.indexOf(todo);
        linkExcluir.setAttribute('onclick','deleteTodos('+ pos +')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkExcluir);
        lista.appendChild(todoElement);

    }
}

renderTodos();
botao.onclick = addTodo;

function addTodo(){
    var todoText = inputTexto.value;

    todos.push(todoText);
    inputTexto.value = '';
    renderTodos();
    saveToStorage()
}


function deleteTodos(pos){
    // remove uma quantidade de items do array baseada na posição 
    todos.splice(pos,1);
    renderTodos();
    saveToStorage()
}

function saveToStorage(){
    
    localStorage.setItem('list_todos', JSON.stringify(todos));
}