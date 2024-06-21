import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistroDto } from './create-registros.dto';

export class UpdateRegistroDto extends PartialType(CreateRegistroDto) {}
