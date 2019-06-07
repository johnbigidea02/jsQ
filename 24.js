function lit(x) {

    var a = 0;

    for (var i = 0; i <x.length; i++){
        for (var j = i+1;j<x.length; j++){
            if(x[i]<x[j]){
                a = x[i];
                x[i] = x[j];
                x[j] = a;
                

            }
        }
    }                                            //上网搜索冒泡排序原理和 动画示意图
    console.log(x)
    
}

lit([213,1321,1231,4,12])