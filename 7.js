function lit(x){
    x = x.split(' ');
    for (var i in x){
        x[i] = x[i][0].toUpperCase()+x[i].slice(1)

    }
    console.log(x.join(' '))
    //拆成array 遍历修改
}

lit('the quick brown fox')