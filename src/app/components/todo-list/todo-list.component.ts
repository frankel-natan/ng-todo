import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/modulese/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy{


  public Todos: ITodo[] = [];

  private Subscription: Subscription = new Subscription();

  constructor(private TodoService:TodoService) {

  }
  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.Subscription.add(
      this.TodoService.getTodo().subscribe(d => {
        this.Todos = d;
      })
    )
  }

}
