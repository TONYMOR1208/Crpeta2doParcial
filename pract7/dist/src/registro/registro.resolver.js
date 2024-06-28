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
exports.RegistroResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const registro_service_1 = require("./registro.service");
const registro_entity_1 = require("./entities/registro.entity");
const create_registro_input_1 = require("./dto/create-registro.input");
const update_registro_input_1 = require("./dto/update-registro.input");
let RegistroResolver = class RegistroResolver {
    constructor(registroService) {
        this.registroService = registroService;
    }
    createRegistro(createRegistroInput) {
        return this.registroService.create(createRegistroInput);
    }
    findAll() {
        return this.registroService.findAll();
    }
    findOne(id) {
        return this.registroService.findOne(id);
    }
    updateRegistro(updateRegistroInput) {
        return this.registroService.update(updateRegistroInput.id, updateRegistroInput);
    }
    removeRegistro(id) {
        return this.registroService.remove(id);
    }
};
exports.RegistroResolver = RegistroResolver;
__decorate([
    (0, graphql_1.Mutation)(() => registro_entity_1.Registro),
    __param(0, (0, graphql_1.Args)('createRegistroInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_registro_input_1.CreateRegistroInput]),
    __metadata("design:returntype", void 0)
], RegistroResolver.prototype, "createRegistro", null);
__decorate([
    (0, graphql_1.Query)(() => [registro_entity_1.Registro], { name: 'registro' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegistroResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => registro_entity_1.Registro, { name: 'registro' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RegistroResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => registro_entity_1.Registro),
    __param(0, (0, graphql_1.Args)('updateRegistroInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_registro_input_1.UpdateRegistroInput]),
    __metadata("design:returntype", void 0)
], RegistroResolver.prototype, "updateRegistro", null);
__decorate([
    (0, graphql_1.Mutation)(() => registro_entity_1.Registro),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RegistroResolver.prototype, "removeRegistro", null);
exports.RegistroResolver = RegistroResolver = __decorate([
    (0, graphql_1.Resolver)(() => registro_entity_1.Registro),
    __metadata("design:paramtypes", [registro_service_1.RegistroService])
], RegistroResolver);
//# sourceMappingURL=registro.resolver.js.map