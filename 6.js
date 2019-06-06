function lit(x){
    x = x.split(' ');
    var max = '';
    for(var i  = 0;i<x.length;i++){
        if(x[i].length>max.length){
            max = x[i];
        }

    }
    console.log(max);

}

lit('web developopment tools')