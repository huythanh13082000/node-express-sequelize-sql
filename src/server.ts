import express, {Request, Response} from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  return res.status(200).send({
    res: 'abc',
  })
})

app.listen(3000, () => {
  console.log('Running on port 3000')
})
