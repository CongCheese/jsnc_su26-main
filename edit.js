document.getElementById("form-add").addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById("title").value;
    const price = document.getElementById("price").value;
     axios.post("http://localhost:3000/products",{
        name: name,
        price: price,
    })
    .then(()=>{
        alert("them ok");
    })
});
