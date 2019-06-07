function lit(x) {
    x = x.split('')
    var a = 0;  //设置一个数，为了一会儿调换前后数字
    console.log(x)
    for (var i = 0; i <x.length; i++){
        for (var j = i+1;j<x.length; j++){
            if(x[i]>x[j]){
                a = x[i];
                x[i] = x[j];
                x[j] = a;
                

            }
        }
    }                                            //两个循环，冒泡排序，后面24题用到，请移步24
    console.log(x.join(''))
    
}

lit('webmaster')

