import React from 'react';
import Select from 'react-select';

const TodoForm = ({ addTodo,
                    handleTodoText,
                    handleTodoAsignee,
                    todoText,
                    todoPriority,
                    todoAsignee}) => {
  return(
      <div className="row">
        <form onSubmit={addTodo}>
          <TextTodoInput todoText={todoText}
                         handleTodoText={handleTodoText} />
          <AssigneeTodoSelect todoAsignee={todoAsignee}
                        handleTodoAsignee={handleTodoAsignee} />
          <PriorityTodoRange  />
          <SubmitButton />
        </form>
      </div>
  )
}
const TextTodoInput = ({todoText, handleTodoText}) => {
  return(
    <div className="col s6">
      <div className="input-field">
        <i className="material-icons prefix">assignment</i>
        <input type="text"
                name="title"
                value={todoText}
                onChange={handleTodoText}/>
        <label>Todo</label>
      </div>
    </div>
  )
}
const SubmitButton = () => {
  const buttonClass = 'btn btn-floating btn-small waves-effect waves-light valign-bottom';
  const icon = <i className="material-icons">add</i>;
  return(
    <div className="col s1">
      <div className="input-field">
        <button type="submit"
                className={buttonClass}>{icon}</button>
      </div>
    </div>
  )
}
const AssigneeTodoSelect = ({todoAsignee, handleTodoAsignee}) => {
  return(
    <div className="col s3 inline">
      <div onChange={handleTodoAsignee}>
        <label>Asignee</label>
        <p>
          <input type="radio" name="groupasignee" id="radiolena" value="Lena"/>
          <label htmlFor="radiolena">Lena</label>
          <input type="radio" name="groupasignee" id="radioadam" value="Adam"/>
          <label htmlFor="radioadam">Adam</label>
        </p>
      </div>
    </div>
  )
}

const PriorityTodoRange = () =>{
  return(
    <div className="col s2">
      <div className="input-field">
        <input type="number"
               name="priority"
               min="0"
               max="6"/>
        <label>priority</label>
      </div>
    </div>
  )
}
export default TodoForm;
