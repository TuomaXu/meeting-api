import sequelize from '../data-model/data-base';

//此变量为ORM数据模型，通过此对象既可以操作相应数据

const Person = sequelize.model('person');

export default async (req, res) => {
    try {

        const people = await Person.findAll();

        const checkeds = [];

        for (let i = 0; i < people.length; i++) {
            const person = people[i];
            if (person.isCheck == 0) {
                checkeds.push(person)
            }
        }
        res.json({
            success: true,
            data:checkeds
        })



    } catch (error) {
        res.json({
            success: false,
            errorCode: 10001,
            errorMessage: '数据库错误'
        })
    }
}