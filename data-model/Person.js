export default (sequelize, DataTypes)=>{
    return sequelize.define('person',{
        name:DataTypes.STRING,
        tel:DataTypes.STRING,
        isCheck:DataTypes.INTEGER,
    });
}