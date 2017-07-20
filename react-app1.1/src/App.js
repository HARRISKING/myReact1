import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import 'normalize.css';
import './reset.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newTodo: "",
      todoList: [
        {id:1,title:'第一个代办'},
        {id:2,title:'第二个代办'}
      ]
    }
  }



  render() {
    let todos = this.state.todoList.map((item,index)=>{
      return <TodoItem todo={item} />
    })


    return (
      <div className="App">
        <h1>事项清单</h1>
        <div className='inputWrapper'>
          <TodoInput content={this.state.newTodo} />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}

export default App;
