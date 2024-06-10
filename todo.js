document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');
    const taskCount = document.getElementById('task-count');
    
    let totalTasks = 0;
  
    function updateTaskCount() {
        taskCount.textContent = `${totalTasks} :    Total tasks`;
    }
  
    function createTodoItem(todoText) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            li.classList.toggle('completed');
        });
  
        const span = document.createElement('span');
        span.textContent = todoText;
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.remove();
            totalTasks--;
            updateTaskCount();
        });
  
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
  
        return li;
    }
  
    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const todoItem = createTodoItem(todoText);
            todoList.appendChild(todoItem);
            todoInput.value = '';
            totalTasks++;
            updateTaskCount();
        }
    });
  
    todoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
  
    updateTaskCount();
  });
  