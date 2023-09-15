import { Patient } from "../../models/Patient";

interface IPatientService {
  save(patient: Patient): Promise<void>;
  update(patient: Patient): Promise<void>;
  delete(patientId: number): Promise<void>;
  retrieveById(patientId: number): Promise<Patient>;
  retrieveAll(): Promise<Patient[]>;
}

export class PatientService implements IPatientService {

  //! For registering a single patient info

  async save(patient: Patient): Promise<void> {
    try {
      await Patient.create({
        name: patient.name,
        age: patient.age,
      });
    } catch (error) {
      throw new Error("❌ Failed to create patient!");
    }
  }
  
  //! For updating a single patient info with id

  async update(patient: Patient): Promise<void> {
    try {
      const new_patient = await Patient.findOne({
        where: {
          id: patient.id,
        },
      });
      if (!new_patient) {
        throw new Error("Note not found!");
      }
      new_patient.name = patient.name;
      new_patient.age = patient.age;

      await new_patient.save();
    } catch (error) {
      throw new Error("❌ Failed to update patient!");
    }
  }

  //! For deleting a single patient info with id

  async delete(patientId: number): Promise<void> {
    try {
      const new_patient = await Patient.findOne({
        where: {
          id: patientId,
        },
      });
      if (!new_patient) {
        throw new Error("❌ Patient not found!");
      }

      await new_patient.destroy();
    } catch (error) {
      throw new Error("❌ Failed to delete patient data!");
    }
  }
  
  //! For retrieving a single patient info with id

  async retrieveById(patientId: number): Promise<Patient> {
    try {
      const new_patient = await Patient.findOne({
        where: {
          id: patientId,
        },
      });
      if (!new_patient) {
        throw new Error("❌ Patient not found!");
      }
      return new_patient;
    } catch (error) {
      throw new Error("❌ Failed to retrieve patient information!");
    }
  }

  //! For retrieving all patient list

  async retrieveAll(): Promise<Patient[]> {
    try {
     return await Patient.findAll();
    } catch (error) {
      throw new Error("❌ Failed to retrieve patient list!");
    }
  }
  
}