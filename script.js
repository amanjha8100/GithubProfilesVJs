//Selectors
const APIURL = "https://api.github.com/users/"
const form = document.getElementById("myform");

//Event listeners
form.addEventListener('submit',onSub);

//Functions
function onSub(e){
    e.preventDefault();
    const search = document.getElementById("search").value;

    getUser(search);

}
async function getUser(user){
    //console.log(APIURL+user);
    const resp = await fetch(APIURL+user);
    const respData = await resp.json();
    console.log(respData);
    createUserCard(respData);
}

function createUserCard(user){
    const redi = "https://github.com/${user.login}";
    document.getElementById("result").innerHTML = `
<div class="container mt-5 d-flex justify-content-center">
<div class="card p-3">
    <div class="d-flex align-items-center">
        <div class="image"> <img src="${user.avatar_url}" class="rounded" width="155"> </div>
        <div class="ml-3 w-100">
            <h4 class="mb-0 mt-0">${user.name}</h4> <span>${user.login}</span>
            <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                <div class="d-flex flex-column"> <span class="articles">Followers</span> <span class="number1">${user.followers}</span> </div>
                <div class="d-flex flex-column"> <span class="followers">Following</span> <span class="number2">${user.following}</span> </div>
                <div class="d-flex flex-column"> <span class="rating">Repos</span> <span class="number3">${user.public_repos}</span> </div>
            </div>
            <div class="button mt-2 d-flex flex-row align-items-center"> 
            <button class="btn btn-sm btn-outline-primary w-100" onclick="location.href = 'https://github.com/${user.login}'" >View</button>  
            </div>
        </div>
    </div>
</div>
</div>
    `;
}
function redirec(redi){
    console.log(redi);
    location.href = redi;
}
