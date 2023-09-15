import { Request, Response } from "express";
import { Patient } from "../models/Patient";
import { PatientService } from "../services/patientModule/patientService";

class patientController {
  async create(req: Request, res: Response) {
    try {
        console.log(req.body.name);
        
      const new_patient = new Patient();
      console.log(req.body.name);
      new_patient.name = req.body.name;
      new_patient.age = req.body.age;

      await new PatientService().save(new_patient);

      res.status(201).json({
        status: "Created!",
        message: "Successfully registered new patient!",
      });
    } catch (err) {
        console.log(err);
        
      res.status(500).json({
        status: "❌ Internal Server Error!",
        message: "❌ Internal Server Error!",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      let id = Number(req.params.id);
      await new PatientService().delete(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted patient!",
      });
    } catch (err) {
      res.status(500).json({
        status: "❌ Internal Server Error!",
        message: "❌ Internal Server Error!",
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      let id = Number(req.params.id);
      const new_patient = await new PatientService().retrieveById(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched patient by id!",
        data: new_patient,
      });
    } catch (err) {
      res.status(500).json({
        status: "❌ Internal Server Error!",
        message: "❌ Internal Server Error!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const new_patient = await new PatientService().retrieveAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all patient data!",
        data: new_patient,
      });
    } catch (err) {
      res.status(500).json({
        status: "❌ Internal Server Error!",
        message: "❌ Internal Server Error!",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let id = Number(req.params.id);
      const new_patient = new Patient();

      new_patient.id = id;
      new_patient.name = req.body.name;
      new_patient.age = req.body.age;

      await new PatientService().update(new_patient);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated patient data!",
      });
    } catch (err) {
      res.status(500).json({
        status: "❌ Internal Server Error!",
        message: "❌ Internal Server Error!",
      });
    }
  }
}

export default new patientController()