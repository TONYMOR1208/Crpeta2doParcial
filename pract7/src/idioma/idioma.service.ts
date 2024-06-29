import { Injectable, NotFoundException } from '@nestjs/common';
import {  CreateIdiomaInput} from './dto/create-idioma.input'; // 
import { UpdateIdiomaInput} from './dto/update-idioma.input';
import { Idioma} from './entities/idioma.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class IdiomaService {
  constructor(
    @InjectRepository(Idioma)
    private readonly  IdiomaRepository: Repository<Idioma> ,
  ) {}
  async create(createIdiomaInput: CreateIdiomaInput): Promise<Idioma> {
    const newIdioma = this.IdiomaRepository.create(createIdiomaInput);
    return await this.IdiomaRepository.save(newIdioma);
  }

 async findAll(estado:string): Promise<Idioma[]> {
    const wherecondition = estado=== 'todos' ? {} : {estado};
    return this.IdiomaRepository.find({where: wherecondition});
  }


  async findOne(id: number): Promise<Idioma> {
    return this.IdiomaRepository.findOneBy({ id: id });
  }

  async update(id: number, updateIdiomaDto: UpdateIdiomaInput): Promise<Idioma> {
    await this.IdiomaRepository.update(id, updateIdiomaDto);
    return this.IdiomaRepository.findOneBy({ id: id });
  }

  async remove(id: number): Promise<Idioma> {
    await this.IdiomaRepository.update(id, { estado: 'eliminado' });
    return this.IdiomaRepository.findOneBy({ id: id });
  }
}