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
exports.PatientService = void 0;
const Patient_1 = require("../../models/Patient");
class PatientService {
    //! For registering a single patient info
    save(patient) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Patient_1.Patient.create({
                    name: patient.name,
                    age: patient.age,
                });
            }
            catch (error) {
                throw new Error("❌ Failed to create patient!");
            }
        });
    }
    //! For updating a single patient info with id
    update(patient) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_patient = yield Patient_1.Patient.findOne({
                    where: {
                        id: patient.id,
                    },
                });
                if (!new_patient) {
                    throw new Error("Note not found!");
                }
                new_patient.name = patient.name;
                new_patient.age = patient.age;
                yield new_patient.save();
            }
            catch (error) {
                throw new Error("❌ Failed to update patient!");
            }
        });
    }
    //! For deleting a single patient info with id
    delete(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_patient = yield Patient_1.Patient.findOne({
                    where: {
                        id: patientId,
                    },
                });
                if (!new_patient) {
                    throw new Error("❌ Patient not found!");
                }
                yield new_patient.destroy();
            }
            catch (error) {
                throw new Error("❌ Failed to delete patient data!");
            }
        });
    }
    //! For retrieving a single patient info with id
    retrieveById(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_patient = yield Patient_1.Patient.findOne({
                    where: {
                        id: patientId,
                    },
                });
                if (!new_patient) {
                    throw new Error("❌ Patient not found!");
                }
                return new_patient;
            }
            catch (error) {
                throw new Error("❌ Failed to retrieve patient information!");
            }
        });
    }
    //! For retrieving all patient list
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Patient_1.Patient.findAll();
            }
            catch (error) {
                throw new Error("❌ Failed to retrieve patient list!");
            }
        });
    }
}
exports.PatientService = PatientService;
