"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.get('/', controllers_1.getAllPalabras);
router.get('/:id', controllers_1.getPalabraById);
router.post('/', controllers_1.createPalabra);
router.put('/:id', controllers_1.updatePalabra);
router.delete('/:id', controllers_1.deletePalabra);
exports.default = router;
