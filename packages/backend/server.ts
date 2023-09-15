import express, { Application, Request, Response } from 'express'
import Database from './src/config/database'
import PatientRouter from './src/routes/PatientRouter'
import cors from 'cors'
class App {
  public app: Application
  constructor() {
    this.app = express()
    this.plugins()
    this.databaseSync()
    this.routes()
  }
  protected plugins(): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(cors({ credentials: true, origin: process.env.URL || '*' }))
    this.app.use(cors<Request>())
  }
  protected routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      res.send('welcome home')
    })
    this.app.use('/api/v1/patient', PatientRouter)
  }
  protected databaseSync(): void {
    const db = new Database()
    db.sequelize?.sync()
  }
}

const port: number = 3001
const app = new App().app

app.listen(port, () => {
  console.log(`✅ Server started successfully on port ${port}`)
})
