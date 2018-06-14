//引入Express框架及相关工具
import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';


//引入数据服务模块
import getMessages from './data_servers/getMessages';
import postMessage from './data_servers/postMessage';
import register from './data_servers/register';

import unRegister from './data_servers/unRegister';
import check from './data_servers/check';
import tongji from './data_servers/tongji';
import yiqiandao from './data_servers/yiqiandao';
import weiqiandao from './data_servers/weiqiandao';
import checkPerson from './data_servers/checkPerson';

//加载ORM服务

import sequelize from './data-model/data-base';



//通过Express框架创建一个ExpressApp对象
const app = express();



//支持跨域请求
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "POST,GET");
    next();    
});




//添加静态文件服务器
//使用express自带的static中间件，对source目录提供静态文件服务
app.use('/resource',express.static('./resource'));

//解析JSON数据表单
app.use(bodyParser.json())
//解析表单文件
app.use(multer().any());


//配置请求路由
app.get('/api/getMessages',getMessages);
app.post('/api/postMessage',postMessage);
app.post('/api/register',register);
app.post('/api/unRegister',unRegister);
app.post('/api/check',check);
app.get('/api/tongji',tongji);
app.get('/api/yiqiandao',yiqiandao);
app.get('/api/weiqiandao',weiqiandao);
app.post('/api/checkPerson',checkPerson);

//开启监听服务
const server = app.listen(60001,'60.205.141.116',()=>{
	console.log('开启成功，访问http://60.205.141.116:60001');
});