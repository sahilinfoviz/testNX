"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const patientControler_1 = __importDefault(require("../controller/patientControler"));
class PatientRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post('', patientControler_1.default.create);
        this.router.patch('/:id', patientControler_1.default.update);
        this.router.delete('/:id', patientControler_1.default.delete);
        this.router.get('', patientControler_1.default.findAll);
        this.router.get('/:id', patientControler_1.default.findById);
    }
}
exports.default = new PatientRoutes().router;
