const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('platforms', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'the name already exists'
            },
            validate: {
                notEmpty: {
                    msg: 'the name is required'
                }
            }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'the type is required'
                }
            },
            defaultValue: "Platforms"
        }
    },
        {
            timestamps: false
        }
    )
}