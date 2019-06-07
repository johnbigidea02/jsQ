function lit(x){
    var sum = 0;
    for(var i  = 1; i <x;i++){
        if(x%i === 0 ){
            sum+=i
        }// 是因数就加一起
    }

    if(sum === x){
        console.log('yes')
    } //判断是否完美

}

lit(28)