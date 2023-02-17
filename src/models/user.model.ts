import {Sequelize, DataTypes} from 'sequelize'
const sequelize = new Sequelize('sqlite::memory:')

export const User = sequelize.define(
  'users',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
)
