import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registro } from 'src/registros/entities/registros.entity';
import { CreateRegistroDto } from './dto/create-registros.dto';

@Injectable()
export class RegistroService {
  constructor(
    @InjectRepository(Registro)
    private registroRepository: Repository<Registro>,
  ) {}

  async create(createRegistroDto: CreateRegistroDto): Promise<any> {
    const { idiomaId, palabraId, deletreo, silabas, fonetica, estado } = createRegistroDto;
    
    const registro = new Registro();
    registro.idioma = { id: idiomaId } as any;
    registro.palabra = { id: palabraId } as any;
    registro.deletreo = deletreo;
    registro.silabas = silabas;
    registro.fonetica = fonetica;
    registro.estado = estado;

    return await this.registroRepository.save(registro);
  }

  async findAll(): Promise<any[]> {
    const registros = await this.registroRepository.find();
    return registros.map(registro => this.toResponseDto(registro));
  }

  async findOne(id: number): Promise<any> {
    const registro = await this.registroRepository.findOne({ where: { id } });
    if (!registro) {
      throw new NotFoundException(`Registro con id ${id} no encontrado`);
    }
    return this.toResponseDto(registro);
  }

  async update(id: number, updateRegistroDto: Partial<CreateRegistroDto>): Promise<any> {
    const registro = await this.registroRepository.findOne({ where: { id } });
    if (!registro) {
      throw new NotFoundException(`Registro con id ${id} no encontrado`);
    }
    
    // Update properties if they exist in the DTO
    if (updateRegistroDto.idiomaId) {
      registro.idioma = { id: updateRegistroDto.idiomaId } as any;
    }
    if (updateRegistroDto.palabraId) {
      registro.palabra = { id: updateRegistroDto.palabraId } as any;
    }
    if (updateRegistroDto.deletreo) {
      registro.deletreo = updateRegistroDto.deletreo;
    }
    if (updateRegistroDto.silabas) {
      registro.silabas = updateRegistroDto.silabas;
    }
    if (updateRegistroDto.fonetica) {
      registro.fonetica = updateRegistroDto.fonetica;
    }
    if (updateRegistroDto.estado) {
      registro.estado = updateRegistroDto.estado;
    }
    
    await this.registroRepository.save(registro);
    return this.toResponseDto(registro);
  }

  async remove(id: number): Promise<any> {

    await this.registroRepository.update(id, { estado: 'eliminado' });
  
  
    const registro = await this.registroRepository.findOne({
      where: { id },
      relations: ['idioma', 'palabra']
    });
  
    // Devolver el DTO de respuesta
    return this.toResponseDto(registro);
  }
  private toResponseDto(registro: Registro): any {
    return {
      id: registro.id,
      deletreo: registro.deletreo,
      silabas: registro.silabas,
      fonetica: registro.fonetica,
      estado: registro.estado,
      idiomaId: registro.idioma ? registro.idioma.id : null,
      palabraId: registro.palabra ? registro.palabra.id : null,
    };
  }
}
  