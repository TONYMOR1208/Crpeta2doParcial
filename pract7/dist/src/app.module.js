"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const graphql_1 = require("@nestjs/graphql");
const idioma_module_1 = require("./idioma/idioma.module");
const palabra_module_1 = require("./palabra/palabra.module");
const registro_module_1 = require("./registro/registro.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const default_1 = require("@apollo/server/plugin/landingPage/default");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: false,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                plugins: [(0, default_1.ApolloServerPluginLandingPageLocalDefault)()],
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '123456',
                database: 'pruebapract7',
                autoLoadEntities: true,
                synchronize: false,
                migrations: [(0, path_1.join)(__dirname, 'migration/**/*.ts')],
                entities: [(0, path_1.join)(__dirname, '**/*.entity{.ts,.js}')],
            }),
            idioma_module_1.IdiomaModule,
            palabra_module_1.PalabraModule,
            registro_module_1.RegistroModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map