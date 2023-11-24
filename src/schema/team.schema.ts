/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type TeamDocument = Team & Document;

@Schema() 
export class Team {
  @Prop() TeamId: number;
  @Prop() TeamName: string;
  @Prop() TeamMembers: [{ type:string }];
}
export const TeamSchema = SchemaFactory.createForClass(Team);