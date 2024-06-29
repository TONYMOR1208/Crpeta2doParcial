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
exports.IdiomaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const idioma_service_1 = require("./idioma.service");
const idioma_entity_1 = require("./entities/idioma.entity");
const create_idioma_input_1 = require("./dto/create-idioma.input");
const update_idioma_input_1 = require("./dto/update-idioma.input");
let IdiomaResolver = class IdiomaResolver {
    constructor(idiomaService) {
        this.idiomaService = idiomaService;
    }
    createIdioma(createIdiomaInput) {
        return this.idiomaService.create(createIdiomaInput);
    }
    findAll(estado) {
        return this.idiomaService.findAll(estado);
    }
    findOne(id) {
        return this.idiomaService.findOne(id);
    }
    updateIdioma(updateIdiomaInput) {
        return this.idiomaService.update(updateIdiomaInput.id, updateIdiomaInput);
    }
    removeIdioma(id) {
        return this.idiomaService.remove(id);
    }
};
exports.IdiomaResolver = IdiomaResolver;
__decorate([
    (0, graphql_1.Mutation)(() => idioma_entity_1.Idioma),
    __param(0, (0, graphql_1.Args)('createIdiomaInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_idioma_input_1.CreateIdiomaInput]),
    __metadata("design:returntype", void 0)
], IdiomaResolver.prototype, "createIdioma", null);
__decorate([
    (0, graphql_1.Query)(() => [idioma_entity_1.Idioma], { name: 'idiomas' }),
    __param(0, (0, graphql_1.Args)('estado', { type: () => String, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IdiomaResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => idioma_entity_1.Idioma, { name: 'idioma' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], IdiomaResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => idioma_entity_1.Idioma),
    __param(0, (0, graphql_1.Args)('updateIdiomaInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_idioma_input_1.UpdateIdiomaInput]),
    __metadata("design:returntype", void 0)
], IdiomaResolver.prototype, "updateIdioma", null);
__decorate([
    (0, graphql_1.Mutation)(() => idioma_entity_1.Idioma),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], IdiomaResolver.prototype, "removeIdioma", null);
exports.IdiomaResolver = IdiomaResolver = __decorate([
    (0, graphql_1.Resolver)(() => idioma_entity_1.Idioma),
    __metadata("design:paramtypes", [idioma_service_1.IdiomaService])
], IdiomaResolver);
//# sourceMappingURL=idioma.resolver.js.map