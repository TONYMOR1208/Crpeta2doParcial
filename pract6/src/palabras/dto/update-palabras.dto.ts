import { PartialType } from '@nestjs/mapped-types';
import { CreatePalabraDto} from './create-palabras.dto';

export class UpdatePalabraDto extends PartialType(CreatePalabraDto) {}
