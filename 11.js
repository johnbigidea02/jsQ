function lit(x){

    for (var i = 0; i <x.length; i++){
        for (var j = i+1;j<x.length; j++){
            if(x[i]>x[j]){
                a = x[i];
                x[i] = x[j];
                x[j] = a;
                

            }
        }
    }

    console.log(x[1])
    console.log(x[x.length-2])
}

lit([2,3,1,4])