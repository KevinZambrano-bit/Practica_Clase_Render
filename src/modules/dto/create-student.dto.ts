import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ example: 'Pérez' })
  @IsString()
  @IsNotEmpty({ message: 'El apellido es requerido' })
  @MaxLength(100)
  apellido: string;

  @ApiProperty({ example: 'Juan' })
  @IsString()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @MaxLength(100)
  nombre: string;

  @ApiProperty({ example: '202410101' })
  @IsString()
  @IsNotEmpty({ message: 'El código es requerido' })
  @MaxLength(20)
  codigo: string;
}
