import saveImage from '../utils/save-image';
import sequelize from '../data-model/data-base';

const Message = sequelize.model('message');

export default async (req,res)=>{
    
    const message = {
        title:req.body.title,
        content:req.body.content,
    }
    //判断信息是否带图，如带图，先保存图片
    const files = req.files;
    if(files && files.lenght != 0){
        const path = await saveImage(files[0].buffer);
        message.image = path;
    }

    await Message.create(message);

    //写入数据库
    return res.json({success:true});
}