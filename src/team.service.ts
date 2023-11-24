/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team, TeamDocument } from './schema/team.schema';

@Injectable()
 export class TeamService {
  
    constructor(@InjectModel(Team.name) private readonly teamModel: Model < TeamDocument > ) {}
  
    async create(createTeamDto: CreateTeamDto): Promise < TeamDocument > {
      const team = new this.teamModel(createTeamDto);
      return team.save();
    }
  
    async findAll(): Promise < TeamDocument[] > {
      return this.teamModel.find()
        .exec();
    }
  
    async findOne(id: string) {
      return this.teamModel.findById(id);
    }
  
    async update(id: string, updateTeamDto: UpdateTeamDto): Promise < TeamDocument > {
      return this.teamModel.findByIdAndUpdate(id, updateTeamDto);
    }
  
    async remove(id: string) {
      return this.teamModel.findByIdAndRemove(id);
    }

  }