export class Todo {
  id: number = 0;
  description: string = '';
  isDone: boolean = false;
  createdAt: string = '';

  constructor(description: string) {
    this.id = Date.now();
    this.description = description;
    this.createdAt = new Date().toISOString();
  }
}
