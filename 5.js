
//5题和7题我写反了
function lit(x){
    var vmy = 0;
    x = x.split('');
    for (var i = 0;i<x.length;i++){
        if(x[i] === 'a'||x[i] === 'e'||x[i] === 'i'||x[i] === 'o'||x[i] === 'u'){
            vmy+=1
            
        }
    }
    console.log(vmy)

}
lit('the quick brown fox')