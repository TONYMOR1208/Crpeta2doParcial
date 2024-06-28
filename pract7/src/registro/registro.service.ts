import { Injectable } from '@nestjs/common';
import { CreateRegistroInput } from './dto/create-registro.input';
import { UpdateRegistroInput } from './dto/update-registro.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registro } from './entities/registro.entity';

@Injectable()
export class RegistroService {
constructor(
  @InjectRepository(Registro)
  private readonly  RegistroRepository: Repository<Registro> 
) {}

async create(createRegistroInput: CreateRegistroInput): Promise<Registro> {
  const Registro =await this.RegistroRepository.create(
    { ...createRegistroInput,
      idioma: { id: createRegistroInput.idiomaId },
      palabra: { id: createRegistroInput.palabraId },
    });

    const {id}= await this.RegistroRepository.save(Registro);
    return await this.findOne(id);
  }

  async findAll(estado:string): Promise<Registro[]> {
    const wherecondition = estado=== 'todos' ? {} : {estado};
    return this.RegistroRepository.find({where: wherecondition});
  }


  async findOne(id: number) {
    return this.RegistroRepository.findOne({where:{id}});
  } 

  async update(id: number, updateRegistroInput: UpdateRegistroInput) {
    const update= await this.RegistroRepository.preload(updateRegistroInput);
    return await this.RegistroRepository.save(update);
  }

  async remove(id: number) {
    const deleted =await this.RegistroRepository.findOneBy({id});
    if(deleted){
      throw new Error(`Respuesta #${id} not found`);
    }

await this.RegistroRepository.delete(id);
return deleted;
  }

}
