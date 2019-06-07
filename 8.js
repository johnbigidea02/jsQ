function lit(x){
    var st = 1; //状态
    for(var i=2;i<x;i++){
        if(x%i ===0){
            st = 0
        }

    }
    switch(st){
        case 0:
            console.log('not');
            break;
        case 1:
            console.log("yes");
            break;
    }

    
    
}

lit(3)