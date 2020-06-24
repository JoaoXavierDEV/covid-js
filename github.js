
repos.innerHTML = `<div class="text-center" style="text-align: center;"><img src="https://images.uncyc.org/pt/9/9a/Warmachine-win1.gif"/></div>`;

setTimeout(function(){
    const search = document.getElementById("search");
    const profile = document.getElementById("profile");
    const url = "https://api.github.com/users";
    //const urlRepos = "https://api.github.com/users/joaojfmx/repos'";
    const client_id = "b5a1b396404c737f2d7c";
    const client_secret = "16d579ab7e93a27d4cb85c839ea75e22859a5bf5";
    
    async function getUser(user){
        
        const profileResponse = await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`)        
         const reposResponse = await fetch(`${url}/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`);
       //  const reposResponse = await fetch(`${urlRepos}`);

        const profile = await profileResponse.json();
        const repositorios = await reposResponse.json();

        return {profile, repositorios};
        
    }  
    

    function showProfile(user){
        profile.innerHTML = `
        <div class="row mt-2">
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${user.avatar_url}">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">Repositórios: <span class="badge badge-success">${user.public_repos}</span></li>
                    <li class="list-group-item">Seguidores: <span class="badge badge-primary">${user.followers}</span></li>
                    <li class="list-group-item">Seguindo: <span class="badge badge-danger">${user.following}</span></li>
                    </ul>     
                <div class="card-body">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">Ver perfil</a>
                </div>
            </div>
        </div>
            <div class="col-md-8"><div id="repos"></div></div>
      </div>`
    }



    function showRepos(repositorios){
        let output = "";
        repositorios.forEach(repositorio => {
            output += `      
            <div class="card card-body mb-2">
            <div class="row">
            <div class="col-md-6">
            <a href="${repositorio.html_url}" target="_blank">${repositorio.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Starts: ${repositorio.stargazers_count}</span>
            <span class="badge badge-success">Watch: ${repositorio.watchers_count}</span>
            <span class="badge badge-warning">Forks: ${repositorio.forks_count}</span>
            </div>
            </div>
            </div>`;
        });
        document.getElementById("repos").innerHTML = output;
    }
    
    
    search.addEventListener("keyup", (e) => {
        const user = e.target.value;
        if(user.length > 0){
            getUser(user).then(res => {
                 repos.innerHTML = '';
                 showProfile(res.profile);
                 showRepos(res.repositorios);
                });        
            } else if (user.length = 0){
                repos.innerHTML = `<img src="https://images.uncyc.org/pt/9/9a/Warmachine-win1.gif"/>`;
            }
       
    });
}, 3000)();

