export default (sequelize, DataTypes)=>{
    return sequelize.define('message',{
        title:DataTypes.STRING,
        content:DataTypes.STRING,
        image:DataTypes.STRING,
    });
}