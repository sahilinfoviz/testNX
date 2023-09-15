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
exports.Patient = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Patient = class Patient extends sequelize_typescript_1.Model {
};
exports.Patient = Patient;
Patient.PATIENT_TABLE_NAME = 'patient';
Patient.PATIENT_ID = 'id';
Patient.PATIENT_NAME = 'name';
Patient.PATIENT_AGE = 'age';
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: Patient.PATIENT_ID
    }),
    __metadata("design:type", Number)
], Patient.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        field: Patient.PATIENT_NAME
    }),
    __metadata("design:type", String)
], Patient.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: Patient.PATIENT_AGE
    }),
    __metadata("design:type", String)
], Patient.prototype, "age", void 0);
exports.Patient = Patient = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: Patient.PATIENT_TABLE_NAME
    })
], Patient);
