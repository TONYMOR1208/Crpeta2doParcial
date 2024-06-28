"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalabraModule = void 0;
const common_1 = require("@nestjs/common");
const palabra_service_1 = require("./palabra.service");
const palabra_resolver_1 = require("./palabra.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const palabra_entity_1 = require("./entities/palabra.entity");
let PalabraModule = class PalabraModule {
};
exports.PalabraModule = PalabraModule;
exports.PalabraModule = PalabraModule = __decorate([
    (0, common_1.Module)({
        providers: [palabra_resolver_1.PalabraResolver, palabra_service_1.PalabraService],
        imports: [typeorm_1.TypeOrmModule.forFeature([palabra_entity_1.Palabra])],
        exports: [typeorm_1.TypeOrmModule],
    })
], PalabraModule);
//# sourceMappingURL=palabra.module.js.map