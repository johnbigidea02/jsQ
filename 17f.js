
function lit(x) {
    var d  = Array.from(new Set(x));
    var count = 0;
    var nm = [];
    
    for(var i=0; i< d.length;i++){
        for(var j = 0; j<x.length;j++){
            if(d[i]===x[j]){
                count+=1
            }
            
        }
        nm[i] = count;

        count = 0
    }
    
    console.log(nm)
    console.log(d)

}

lit('dfsafdsasdqwa')
