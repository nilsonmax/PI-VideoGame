const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "the name already exists"
      },
      validate: {
        notEmpty: {
          msg: "the name is required"
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "the image is required"
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "the descripcion is required",
        }
      }
    },
    released: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rating: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      validate: {
        is: {
         args:/^(?!0+\.00)(?=.{1,9}(\.|$))(?!0(?!\.))\d{1,3}(,\d{3})*(\.\d+)?$/, // args: /^([0-9])(\.[0-9]{1})?$/,
          msg: "Rating must be number or decimal"
        },
        isNumeric: true
      }
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
      validate: {
        validatePlatform(value) {
          if (!value.length) {
            throw new Error("should select at least one platform")
          }
        }
      }
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
    {
      timestamps: false
    }
  )
};
