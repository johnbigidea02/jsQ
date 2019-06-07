//遍历多次，每次确定一个字母的有没有出现两次，发现次数没有两次相等时候，停止遍历，输出

function lit(x){
    var count =0; //计数，等于1时候就对了,x[i] =x[j] 只在 i和j都是1或者2.。。。时候成立，
    var answer = 0;

    for(var i =0; i<x.length;i++){
        for(var j= 0;j<x.length;j++){
            if(x[i]===x[j]){
                count+=1
            }


        }


        if(count==1){
            answer = i;
            break;
        }
        count = 0; //计数器归位
    }
    console.log(x[answer])
}

lit('dsfsafdsax')