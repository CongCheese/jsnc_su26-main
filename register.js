document.getElementById("form-add").addEventListener("submit",(e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
     axios.post("http://localhost:3000/register",{
        email: email,
        password: password,
    })
    .then(()=>{
        alert("them ok");
    })
});
