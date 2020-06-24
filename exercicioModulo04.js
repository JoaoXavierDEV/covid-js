 // idade = 13;
/*
text = "dsunhasudh";
var minhapromise = function(idade){
    return new Promise(function(resolve, reject){
        if(idade > 18){
            resolve(text = "maior qqqq 18");
        } else {
            reject(text = "menorrrr");
        }
    });
}

minhapromise(2)
    .then(function(response){
        console.log("maior q 18" + text);
        
    })
    .catch(function(error){
        console.log("menoooor q 18" + text);
})

function exe02(){
    return confirm("limpar?") ? document.getElementById("formulario").reset() : alert("não foi limpo") 
    // return confirm("serius?");
}*/

function buscar(){
     /*let userr = document.getElementById("campoUser").value;
     alert(document.getElementById("campoUser").value);
     var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/joaojfmx/repos');
        xhr.send(null);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    // let gitHub = JSON.parse(xhr.responseText);
                    
                    array = JSON.parse(xhr.responseText);
                    console.log(array.lenght);
                    console.warn("huehue");
                }
            }
        }*/
}

var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/joaojfmx/repos');
        
        
        repos.innerHTML = `<li>Carregando...</li>`
        xhr.send(null);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    // let gitHub = JSON.parse(xhr.responseText);
                    var array = [];
                    array = JSON.parse(xhr.responseText);
                    function pegaNome(){
                        let output = '';
                        array.forEach(github => {
                        output += `<h1>${github.name}</h1>`
                            
                    });
                    document.getElementById("repos").innerHTML = output;
                }
                    resolve(pegaNome());
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

