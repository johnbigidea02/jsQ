function ra(x){
    x = x.replace(/\s/ig,'');//正则表达式
  
    var y = '';
 
    for(var i = x.length-1;i >= 0;i--){
        
        y = y+x.charAt(i);

    }
    
    if(x.toString() === y){
        console.log("fyoureright")
    }
    


}

ra('nurses run')

