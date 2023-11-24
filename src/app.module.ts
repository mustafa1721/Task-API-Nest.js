import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task.module';
import { TeamModule } from './team.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mustafa:admin@atlascluster.hmu5mlh.mongodb.net/?retryWrites=true&w=majority',
    ),
    TaskModule,
    TeamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
