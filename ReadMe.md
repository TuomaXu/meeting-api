# MeetingAPI

### 元数据

|字段名|类型|描述|
|:---|:---|:---|
|id|int|唯一且自增，由数据库维护，作为参会登记号|
|name|string|参会者姓名|
|tel|string|参数者电话|
|isCheck|int|是否签到。0-未签到，1-已签到，默认未签到|


### 错误列表

|错误编号|描述|
|:---|:---|
|10001|数据库错误|
|10002|rid无效|

```
{
    success:false,
    errorCode:10001,
    errorMessage:'数据库错误'
}
```

### 请求基础地址

`http://60.205.141.116:60001`


### 参会登记

请求路径： `http://ip:port/api/register`

请求方式：`POST`

请求参数：

|字段名|类型|描述|
|:---|:---|:---|
|name|string|参会者姓名|
|tel|string|参数者电话|


返回值：

```
{
    success:true,
    data:{
        id:1,
        name:'xx',
        tel:'123',
        isCheck:0
    }
}
```

### 取消登记

请求路径： `http://ip:port/api/unRegister`

请求方式：`POST`

请求参数：

|字段名|类型|描述|
|:---|:---|:---|
|rid|string|参会者登记号|



返回值：

```
{
    success:true,
}
```

### 签到

请求路径： `http://ip:port/api/check`

请求方式：`POST`

请求参数：

|字段名|类型|描述|
|:---|:---|:---|
|rid|string|参会者登记号|



返回值：

```
{
    success:true,
}
```

### 查询统计信息

请求路径： `http://ip:port/api/tongji`

请求方式：`GET`

请求参数：无


返回值：

```
{
    success:true,
    data:{
        total:10,
        checked:3,
        unCheck:7,
    }
}
```

### 查询已签到名单

请求路径： `http://ip:port/api/yiqiandao`

请求方式：`GET`

请求参数：无


返回值：

```
{
    success:true,
    data:[
        {
            id:1,
            name:'xx',
            tel:'123',
            isCheck:1
        },
        ...
    ]
}
```


### 查询未签到名单

请求路径： `http://ip:port/api/weiqiandao`

请求方式：`GET`

请求参数：无


返回值：

```
{
    success:true,
    data:[
        {
            id:1,
            name:'xx',
            tel:'123',
            isCheck:0
        },
        ...
    ]
}
```

### 查询个人签到状态

请求路径： `http://ip:port/api/checkPerson`

请求方式：`POST`

请求参数：

|字段名|类型|描述|
|:---|:---|:---|
|rid|string|参会者登记号|



返回值：

```
{
    success:true,
    data:{
        id:1,
        name:'xx',
        tel:'123',
        isCheck:0
    }
}
```