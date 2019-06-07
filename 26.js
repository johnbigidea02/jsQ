function lit(x) {
    var max = 0; //有找找最大任务，一般会这么来一发
    var answer = ''
    for (var i = 0; i <x.length; i++){
        for (var j = i+1;j<x.length; j++){
            if(x.slice(i,j).length===Array.from(new Set(x.slice(i,j))).length && x.slice(i,j).length>max){

                answer = x.slice(i,j)
                max = x.slice(i,j).length

            }
           
        }
    }     
    console.log(answer)                                       //两次遍历

    
}

lit('wesmasjter')