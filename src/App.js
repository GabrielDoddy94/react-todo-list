import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  const changeInputHandler = e => {
    setInputText(e.target.value);
  };

  const addTodoHandler = () => {
    if (inputText.trim() === '') return;

    setTodos(prevTodo => [...prevTodo, { todo: inputText }]);
    setInputText('');
  };

  const deleteTodoHandler = todoIndex => {
    const todosCopy = [...todos];
    todosCopy.splice(todoIndex, 1);

    setTodos([...todosCopy]);
  };

  return (
    <div className='Todo'>
      <h3>Todo List </h3>

      <div className='Todo__box--form'>
        <input
          className='Todo__input'
          type='text'
          onChange={e => changeInputHandler(e)}
          value={inputText}
        />
        <button className='Todo__btn--add' onClick={addTodoHandler}>
          +
        </button>
      </div>

      <ul className='Todo__list'>
        {todos.map((todo, index) => {
          return (
            <li
              key={index}
              className='Todo__item'
              onClick={() => deleteTodoHandler(index)}
            >
              {todo.todo} <button className='Todo__btn--delete'>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
