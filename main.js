/*var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/joaojfmx');
xhr.send(null);

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText))
    }
}
*/

// promise com xhr 
var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/joaojfmx');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('falha na conexão');
                }
            }
        }
    }
  );
}
minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });

/*
axios.get('https://api.github.com/users/joaojfmx')
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error);
});

*/