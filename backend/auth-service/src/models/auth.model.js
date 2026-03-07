import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define("User", {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    unique: true
  },

  password: {
    type: DataTypes.STRING
  },

  role: {
    type: DataTypes.STRING,
    defaultValue: "USER"
  }

});

export default User;