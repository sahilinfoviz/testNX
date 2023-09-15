"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Patient_1 = require("../models/Patient");
const patientService_1 = require("../services/patientModule/patientService");
class patientController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body.name);
                const new_patient = new Patient_1.Patient();
                console.log(req.body.name);
                new_patient.name = req.body.name;
                new_patient.age = req.body.age;
                yield new patientService_1.PatientService().save(new_patient);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully registered new patient!",
                });
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    status: "❌ Internal Server Error!",
                    message: "❌ Internal Server Error!",
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                yield new patientService_1.PatientService().delete(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted patient!",
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "❌ Internal Server Error!",
                    message: "❌ Internal Server Error!",
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const new_patient = yield new patientService_1.PatientService().retrieveById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched patient by id!",
                    data: new_patient,
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "❌ Internal Server Error!",
                    message: "❌ Internal Server Error!",
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_patient = yield new patientService_1.PatientService().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all patient data!",
                    data: new_patient,
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "❌ Internal Server Error!",
                    message: "❌ Internal Server Error!",
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const new_patient = new Patient_1.Patient();
                new_patient.id = id;
                new_patient.name = req.body.name;
                new_patient.age = req.body.age;
                yield new patientService_1.PatientService().update(new_patient);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated patient data!",
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "❌ Internal Server Error!",
                    message: "❌ Internal Server Error!",
                });
            }
        });
    }
}
exports.default = new patientController();
