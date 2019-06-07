function lit(x){
    var sum = 0;
    for(var i  = 1; i <x;i++){
        if(x%i === 0 ){
            sum+=i
        }
    }
    console.log(sum)
    if(sum === x){
        console.log('yes')
    }

}

lit(28)