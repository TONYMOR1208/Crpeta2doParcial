"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const registro_resolver_1 = require("./registro.resolver");
const registro_service_1 = require("./registro.service");
const registro_entity_1 = require("./entities/registro.entity");
const palabra_entity_1 = require("../palabra/entities/palabra.entity");
const idioma_entity_1 = require("../idioma/entities/idioma.entity");
let RegistroModule = class RegistroModule {
};
exports.RegistroModule = RegistroModule;
exports.RegistroModule = RegistroModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([registro_entity_1.Registro, palabra_entity_1.Palabra, idioma_entity_1.Idioma])],
        providers: [registro_service_1.RegistroService, registro_resolver_1.RegistroResolver],
        exports: [typeorm_1.TypeOrmModule, registro_service_1.RegistroService],
    })
], RegistroModule);
//# sourceMappingURL=registro.module.js.map