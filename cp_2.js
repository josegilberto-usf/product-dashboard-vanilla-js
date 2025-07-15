// Step 3: Define fetchProductsThen() Function
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                console.log(product.fields.name);
            });
        })
        .catch(error => {
            console.error('Fetch with .then() failed:', error); 
        });
}

// Step 4: Define fetchProductsAsync() Function
async function fetchProductsAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');
        const data = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

// Step 5: Define displayProducts() Function
function displayProducts(products) {
    const container = document.querySelector('#product-container');
    const firstFiveProducts = products.slice(0, 5);

    firstFiveProducts.forEach(product => {
        const{name, price, image} = product.fields;

        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src='${image[0].url}' alt='${name}' />
            <div class='product-name'>${name}</div>
            <div class='product-price'>$${(price/100).toFixed(2)}</div>
        `;

        container.appendChild(card);
    });
}

// Step 6: Define handleError() Function
function handleError(error) {
    console.error('An error occurred:', error.message);
}

