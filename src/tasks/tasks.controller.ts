import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

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

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTasks(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
    return this.tasksService.updateTasks(id, updatedFields);
  }
}
