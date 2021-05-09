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
    document.getElementById("result").innerHTML = `
        <img src="${user.avatar_url}">
    `;
}
