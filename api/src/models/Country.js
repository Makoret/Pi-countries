const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
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
    image: {
      type: DataTypes.UUID,
      allowNull: false
    },
    continent: {
      type: DataTypes.UUID,
      allowNull: false
    },
    capital: {
      type: DataTypes.UUID,
      allowNull: false
    },
    subregion: {
      type: DataTypes.UUID,
      allowNull: false
    },
    area: {
      type: DataTypes.UUID,
      allowNull: false
    },
    population: {
      type: DataTypes.UUID,
      allowNull: false
    },
  });
};
