import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from '../../modules/entities/student.entity';
import { StudentsService } from '../../modules/services/students.service';
import { StudentsController } from '../../modules/controllers/students.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentsService],
  controllers: [StudentsController],
  exports: [StudentsService, TypeOrmModule],
})
export class StudentsModule {}
