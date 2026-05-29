// 50 Product Items Data
const products = [
    // Rings (10)
    { id: 1, name: "Solitaire Diamond Ring", price: 1200, category: "rings", image: "assets/jewelry_ring_1780038312529.png" },
    { id: 2, name: "Emerald Cut Engagement Ring", price: 2500, category: "rings", image: "assets/jewelry_ring_1780038312529.png" },
    { id: 3, name: "Vintage Ruby Band", price: 850, category: "rings", image: "assets/jewelry_ring_1780038312529.png" },
    { id: 4, name: "Gold Minimalist Ring", price: 300, category: "rings", image: "assets/jewelry_ring_1780038312529.png" },
    { id: 5, name: "Sapphire Halo Ring", price: 1800, category: "rings", image: "assets/jewelry_ring_1780038312529.png" },
    { id: 6, name: "Rose Gold Twist Ring", price: 450, category: "rings", image: "assets/jewelry_ring_1780038312529.png" },
    { id: 7, name: "Eternity Diamond Band", price: 1500, category: "rings", image: "assets/jewelry_ring_1780038312529.png" },
    { id: 8, name: "Men's Titanium Band", price: 250, category: "rings", image: "assets/jewelry_ring_1780038312529.png" },
    { id: 9, name: "Opal Statement Ring", price: 600, category: "rings", image: "assets/jewelry_ring_1780038312529.png" },
    { id: 10, name: "Pearl Cluster Ring", price: 400, category: "rings", image: "assets/jewelry_ring_1780038312529.png" },

    // Necklaces (10)
    { id: 11, name: "Diamond Tennis Necklace", price: 4500, category: "necklaces", image: "assets/jewelry_necklace_1780038351923.png" },
    { id: 12, name: "Gold Chain Choker", price: 650, category: "necklaces", image: "assets/jewelry_necklace_1780038351923.png" },
    { id: 13, name: "Pearl Strand", price: 1200, category: "necklaces", image: "assets/jewelry_necklace_1780038351923.png" },
    { id: 14, name: "Sapphire Pendant", price: 850, category: "necklaces", image: "assets/jewelry_necklace_1780038351923.png" },
    { id: 15, name: "Initial Gold Pendant", price: 350, category: "necklaces", image: "assets/jewelry_necklace_1780038351923.png" },
    { id: 16, name: "Ruby Heart Necklace", price: 700, category: "necklaces", image: "assets/jewelry_necklace_1780038351923.png" },
    { id: 17, name: "Silver Locket", price: 150, category: "necklaces", image: "assets/jewelry_necklace_1780038351923.png" },
    { id: 18, name: "Layered Gold Necklace", price: 420, category: "necklaces", image: "assets/jewelry_necklace_1780038351923.png" },
    { id: 19, name: "Emerald Drop Pendant", price: 950, category: "necklaces", image: "assets/jewelry_necklace_1780038351923.png" },
    { id: 20, name: "Rose Gold Bar Necklace", price: 280, category: "necklaces", image: "assets/jewelry_necklace_1780038351923.png" },

    // Bracelets (10)
    { id: 21, name: "Classic Tennis Bracelet", price: 2100, category: "bracelets", image: "assets/jewelry_bracelet_1780038366374.png" },
    { id: 22, name: "Gold Bangle", price: 500, category: "bracelets", image: "assets/jewelry_bracelet_1780038366374.png" },
    { id: 23, name: "Silver Charm Bracelet", price: 200, category: "bracelets", image: "assets/jewelry_bracelet_1780038366374.png" },
    { id: 24, name: "Pearl Bracelet", price: 350, category: "bracelets", image: "assets/jewelry_bracelet_1780038366374.png" },
    { id: 25, name: "Rose Gold Cuff", price: 400, category: "bracelets", image: "assets/jewelry_bracelet_1780038366374.png" },
    { id: 26, name: "Diamond Link Bracelet", price: 1800, category: "bracelets", image: "assets/jewelry_bracelet_1780038366374.png" },
    { id: 27, name: "Men's Leather & Steel Bracelet", price: 120, category: "bracelets", image: "assets/jewelry_bracelet_1780038366374.png" },
    { id: 28, name: "Sapphire Line Bracelet", price: 1500, category: "bracelets", image: "assets/jewelry_bracelet_1780038366374.png" },
    { id: 29, name: "Initial Charm Bracelet", price: 280, category: "bracelets", image: "assets/jewelry_bracelet_1780038366374.png" },
    { id: 30, name: "Ruby Beaded Bracelet", price: 450, category: "bracelets", image: "assets/jewelry_bracelet_1780038366374.png" },

    // Earrings (10)
    { id: 31, name: "Diamond Studs", price: 900, category: "earrings", image: "assets/jewelry_earrings_1780038385576.png" },
    { id: 32, name: "Gold Hoop Earrings", price: 300, category: "earrings", image: "assets/jewelry_earrings_1780038385576.png" },
    { id: 33, name: "Pearl Drop Earrings", price: 450, category: "earrings", image: "assets/jewelry_earrings_1780038385576.png" },
    { id: 34, name: "Sapphire Halo Studs", price: 800, category: "earrings", image: "assets/jewelry_earrings_1780038385576.png" },
    { id: 35, name: "Silver Chandelier Earrings", price: 250, category: "earrings", image: "assets/jewelry_earrings_1780038385576.png" },
    { id: 36, name: "Emerald Studs", price: 750, category: "earrings", image: "assets/jewelry_earrings_1780038385576.png" },
    { id: 37, name: "Rose Gold Huggies", price: 200, category: "earrings", image: "assets/jewelry_earrings_1780038385576.png" },
    { id: 38, name: "Diamond Teardrop", price: 1200, category: "earrings", image: "assets/jewelry_earrings_1780038385576.png" },
    { id: 39, name: "Ruby Studs", price: 650, category: "earrings", image: "assets/jewelry_earrings_1780038385576.png" },
    { id: 40, name: "Vintage Floral Earrings", price: 500, category: "earrings", image: "assets/jewelry_earrings_1780038385576.png" },

    // Watches & Others (10)
    { id: 41, name: "Classic Gold Watch", price: 1500, category: "watches", image: "assets/jewelry_watch_1780038404434.png" },
    { id: 42, name: "Silver Chronograph", price: 800, category: "watches", image: "assets/jewelry_watch_1780038404434.png" },
    { id: 43, name: "Rose Gold Minimalist Watch", price: 600, category: "watches", image: "assets/jewelry_watch_1780038404434.png" },
    { id: 44, name: "Diamond Bezel Watch", price: 3200, category: "watches", image: "assets/jewelry_watch_1780038404434.png" },
    { id: 45, name: "Leather Strap Watch", price: 350, category: "watches", image: "assets/jewelry_watch_1780038404434.png" },
    { id: 46, name: "Men's Dive Watch", price: 1200, category: "watches", image: "assets/jewelry_watch_1780038404434.png" },
    { id: 47, name: "Vintage Pocket Watch", price: 850, category: "watches", image: "assets/jewelry_watch_1780038404434.png" },
    { id: 48, name: "Platinum Dress Watch", price: 4500, category: "watches", image: "assets/jewelry_watch_1780038404434.png" },
    { id: 49, name: "Women's Ceramic Watch", price: 950, category: "watches", image: "assets/jewelry_watch_1780038404434.png" },
    { id: 50, name: "Sapphire Crystal Watch", price: 2100, category: "watches", image: "assets/jewelry_watch_1780038404434.png" }
];

