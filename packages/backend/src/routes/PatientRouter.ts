import BaseRoutes from "./base/BaseRouter";
import patientController from "../controller/patientControler";

class PatientRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("", patientController.create);
    this.router.patch("/:id", patientController.update);
    this.router.delete("/:id", patientController.delete);
    this.router.get("", patientController.findAll);
    this.router.get("/:id", patientController.findById);
  }
}

export default new PatientRoutes().router