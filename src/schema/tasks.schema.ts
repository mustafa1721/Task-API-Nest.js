/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type TaskDocument = Task & Document;
@Schema() 
export class Task {
  @Prop() TaskId: number;
  @Prop() TaskName: string;
  @Prop() TaskDescription: string;
  @Prop() DueDate: string;
  @Prop() Assignee: string;
  @Prop() Status: string;
}
export const TaskSchema = SchemaFactory.createForClass(Task);