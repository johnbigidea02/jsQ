function lit(x){
    var rs = 'abcdefghijklmnopqrstuvwxyz'
    var rsu = rs.toUpperCase()
    var final = ''
    //console.log(rsu+rs+'1234567890') 测试检查代码
    ran = rsu+rs+'1234567890'
    console.log(ran.split(''))
    for(var i  = 0;i<x;i++){
        final+=ran[Math.floor(Math.random() * 62)]   //随机生成0-61数字，找出词典里面对应的字

    }     //循环执行x次 生成x位随机数
    console.log(final)
}

lit(2)