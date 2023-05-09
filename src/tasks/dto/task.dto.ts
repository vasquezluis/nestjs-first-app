// * archivo para la validacion del body para el controller

import { TaskStatus } from '../task.entity';

export class CreateTaskDto {
  title: string;
  description: string;
}

// -> el ? es para hacerle saber a TS que puede llegar el dato o no
export class UpdateTaskDto {
  title?: string;
  description?: string;
  status?: TaskStatus;
}
