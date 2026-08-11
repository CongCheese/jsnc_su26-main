console.log("add");

function addProduct(){
    axios.post("http://localhost:3000/products",{
        name:"Redmi note 3",
        price: 3000000,
    })
    .then(()=>{
        alert("them ok");
    })
}
// addProduct();