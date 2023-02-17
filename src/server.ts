import express, {Request, Response} from 'express'
import {connectDB} from './config/db'
import dotenv from 'dotenv/config'
import { userRouter } from './routers/v1/user.router'

const app = express()

app.get('/', (req: Request, res: Response) => {
  return res.status(200).send({
    res: 'abc',
  })
})
connectDB()
  .then(() => {
    console.log('Connected successfully to database!')
  })
  .then(() => {
    bootServer()
  })
  .catch((err) => console.log(err))

const bootServer = () => {
  const port = process.env.APP_PORT
  const host = process.env.APP_HOST
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`Open http://${host}:${port}`)
  })
  app.use(express.json())
  app.use('/api/v1', userRouter)
}
