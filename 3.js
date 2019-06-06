function aes(x){
    var a = [];  //未完成 删除重复
    for(var i  = 0; i<x.length-1;i++){
        for (var j = i+1; j<=x.length;j++){
            console.log(x.substring(i,j))
        }

    }
    console.log(x.charAt(x.length-1))

}

aes('dog')