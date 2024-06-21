import { PartialType } from '@nestjs/mapped-types';
import { CreateIdiomaDto} from './create-idiomas.dto';

export class UpdateIdiomaDto extends PartialType(CreateIdiomaDto) {}
