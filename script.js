function toDO() {
    const save = localStorage.getItem('todos')
    if (save) {
        return JSON.parse(save)
    } else {
        return []
    }
}

function todopuw(matn) {
    const mass = toDO()
    mass.push({ text: matn })
    localStorage.setItem('todos', JSON.stringify(mass))
    chizTodo(mass)
}

function tododel(index) {
    const mass = toDO()
    mass.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(mass))
    chizTodo(mass)
}
function chizTodo(mass) {
    const todoList = document.getElementById('todo-list')
    todoList.innerHTML = ''
    mass.forEach((todo, index) => {
        const item = document.createElement('div');
        item.className = 'd-flex justify-content-between align-items-center border p-2 mb-2 rounded bg-light'; // Bootstrap classes
        
        const text = document.createElement('span')
        text.textContent = todo.text

        const delet_btn = document.createElement('button')
        delet_btn.textContent = 'Delete'
        delet_btn.className = 'btn btn-danger btn-sm'
        delet_btn.onclick = function() {
            tododel(index)
        };

        item.appendChild(text)
        item.appendChild(delet_btn)
        todoList.appendChild(item)
    });
}
document.getElementById('add-todo').onclick = function() {
    const todoInput = document.getElementById('todo-input');
    const matn = todoInput.value.trim()
    if (matn) {
        todopuw(matn)
        todoInput.value = ''
    }
};

document.getElementById('clear-todos').onclick = function() {
    localStorage.removeItem('todos')
    res([])
};

res(toDO())