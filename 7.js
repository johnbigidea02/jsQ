function lit(x){
    x = x.split(' ');
    for (var i in x){
        x[i] = x[i][0].toUpperCase()+x[i].slice(1)
        //x[i][0] =x[i][0].toUpperCase()
        //console.log(x[i][0].toUpperCase())
    }
    console.log(x.join(' '))
    
}

lit('the quick brown fox')