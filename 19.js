function lit(x,y){
    for(var i in y){
        if(y[i]>x){
            console.log(y[i])

        }
    }
}

lit(3,[1,2,3,4,4,5])