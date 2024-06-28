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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Palabra = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const idioma_entity_1 = require("../../idioma/entities/idioma.entity");
const registro_entity_1 = require("../../registro/entities/registro.entity");
let Palabra = class Palabra {
};
exports.Palabra = Palabra;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Palabra.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Palabra.prototype, "palabra", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Palabra.prototype, "deletreo", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Palabra.prototype, "silabas", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Palabra.prototype, "fonetica", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Palabra.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => idioma_entity_1.Idioma, idioma => idioma.registros),
    (0, graphql_1.Field)(() => idioma_entity_1.Idioma),
    __metadata("design:type", idioma_entity_1.Idioma)
], Palabra.prototype, "idioma", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => registro_entity_1.Registro, registro => registro.palabra),
    (0, graphql_1.Field)(() => [registro_entity_1.Registro]),
    __metadata("design:type", Array)
], Palabra.prototype, "registros", void 0);
exports.Palabra = Palabra = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'palabra' })
], Palabra);
//# sourceMappingURL=palabra.entity.js.map