const prod = document.getElementById("products");
const loadProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();  
  data.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product"); 
    div.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3> 
      <p>$${product.price}</p>
    `;
    prod.appendChild(div);
  });
} 

loadProducts();