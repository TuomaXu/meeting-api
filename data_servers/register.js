import sequelize from '../data-model/data-base';

//此变量为ORM数据模型，通过此对象既可以操作相应数据

const Person = sequelize.model('person');

export default async (req,res)=>{
    try {
        
        console.log(req.body);

        const name = req.body.name;
        const tel = req.body.tel;

        const person = await Person.create({
            name,
            tel,
            isCheck:0
        });

        res.json({
            success:true,
            data:person
        })



    } catch (error) {
        res.json({
            success:false,
            errorCode:10001,
            errorMessage:'数据库错误'
        })
    }
}