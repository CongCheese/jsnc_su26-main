console.log("add");

function addProduct(name){
    axios.post("http://localhost:3000/products",{
        name: name,
        price: 3000000,
    })
    .then(()=>{
        alert("them ok");
    })
}
// addProduct();
document.getElementById("form-add").addEventListener("submit",(e)=>{
    e.preventDefault();
    alert("click submit");
    const name = document.getElementById("title").value;
    addProduct(name);
});
