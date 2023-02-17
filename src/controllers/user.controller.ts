import {User} from '../models/user.model'
import {Request, Response} from 'express'

const createUser = async (req: Request, res: Response) => {
  const data = await User.create({
    id: '312',
    firstName: 'Jane',
    lastName: 'Doe',
  })
  console.log("Jane's auto-generated ID:", data)
  res.status(200).json('taok thanh cong')
}
export const userController = {
  createUser,
}
