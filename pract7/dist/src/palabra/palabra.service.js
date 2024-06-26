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
exports.PalabraService = void 0;
const common_1 = require("@nestjs/common");
const palabra_entity_1 = require("./entities/palabra.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let PalabraService = class PalabraService {
    constructor(PalabraRepository) {
        this.PalabraRepository = PalabraRepository;
    }
    async create(createPalabraInput) {
        const newPalabra = this.PalabraRepository.create(createPalabraInput);
        return await this.PalabraRepository.save(newPalabra);
    }
    async findAll(estado) {
        const wherecondition = estado === 'todos' ? {} : { estado };
        return this.PalabraRepository.find({ where: wherecondition });
    }
    async findOne(id) {
        return this.PalabraRepository.findOneBy({ id: id });
    }
    async update(id, updatePalabra) {
        await this.PalabraRepository.update(id, updatePalabra);
        return this.PalabraRepository.findOneBy({ id: id });
    }
    async remove(id) {
        await this.PalabraRepository.update(id, { estado: 'eliminado' });
        return this.PalabraRepository.findOneBy({ id: id });
    }
};
exports.PalabraService = PalabraService;
exports.PalabraService = PalabraService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(palabra_entity_1.Palabra)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PalabraService);
//# sourceMappingURL=palabra.service.js.map