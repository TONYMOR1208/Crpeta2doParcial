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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const registro_entity_1 = require("./entities/registro.entity");
let RegistroService = class RegistroService {
    constructor(RegistroRepository) {
        this.RegistroRepository = RegistroRepository;
    }
    async create(createRegistroInput) {
        const Registro = await this.RegistroRepository.create({ ...createRegistroInput,
            idioma: { id: createRegistroInput.idiomaId },
            palabra: { id: createRegistroInput.palabraId },
        });
        const { id } = await this.RegistroRepository.save(Registro);
        return await this.findOne(id);
    }
    async findAll() {
        return this.RegistroRepository.find();
    }
    async findOne(id) {
        return this.RegistroRepository.findOne({ where: { id } });
    }
    async update(id, updateRegistroInput) {
        const update = await this.RegistroRepository.preload(updateRegistroInput);
        return await this.RegistroRepository.save(update);
    }
    async remove(id) {
        const deleted = await this.RegistroRepository.findOneBy({ id });
        if (deleted) {
            throw new Error(`Respuesta #${id} not found`);
        }
        await this.RegistroRepository.delete(id);
        return deleted;
    }
};
exports.RegistroService = RegistroService;
exports.RegistroService = RegistroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(registro_entity_1.Registro)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RegistroService);
//# sourceMappingURL=registro.service.js.map