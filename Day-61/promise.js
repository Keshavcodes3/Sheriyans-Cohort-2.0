fetch('url').then((function(notReadable){
    return notReadable.json();
})).then(function(Data){
    Data.forEach(element => {
        console.log(element.name)
    })
}).catch(function(err){
    console.log(`Error `);
})