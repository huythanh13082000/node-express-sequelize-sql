import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
  console.log(process.env.APP_HOST)
  const sequelize = new Sequelize('db_test', 'root', '', {
    host: process.env.APP_HOST,
    dialect: 'mysql',
  })
  try {
    await sequelize.authenticate()
  } catch (error: any) {
    throw new Error(error)
  }
}
