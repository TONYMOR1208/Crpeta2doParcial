"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const path_1 = require("path");
const idioma_entity_1 = require("./src/idioma/entities/idioma.entity");
const palabra_entity_1 = require("./src/palabra/entities/palabra.entity");
const registro_entity_1 = require("./src/registro/entities/registro.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'MIGRACIONTYPEORM',
    entities: [idioma_entity_1.Idioma, palabra_entity_1.Palabra, registro_entity_1.Registro],
    migrations: [(0, path_1.join)(__dirname, 'src/migration/**/*.ts')],
    synchronize: false,
});
//# sourceMappingURL=ormconfig.js.map