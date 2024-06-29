"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroService = void 0;
const common_1 = require("@nestjs/common");
const registro_entity_1 = require("./entities/registro.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const idioma_entity_1 = require("../idioma/entities/idioma.entity");
const palabra_entity_1 = require("../palabra/entities/palabra.entity");
let RegistroService = class RegistroService {
    constructor(registroRepository, palabraRepository, idiomaRepository) {
        this.registroRepository = registroRepository;
        this.palabraRepository = palabraRepository;
        this.idiomaRepository = idiomaRepository;
    }
    async create(createRegistroDto) {
        const palabra = await this.palabraRepository.findOneBy({ id: createRegistroDto.palabraid });
        const idioma = await this.idiomaRepository.findOneBy({ id: createRegistroDto.idiomaid });
        if (!palabra || !idioma) {
            throw new common_1.NotFoundException('Palabra o Idioma no encontrada');
        }
        const registro = this.registroRepository.create({
            ...createRegistroDto,
            palabra: palabra,
            idioma: idioma,
        });
        const savedRegistro = await this.registroRepository.save(registro);
        return this.toResponseDto(savedRegistro);
    }
    async findAll(estado) {
        const whereCondition = estado === 'todos' ? {} : { estado };
        return this.registroRepository.find({ where: whereCondition });
    }
    async findOne(id) {
        const registro = await this.registroRepository.findOne({
            where: { id: id },
            relations: ['palabra', 'idioma'],
        });
        if (!registro) {
            throw new common_1.NotFoundException('Registro no encontrado');
        }
        return this.toResponseDto(registro);
    }
    async update(id, updateRegistroDto) {
        const registro = await this.registroRepository.findOneBy({ id: id });
        if (!registro) {
            throw new common_1.NotFoundException('Registro no encontrado');
        }
        const palabra = await this.palabraRepository.findOneBy({ id: updateRegistroDto.palabraid });
        const idioma = await this.idiomaRepository.findOneBy({ id: updateRegistroDto.idiomaid });
        if (!palabra || !idioma) {
            throw new common_1.NotFoundException('Palabra o Idioma no encontrada');
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
    async remove(id) {
        const registro = await this.registroRepository.findOneBy({ id: id });
        if (!registro) {
            throw new common_1.NotFoundException('Registro no encontrado');
        }
        await this.registroRepository.update(id, { estado: 'eliminado' });
        const updatedRegistro = await this.registroRepository.findOne({
            where: { id: id },
            relations: ['palabra', 'idioma'],
        });
        return this.toResponseDto(updatedRegistro);
    }
    toResponseDto(registro) {
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
};
exports.RegistroService = RegistroService;
exports.RegistroService = RegistroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(registro_entity_1.Registro)),
    __param(1, (0, typeorm_1.InjectRepository)(palabra_entity_1.Palabra)),
    __param(2, (0, typeorm_1.InjectRepository)(idioma_entity_1.Idioma)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RegistroService);
//# sourceMappingURL=registro.service.js.map