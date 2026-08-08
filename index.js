axios.get("http://localhost:3000/products").then((res) => {
    console.log("cal API", res.data);
    const products = res.data;
    document.getElementById("product").innerHTML = products.map((product) => {
        return `
<tr class="hover:bg-gray-50">
        <td class="px-4 py-2 border border-gray-300">${product.id}</td>
        <td class="px-4 py-2 border border-gray-300">${product.name}</td>
        <td class="px-4 py-2 border border-gray-300">${product.price}</td>
        <td class="px-4 py-2 border border-gray-300">
            <td>
              <button onclick="deleteProduct(${product.id})">
                Xóa
              </button>
            </td>
        </td>
    </tr>
`;
    }).join("");
}) 
function deleteProduct(id){
    const result = confirm ("Xóa?");

    if(result){
        axios.delete(`http://localhost:3000/products/${id}`).then(()=>{
            loadProducts();
        });
}
}   