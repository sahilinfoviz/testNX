import { Model, Table, Column, DataType } from 'sequelize-typescript'

@Table({
  tableName: Patient.PATIENT_TABLE_NAME
})
export class Patient extends Model {
  public static PATIENT_TABLE_NAME = 'patient' as string
  public static PATIENT_ID = 'id' as string
  public static PATIENT_NAME = 'name' as string
  public static PATIENT_AGE = 'age' as string

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Patient.PATIENT_ID
  })
  id!: number

  @Column({
    type: DataType.STRING(100),
    field: Patient.PATIENT_NAME
  })
  name!: string

  @Column({
    type: DataType.INTEGER,
    field: Patient.PATIENT_AGE
  })
  age!: string
}
