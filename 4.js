function lit(x) {
    x = x.split('')
    var a = 0;
    console.log(x)
    for (var i = 0; i <x.length; i++){
        for (var j = i+1;j<x.length; j++){
            if(x[i]>x[j]){
                a = x[i];
                x[i] = x[j];
                x[j] = a;
                

            }
        }
    }
    console.log(x.join(''))
    
}

lit('webmaster')

