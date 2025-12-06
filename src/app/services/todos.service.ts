import { Injectable, signal } from '@angular/core';
import type { Todo } from '../model/todo.entity';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly _items = signal<Array<Todo>>([
    { id: crypto.randomUUID(), title: 'Implementar App Mobile', completed: false },
    { id: crypto.randomUUID(), title: 'Estudar Angular Avançado', completed: true },
    { id: crypto.randomUUID(), title: 'Revisar Código do Projeto', completed: false },
  ]);

  readonly items = this._items.asReadonly();

  add(title: string) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    this._items.update((items) => [...items, newTodo]);
  }

  toggle(id: string) {
    this._items.update((items) =>
      items.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  }

  remove(id: string) {
    this._items.update((items) => items.filter((item) => item.id !== id));
  }
}
