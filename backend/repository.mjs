import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './examDatabase.db',
    define: {
        timestamps : false
    }
});


const Video = sequelize.define('video',{
    id: {
        type:Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: true,
        primaryKey: true
    },
    descriere : {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            min: 5
        }
    },
    titlu : {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            min: 5
        }
    },
    url: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            isUrl: true
        }
    }
});

const FavouriteList = sequelize.define('favouriteList',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    descriere : {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            min: 3
        }
    },
    data:{
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
});




FavouriteList.hasMany(Video,{foreignKey: 'favouriteListID'});
Video.belongsTo(FavouriteList, {foreignKey: 'favouriteListID'});



async function initialize() {
    await sequelize.authenticate();
    await sequelize.sync({alter: true});
}

export {
    initialize,
    Video,
    FavouriteList,
}

