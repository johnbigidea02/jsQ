
function lit(x,y) {
    y = y.sort(function(a, b){return b-a});
    

    
    for(var i =0;i<y.length;i++){
        var b = Math.floor(x/y[i])
        if(b>=1){
            for(var j =0;j<b;j++){
            console.log(y[i])
        }
        }
        x = x%y[i];
    }
   

    

}

lit(46,[25,10,5,2,1])
