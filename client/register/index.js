const crearUsuario = async (data) => {
    const fetchAPI = await fetch("http://localhost:3100/api/v1/users", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });
    const respuesta = await  fetchAPI.json();
    return respuesta
}

const form = document.getElementById("form");

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const data = {
        fullname: e.target.fullname.value ,
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value

    }
    crearUsuario(data)
        .then((respuesta)=>{
            console.log(respuesta)
        })
        .catch(err => console.log(err))
})
