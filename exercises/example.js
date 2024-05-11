class appToDoList { todos = //[ { description: 'fare la spesa',
            status: true/false, id:1233// } ];// addTodo(todoName){ this.todos =
            [ ...this.todos, { {description: todoName, status: false,
            id:Math.random() }, ]; } removeTodo(idTodo){ function onFilter(todo)
            { if (idTodo !== todo.id) return true; else return false;} }
            makeTodoAsDone(idTodo){} updateTodo(idTodo, newDescription){} const
            newTodos = this.todos.filter(onFilter); this.todos = [...newTodos];}
            }