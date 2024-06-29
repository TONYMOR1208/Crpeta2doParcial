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
exports.IdiomaService = void 0;
const common_1 = require("@nestjs/common");
const idioma_entity_1 = require("./entities/idioma.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let IdiomaService = class IdiomaService {
    constructor(IdiomaRepository) {
        this.IdiomaRepository = IdiomaRepository;
    }
    async create(createIdiomaInput) {
        const newIdioma = this.IdiomaRepository.create(createIdiomaInput);
        return await this.IdiomaRepository.save(newIdioma);
    }
    async findAll(estado) {
        const wherecondition = estado === 'todos' ? {} : { estado };
        return this.IdiomaRepository.find({ where: wherecondition });
    }
    async findOne(id) {
        return this.IdiomaRepository.findOneBy({ id: id });
    }
    async update(id, updateIdiomaDto) {
        await this.IdiomaRepository.update(id, updateIdiomaDto);
        return this.IdiomaRepository.findOneBy({ id: id });
    }
    async remove(id) {
        await this.IdiomaRepository.update(id, { estado: 'eliminado' });
        return this.IdiomaRepository.findOneBy({ id: id });
    }
};
exports.IdiomaService = IdiomaService;
exports.IdiomaService = IdiomaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(idioma_entity_1.Idioma)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IdiomaService);
//# sourceMappingURL=idioma.service.js.map