function lit(x){
    x = x.split('')
    console.log(Array.from(new Set(x)).join('')) //网上查了一个找unique的方法 一会儿给你讲解
}

lit('thequickbrownfoxjumpsoverthelazydog')