import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/task.dto';

@Controller('tasks') // -> decorador
// * estas son las rutas
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get() // -> decorador para ruta get
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  // -> @Body ayuda a obtener el body de la peticion http
  // -> se le coloca un bombre (newTask) y el tipo (<any>)
  // * DTO -> Data Transfer Object (para validar lo que esta llegando)
  createTask(@Body() newTask: CreateTaskDto) {
    // * usar el servicio para agregar una tarea, recibe 2 parametros
    // * retornar la respuesta de createTasks
    return this.tasksService.createTasks(newTask.title, newTask.description);
  }
}
