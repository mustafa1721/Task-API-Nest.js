/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskDocument } from './schema/tasks.schema';

@Injectable()
 export class TaskService {
  
    constructor(@InjectModel(Task.name) private readonly taskModel: Model < TaskDocument > ) {}
  
    async create(createTaskDto: CreateTaskDto): Promise < TaskDocument > {
      const task = new this.taskModel(createTaskDto);
      return task.save();
    }
  
    async findAll(): Promise < TaskDocument[] > {
      return this.taskModel.find()
        .exec();
    }
  
    async findOne(id: string) {
      return this.taskModel.findById(id);
    }
  
    async update(id: string, updateTaskDto: UpdateTaskDto): Promise < TaskDocument > {
      return this.taskModel.findByIdAndUpdate(id, updateTaskDto);
    }
  
    async remove(id: string) {
      return this.taskModel.findByIdAndRemove(id);
    }
  }