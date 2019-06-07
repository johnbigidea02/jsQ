function aes(x){
    var a = [];  //未完成 删除重复,这就是个可改进部分，比如参数是 dogdog 那么最后输出的时候可以不输出重复的substring，可以用array方法搞一搞，不过我没写
    for(var i  = 0; i<x.length-1;i++){
        for (var j = i+1; j<=x.length;j++){
            console.log(x.substring(i,j))
        }

    }
    console.log(x.charAt(x.length-1))

}

aes('dog')