const appContent = document.getElementById('app-content');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navList = document.querySelector('.nav-list');

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Routing
function handleRouting() {
    const hash = window.location.hash.substring(1) || 'home';
    
    // Close mobile menu on navigate
    navList.classList.remove('active');

    if (hash === 'home') {
        renderHome();
    } else if (['shop', 'rings', 'necklaces', 'bracelets', 'earrings', 'watches'].includes(hash)) {
        renderShop(hash);
    } else {
        renderGenericPage(hash);
    }
    
    window.scrollTo(0, 0);
}

// Render Functions
function renderHome() {
    appContent.innerHTML = `
        <section class="hero">
            <h1>Discover Timeless Elegance</h1>
            <p>Handcrafted fine jewelry designed for your most memorable moments.</p>
            <a href="#shop" class="btn">Shop the Collection</a>
        </section>
        <section class="product-section">
            <div class="page-header">
                <h2>Featured Arrivals</h2>
                <p>Explore our latest handcrafted pieces.</p>
            </div>
            <div class="product-grid">
                ${products.slice(0, 8).map(createProductCard).join('')}
            </div>
        </section>
    `;
}

function renderShop(category) {
    let filteredProducts = products;
    let title = "Shop All";
    
    if (category !== 'shop') {
        filteredProducts = products.filter(p => p.category === category);
        title = category.charAt(0).toUpperCase() + category.slice(1);
    }

    appContent.innerHTML = `
        <div class="page-header">
            <h2>${title}</h2>
            <p>${filteredProducts.length} items available</p>
        </div>
        <section class="product-section">
            <div class="product-grid">
                ${filteredProducts.map(createProductCard).join('')}
            </div>
        </section>
    `;
}

function renderGenericPage(route) {
    const title = route.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    appContent.innerHTML = `
        <div class="page-header">
            <h2>${title}</h2>
        </div>
        <div class="content-container">
            <p>Welcome to the ${title} page. This is a placeholder for the static content that would normally reside here.</p>
            <p>Aura Jewelry is committed to providing the best quality and service. Please reach out to our customer care if you have any questions.</p>
        </div>
    `;
}

function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">$${product.price.toLocaleString()}</div>
        </div>
    `;
}

// Event Listeners
window.addEventListener('hashchange', handleRouting);
window.addEventListener('load', handleRouting);
