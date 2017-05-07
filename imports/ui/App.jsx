import React, { Component } from 'react';
 
import Task from './Task.jsx';
import EpubPreviewer from './epubPreviewer.jsx';
 
// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }
 
  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  getEbooks() {
    return [
      { _id: 1, url: 'This is book 1' },
      { _id: 2, url: 'This is book 2' },
      { _id: 3, url: 'This is book 3' },
    ];
  }  
  renderEBooks(){
	return this.getEbooks().map((ebook) => (
      <EpubPreviewer key={ebook._id} ebook={ebook} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
 
        <ul>
		  {this.renderEBooks()}
          {this.renderTasks()}
        </ul>		
      </div>
    );
  }
}