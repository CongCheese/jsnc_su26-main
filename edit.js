console.log("edit");
const params = new URLSearchParams(window.location.search);
console.log(params);
const id = params.get("id");
console.log(id);
document.getElementById("form-edit").addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById("title").value;
    const price = document.getElementById("price").value;
     axios.put(`http://localhost:3000/products/${id}`,{
        name: name,
        price: price,
    })
    .then(()=>{
        alert("cập nhật ok");
    }).catch((err)=>{
        alert("cập nhật không ok");
    })
});
