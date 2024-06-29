import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateRegistroInput } from './dto/create-registro.input';
import { UpdateRegistroInput } from './dto/update-registro.input';
import { Registro } from './entities/registro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Idioma } from 'src/idioma/entities/idioma.entity';
import { Palabra } from 'src/palabra/entities/palabra.entity';

@Injectable()
export class RegistroService {
  constructor(
    @InjectRepository(Registro)
    private readonly registroRepository: Repository<Registro>,
    @InjectRepository(Palabra)
    private readonly palabraRepository: Repository<Palabra>,
    @InjectRepository(Idioma)
    private readonly idiomaRepository: Repository<Idioma>,
  ) {}

  async create(createRegistroDto: CreateRegistroInput): Promise<any> {
    const palabra = await this.palabraRepository.findOneBy({ id: createRegistroDto.palabraid });
    const idioma = await this.idiomaRepository.findOneBy({ id: createRegistroDto.idiomaid });

    if (!palabra || !idioma) {
      throw new NotFoundException('Palabra o Idioma no encontrada');
    }

    const registro = this.registroRepository.create({
      ...createRegistroDto,
      palabra: palabra,
      idioma: idioma,
    });

    const savedRegistro = await this.registroRepository.save(registro);
    return this.toResponseDto(savedRegistro);
  }

  async findAll(estado: string): Promise<Registro[]> {
    const whereCondition = estado === 'todos' ? {} : { estado };
    return this.registroRepository.find({ where: whereCondition });
  }

  async findOne(id: number): Promise<any> {
    const registro = await this.registroRepository.findOne({
      where: { id: id },
      relations: ['palabra', 'idioma'],
    });
    if (!registro) {
      throw new NotFoundException('Registro no encontrado');
    }
    return this.toResponseDto(registro);
  }

  async update(id: number, updateRegistroDto: UpdateRegistroInput): Promise<any> {
    const registro = await this.registroRepository.findOneBy({ id: id });

    if (!registro) {
      throw new NotFoundException('Registro no encontrado');
    }

    const palabra = await this.palabraRepository.findOneBy({ id: updateRegistroDto.palabraid });
    const idioma = await this.idiomaRepository.findOneBy({ id: updateRegistroDto.idiomaid });

    if (!palabra || !idioma) {
      throw new NotFoundException('Palabra o Idioma no encontrada');
    }

    const updatedRegistro = {
      ...registro,
      ...updateRegistroDto,
      palabra: palabra,
      idioma: idioma,
    };

    await this.registroRepository.save(updatedRegistro);
    return this.toResponseDto(updatedRegistro);
  }

  async remove(id: number): Promise<any> {
    const registro = await this.registroRepository.findOneBy({ id: id });
    if (!registro) {
      throw new NotFoundException('Registro no encontrado');
    }

    await this.registroRepository.update(id, { estado: 'eliminado' });
    const updatedRegistro = await this.registroRepository.findOne({
      where: { id: id },
      relations: ['palabra', 'idioma'],
    });
    return this.toResponseDto(updatedRegistro);
  }

  private toResponseDto(registro: Registro): any {
    return {
      id: registro.id,
      deletreo: registro.deletreo,
      silabas: registro.silabas,
      fonetica: registro.fonetica,
      estado: registro.estado,
      idioma: registro.idioma,
      palabra: registro.palabra,
    };
  }
}
