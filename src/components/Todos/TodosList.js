import React from 'react';

const TodosList = ({todos, toggleState}) => {
  const TodoNode = todos.map((todo) => {
    return(<Todo todo={todo}
                 toggleState={toggleState} />)
  })
  return(
    <span>
    <TodosHeader />
    {TodoNode}
    </span>
  )
}

const Todo = ({todo, toggleState}) => {
  // renderAlert = (todo) =>{
  //   if(todo.priority > 5){
  //     return(<i className="material-icons">alert</i>)
  //   }
  // }
  return(
    <div className="row">
      <div className="col s12">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="row" key={todo.id}>
            <div className="col m5">
              {todo.text}
            </div>
            <div className="col m3">{todo.asignee}</div>
            <div className="col m2">{todo.priority}</div>
            <div className="col m1">
              <TodoCheck todo={todo}
                         toggleState={toggleState}/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>)
}

const TodosHeader = () =>{
  return(
    <div className="card z-depth-0">
      <div className="card-content">
        <div className="col m5">Task</div>
        <div className="col m3">Asignee</div>
        <div className="col m2">Priority</div>
        <div className="col m1">State</div>
      </div>
    </div>
  )
}

const TodoCheck = ({todo, toggleState}) => {
  return(
    <form action="#">
      <input type="checkbox"
             checked={ todo.done }
             name="checkbox"
             id={`todo${todo.id}`}
             onChange={() => toggleState(todo.id)}/>
      <label htmlFor={`todo${todo.id}`}>Done</label>
    </form>
  )
}
export default TodosList;
