import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {

  @Output() newTodoEvent = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(form:NgForm){
    const {inputTodo} = form.value
    const todo: Todo = {
      content: inputTodo,
      completed: false
    };

    this.newTodoEvent.emit(todo)
    form.reset()
  }

}
