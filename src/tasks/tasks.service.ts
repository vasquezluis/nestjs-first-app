import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 as uuid } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable() // -> decorador, injectable porque se puede inyectar en otras partes de la aplicacion
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'first task',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
  ];

  // * metodo para obtener el array de tareas
  getAllTasks() {
    return this.tasks;
  }

  // * metodo para crear tareas, los parametros del metodo vienen del controlador
  createTasks(title: string, description: string) {
    // * el id viene de uuid y el status a travez del ENUM
    const task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.PENDING,
    };

    // * insertar la tarea nueva al array existente
    this.tasks.push(task);

    // * despues de haber creado la tarea nueva
    return task;
  }

  deleteTasks(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  updateTasks(id: string, updatedFields: UpdateTaskDto): Task {
    const taskFound = this.getTaskById(id);

    const newTask = Object.assign(taskFound, updatedFields);

    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));

    return newTask;
  }
}
