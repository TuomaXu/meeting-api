import sequelize from '../data-model/data-base';

//此变量为ORM数据模型，通过此对象既可以操作相应数据

const Person = sequelize.model('person');

export default async (req,res)=>{
    try {
        
        console.log(req.body);

        const rid = req.body.rid;

        const people = await Person.findAll({where:{id:rid}})

        if(people.length == 0){

            res.json({
                success:false,
                errorCode:10002,
                errorMessage:'rid无效'
            })

            return;
        }

        const person = people[0];

        await person.destroy()

        res.json({
            sucess:true,
        })


    } catch (error) {
        res.json({
            success:false,
            errorCode:10001,
            errorMessage:'数据库错误'
        })
    }
}