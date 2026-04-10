const prod = document.getElementById("products");
fetch ("https://dummyjson.com/products")
.then(res=>res.json())
.then(data=>{
    data.products.forEach(products => {
        const cards = document.createElement("div");
        card.className = "bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition";
        card.innerHTML = `<img src="${product.image}" class="h-40 mx-auto object-contain mb-4" />
            <h2 class="text-sm font-semibold mb-2 line-clamp-2">${product.title}</h2>
            <p class="text-green-600 font-bold mb-3">₹ ${product.price}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600">
              Add to Cart
            </button>';
            

    container.append(card); // cleaner than appendChild
    });

  } catch (err) {
    console.log(err);
        });
})

loadProducts();