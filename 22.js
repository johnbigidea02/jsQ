function lit(x,y){
    var count = 0;//  计数器
    
    for(var i = 0;i<x.length;i++){
        if(x[i]===y){
            count+=1
        }
    }  //遍历计数

    console.log(count)




}

lit('microsoft','o')