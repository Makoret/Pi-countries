const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Vacation', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.UUID,
      allowNull: false
    },
    challenge: {
      type: DataTypes.UUID,
      allowNull: false
    },
    duration: {
      type: DataTypes.UUID,
      allowNull: false
    },
    season: {//  (Verano, Otoño, Invierno o Primavera)
      type: DataTypes.UUID,
      allowNull: false
    },
  })
}