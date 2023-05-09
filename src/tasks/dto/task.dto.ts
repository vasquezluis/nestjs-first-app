// * archivo para la validacion del body para el controller

import { TaskStatus } from '../task.entity';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsOptional,
  IsIn,
} from 'class-validator';

export class CreateTaskDto {
  @IsString() // -> decorador para validar el tipo de dato
  @IsNotEmpty()
  @MinLength(3)
  title: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  description: string;
}

// -> el ? es para hacerle saber a TS que puede llegar el dato o no
export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING]) // -> para validar un enum, puede venir del entity
  status?: TaskStatus;
}
