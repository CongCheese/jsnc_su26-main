document.getElementById("form-login").addEventListener("submit",(e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
     axios.post("http://localhost:3000/login",{
        email: email,
        password: password,
    })
    .then((res)=>{
        const token =res.data.accessToken;
        localStorage.setItem("token",token);
        alert("login!");
        window.location.href="index.html";
    })
    .catch(()=>{
        alert("login fail!");
    })
});
