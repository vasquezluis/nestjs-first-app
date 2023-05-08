import { Controller, Get } from '@nestjs/common';

@Controller('tasks') // -> decorador
// * estas son las rutas
export class TasksController {
  @Get() // -> decorador para ruta get
  helloWord() {
    return 'Hello world';
  }
}
