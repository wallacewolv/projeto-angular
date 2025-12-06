import { Component, inject, input } from '@angular/core';
import { Title } from '../../components/shared/title/title';
import { TodosService } from '../../services/todos.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-todos',
  imports: [Title, MatIcon],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  readonly todosService = inject(TodosService);

  addTodo(event: Event) {
    event.preventDefault();

    const inputElement = event.target as HTMLInputElement;

    const title = inputElement.value.trim();

    if (!title) return;

    this.todosService.add(title);
    inputElement.value = '';
  }
}
