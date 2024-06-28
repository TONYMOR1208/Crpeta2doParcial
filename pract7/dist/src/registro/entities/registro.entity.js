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
exports.Registro = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const idioma_entity_1 = require("../../idioma/entities/idioma.entity");
const palabra_entity_1 = require("../../palabra/entities/palabra.entity");
let Registro = class Registro {
};
exports.Registro = Registro;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Registro.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Registro.prototype, "idiomaId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Registro.prototype, "palabraId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Registro.prototype, "deletreo", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Registro.prototype, "silabas", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Registro.prototype, "fonetica", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Registro.prototype, "estado", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], Registro.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], Registro.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => idioma_entity_1.Idioma, idioma => idioma.registros),
    (0, graphql_1.Field)(() => idioma_entity_1.Idioma),
    __metadata("design:type", idioma_entity_1.Idioma)
], Registro.prototype, "idioma", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => palabra_entity_1.Palabra, palabra => palabra.registros),
    (0, graphql_1.Field)(() => palabra_entity_1.Palabra),
    __metadata("design:type", palabra_entity_1.Palabra)
], Registro.prototype, "palabra", void 0);
exports.Registro = Registro = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'registro' })
], Registro);
//# sourceMappingURL=registro.entity.js.map