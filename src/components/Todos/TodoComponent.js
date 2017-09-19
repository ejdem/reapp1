import React from 'react';
import TodosList from 'components/Todos/TodosList';
import TodoForm  from 'components/Todos/TodoForm';


const todos = [
  {
    id: 0,
    text: "go to shop",
    asignee: 'Adam',
    priority: 1,
    done: true
  },
  {
    id: 1,
    text: "clean room",
    asignee: 'Lena',
    priority: 1,
    done: false
  },
  {
    id: 2,
    text: "call mother",
    asignee: 'Adam',
    priority: 3,
    done: false
  }
]

class TodoComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos,
      todo: {},
      todoText: '',
      todoAsignee: '',
      todoPriority: 0
    }
    this.addTodo = this.addTodo.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.handleTodoText = this.handleTodoText.bind(this);
    this.handleTodoAsignee = this.handleTodoAsignee.bind(this);
  }
  addTodo(event){
    event.preventDefault();
    let todo = {
      id: this.state.todos.length+1,
      text: this.state.todoText,
      asignee: this.state.todoAsignee,
      done: false
    }
    this.setState({
      todos: [...this.state.todos, todo],
      todoText: '',
      todoAsignee: ''
    });
  }
  handleTodoText(event){
    let todoText = '';
    todoText = event.target.value;
    this.setState({todoText});
  }
  handleTodoAsignee(event){
    let todoAsignee = event.target.value;
    this.setState({todoAsignee});
  }
  toggleState(todoId){
    todos[todoId].done = !todos[todoId].done;
    this.setState(todos: todos);
  }
  render(){
    const { todos, todoText, todoAsignee, todoPriority } = this.state;
    return(
    <div className="container">
      <div className="row">
        <div className="col m12">
          <TodosList todos={todos}
                     toggleState={this.toggleState} />
        </div>
      </div>
      <div className="row">
        <div className="col m12">
          <TodoForm addTodo={this.addTodo}
                    handleTodoText={this.handleTodoText}
                    handleTodoAsignee={this.handleTodoAsignee}
                    todoPriority={todoPriority}
                    todoText={todoText}
                    todoAsignee={todoAsignee}/>
        </div>
      </div>
    </div>
    )
  }
}

export default TodoComponent;
