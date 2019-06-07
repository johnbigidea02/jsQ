function lit(x){
    var sum = 0;
    for(var i  = 1; i <=x;i++){
        if(x%i === 0 ){
            console.log(i)
        }//是因数就输出
    }

}

lit(28)