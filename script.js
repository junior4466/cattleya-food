// ========================================
// CONFIGURAÇÃO
// ========================================
const CONFIG = {
    whatsappNumber: '5588981195074',
    whatsappMessage: 'Olá! Gostaria de fazer um pedido:',
    pixKey: '96bdd733-2978-4015-8c26-156869839944',
    merchantName: 'Cattleya Food',
    merchantCity: 'Aquiraz',
    deliveryFee: 8.00,
    restaurantName: 'Cattleya Food',
    restaurantAddress: 'Aquiraz-CE',
    restaurantPhone: '(88) 98119-5074',
    openingHours: 'Seg - Sex: 9h às 23h | Sáb - Dom: 11h às 23h',
    businessHours: {
        weekdays: { start: 9, end: 23 },
        weekend: { start: 11, end: 23 }
    },
    googleSheetsWebAppUrl: 'https://script.google.com/macros/s/AKfycbz4F0EpAjFfy_7Kdtzx7tJnOcDFArVC2x3PwTGVXMMr0Q0vz5zl7Hh2UejL0qfMcN0f/exec'
};

// ========================================
// DADOS DOS PRODUTOS (SEM LINKS DE PAGAMENTO)
// ========================================
const products = [
    // ========== ENTRADAS ==========
    {
        id: 1,
        name: 'Foie Gras com Redução de Vinho do Porto',
        description: 'Foie gras artesanal servido com redução de vinho do porto e torradas crocantes.',
        price: 89.90,
        category: 'entradas',
        image: 'https://i.pinimg.com/736x/12/00/65/120065874e97828659cb0c90e14063e2.jpg',
        featured: true
    },
    {
        id: 2,
        name: 'Tartar de Salmão com Avocado',
        description: 'Salmão fresco em cubos marinado com azeite de oliva, limão siciliano e avocado cremoso.',
        price: 72.90,
        category: 'entradas',
        image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&q=80',
        featured: false
    },
    {
        id: 10,
        name: 'Bruschetta de Cogumelos Selvagens',
        description: 'Pão rústico tostado com cogumelos salteados, alho, ervas finas e parmesão.',
        price: 48.90,
        category: 'entradas',
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&q=80',
        featured: false
    },
    {
        id: 11,
        name: 'Camarão Empanado com Melado de Agrião',
        description: 'Camarões crocantes servidos com redução de melado de agrião e limão.',
        price: 62.90,
        category: 'entradas',
        image: 'https://i.pinimg.com/736x/57/ca/d5/57cad54ec49d5c43914b2c44ca59e2bb.jpg',
        featured: false
    },

    // ========== PRINCIPAIS ==========
    {
        id: 3,
        name: 'Risotto de Funghi Porcini',
        description: 'Risotto cremoso preparado com cogumelos porcini importados e parmesão reggiano.',
        price: 95.90,
        category: 'principais',
        image: 'https://i.pinimg.com/736x/af/93/4a/af934a47ae9dafc7c049dbae8ad29714.jpg',
        featured: true
    },
    {
        id: 4,
        name: 'Magret de Pato ao Molho de Frutas Vermelhas',
        description: 'Peito de pato grelhado com molho agridoce de frutas vermelhas e purê de batata trufado.',
        price: 129.90,
        category: 'principais',
        image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800&q=80',
        featured: true
    },
    {
        id: 5,
        name: 'Filé Mignon Wellington',
        description: 'Filé mignon envolto em massa folhada com duxelles de cogumelos e foie gras.',
        price: 144.90,
        category: 'principais',
        image: 'https://i.pinimg.com/736x/c9/4a/df/c94adfab038affadcbbf2675573eafad.jpg',
        featured: true
    },
    {
        id: 6,
        name: 'Bacalhau Confitado com Purê de Grão-de-Bico',
        description: 'Lombo de bacalhau confitado em azeite português servido com purê de grão-de-bico.',
        price: 114.90,
        category: 'principais',
        image: 'https://i.pinimg.com/736x/18/c4/d1/18c4d10affb50cba92c838a732031d97.jpg',
        featured: true
    },
    {
        id: 12,
        name: 'Ossobuco ao Molho de Vinho Tinto',
        description: 'Ossobuco cozido lentamente ao molho de vinho tinto com legumes e risoto de açafrão.',
        price: 139.90,
        category: 'principais',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
        featured: false
    },
    {
        id: 13,
        name: 'Robalo Grelhado com Purê de Mandioquinha',
        description: 'Filé de robalo grelhado, purê de mandioquinha e farofa de castanhas.',
        price: 109.90,
        category: 'principais',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80',
        featured: false
    },

    // ========== SOBREMESAS ==========
    {
        id: 7,
        name: 'Crème Brûlée de Baunilha de Madagascar',
        description: 'Clássico francês com creme de baunilha de Madagascar e crosta caramelizada.',
        price: 41.90,
        category: 'sobremesas',
        image: 'https://vanille-malagasy.com/wp-content/uploads/2024/09/creme-brulee-traditional-french-vanilla-cream-dessert--1024x682.jpg',
        featured: true
    },
    {
        id: 8,
        name: 'Fondant de Chocolate Belga',
        description: 'Bolo de chocolate belga com centro líquido servido com sorvete de baunilha.',
        price: 49.90,
        category: 'sobremesas',
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80',
        featured: true
    },
    {
        id: 9,
        name: 'Tarte Tatin de Maçã',
        description: 'Tradicional torta francesa de maçãs caramelizadas com massa folhada crocante.',
        price: 44.90,
        category: 'sobremesas',
        image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80',
        featured: true
    },
    {
        id: 14,
        name: 'Souflê de Chocolate',
        description: 'Souflê de chocolate meio amargo servido com calda de frutas vermelhas.',
        price: 52.90,
        category: 'sobremesas',
        image: 'https://i.pinimg.com/736x/9a/71/d1/9a71d1c3f846c0452b8c72a7f1176feb.jpg',
        featured: false
    },
    {
        id: 15,
        name: 'Cheesecake de Frutas Vermelhas',
        description: 'Cheesecake cremoso com calda de frutas vermelhas e base de biscoito.',
        price: 46.90,
        category: 'sobremesas',
        image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&q=80',
        featured: false
    },

    // ========== BEBIDAS ==========
    {
        id: 16,
        name: 'Coca-Cola',
        description: 'Refrigerante Coca-Cola 350ml.',
        price: 8.90,
        category: 'bebidas',
        image: 'https://i.pinimg.com/736x/d9/90/b4/d990b4e3fafb7073f2ab7241e48aea0b.jpg'
    },
    {
        id: 17,
        name: 'Coca-Cola Zero',
        description: 'Refrigerante Coca-Cola Zero 350ml.',
        price: 8.90,
        category: 'bebidas',
        image: 'https://i.pinimg.com/736x/12/21/0c/12210c0fa6dba1e76518f42b0910f77a.jpg'
    },
    {
        id: 18,
        name: 'Guaraná Antarctica',
        description: 'Refrigerante Guaraná Antarctica 350ml.',
        price: 7.90,
        category: 'bebidas',
        image: 'https://i.pinimg.com/474x/9e/dd/b1/9eddb1ebbb956e2857ef6780100bc0ba.jpg'
    },
    {
        id: 19,
        name: 'Guaraná Zero',
        description: 'Refrigerante Guaraná Antarctica Zero 350ml.',
        price: 7.90,
        category: 'bebidas',
        image: 'https://gkpb.com.br/wp-content/uploads/2023/12/guarana-antarctica-zero.jpg'
    },
    {
        id: 20,
        name: 'Suco de Laranja',
        description: 'Suco natural de laranja 400ml.',
        price: 12.90,
        category: 'bebidas',
        image: 'https://i.pinimg.com/736x/f8/56/5b/f8565b7442a9df396adc387c8555d8b4.jpg'
    },
    {
        id: 21,
        name: 'Suco de Limão',
        description: 'Suco natural de limão 400ml.',
        price: 10.90,
        category: 'bebidas',
        image: 'https://i.pinimg.com/736x/c7/6f/e3/c76fe38d99b408ac55951da721e024cc.jpg'
    },
    {
        id: 22,
        name: 'Suco de Maracujá',
        description: 'Suco natural de maracujá 400ml.',
        price: 11.90,
        category: 'bebidas',
        image: 'https://i.pinimg.com/736x/68/b7/aa/68b7aa219f1e77c16a069774cfe2b79c.jpg'
    },
    {
        id: 23,
        name: 'Água Mineral sem Gás',
        description: 'Água mineral 500ml.',
        price: 5.90,
        category: 'bebidas',
        image: 'https://i.pinimg.com/736x/9f/c7/ce/9fc7ce0c74e28de0edf06d7fd3415cd3.jpg'
    },
    {
        id: 24,
        name: 'Água Mineral com Gás',
        description: 'Água mineral com gás 500ml.',
        price: 6.90,
        category: 'bebidas',
        image: 'https://i.pinimg.com/1200x/48/f6/0d/48f60dbfdf686280c94780c442f5e7ca.jpg'
    },
    {
        id: 25,
        name: 'Café Expresso',
        description: 'Café expresso 50ml.',
        price: 7.90,
        category: 'bebidas',
        image: 'https://i.pinimg.com/1200x/d9/a8/a9/d9a8a9cd7c8cb07fc28b45d4d518258b.jpg'
    },
    {
        id: 26,
        name: 'Cappuccino',
        description: 'Cappuccino cremoso com canela 200ml.',
        price: 14.90,
        category: 'bebidas',
        image: 'https://i.pinimg.com/736x/52/41/31/52413159c7f291bbc186422481b3ac50.jpg'
    },
    {
        id: 27,
        name: 'Caipirinha',
        description: 'Tradicional caipirinha de limão com cachaça, açúcar e gelo.',
        price: 24.90,
        category: 'bebidas',
        image: 'https://i.pinimg.com/736x/f9/91/63/f99163e7d15a43fee1a90fe9ea03ea46.jpg'
    },
    {
        id: 28,
        name: 'Gin Tônica',
        description: 'Gin com água tônica, rodela de limão e zimbro.',
        price: 29.90,
        category: 'bebidas',
        image: 'https://i.pinimg.com/736x/5c/a5/7a/5ca57a68e1bf2b9e8a694f9db3cec1af.jpg'
    },
    {
        id: 29,
        name: 'Vinho Tinto (Taça)',
        description: 'Taça de vinho tinto da casa.',
        price: 22.90,
        category: 'bebidas',
        image: 'https://i.pinimg.com/1200x/37/1a/b1/371ab1f4b78815c3900a5cab4640ba2d.jpg'
    },
    {
        id: 30,
        name: 'Cerveja Artesanal IPA',
        description: 'Cerveja artesanal estilo IPA 355ml.',
        price: 18.90,
        category: 'bebidas',
        image: 'https://i.pinimg.com/736x/e3/0b/b5/e30bb513f85bef849fc29cdd8e8a5f3d.jpg'
    },
    {
        id: 31,
        name: 'Limonada Suíça',
        description: 'Limonada cremosa com leite condensado e hortelã.',
        price: 16.90,
        category: 'bebidas',
        image: 'https://i.pinimg.com/1200x/79/03/5b/79035bdc46ecd9403486880057860f5b.jpg'
    },
    {
        id: 32,
        name: 'Soda Italiana de Frutas Vermelhas',
        description: 'Bebida refrescante com xarope de frutas vermelhas e água com gás.',
        price: 14.90,
        category: 'bebidas',
        image: 'https://www.estilozzo.com/wp-content/uploads/2021/02/f-soda-italiana-de-frutas-vermelhas.jpg'
    }
];

// ========================================
// GERENCIAMENTO DO CARRINHO
// ========================================
let cart = [];

function loadCart() {
    try {
        const savedCart = localStorage.getItem('cattleya_cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartUI();
        }
    } catch (e) {
        console.error('Erro ao carregar carrinho:', e);
        cart = [];
    }
}

function saveCart() {
    try {
        localStorage.setItem('cattleya_cart', JSON.stringify(cart));
        updateCartUI();
    } catch (e) {
        console.error('Erro ao salvar carrinho:', e);
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Produto não encontrado:', productId);
        alert('Erro: Produto não encontrado!');
        return;
    }

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
    showCartFeedback('✅ Produto adicionado ao carrinho!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
    }
}

function clearCart() {
    if (cart.length === 0) return;
    if (confirm('Deseja realmente limpar o carrinho?')) {
        cart = [];
        saveCart();
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartItemCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

function updateCartUI() {
    updateCartBadge();
    renderCartItems();
    updateCartSummary();
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const count = getCartItemCount();
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

function renderCartItems() {
    const cartEmpty = document.getElementById('cartEmpty');
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');

    if (!cartItems) return;

    if (cart.length === 0) {
        if (cartEmpty) cartEmpty.style.display = 'flex';
        if (cartItems) cartItems.classList.remove('active');
        if (cartFooter) cartFooter.style.display = 'none';
    } else {
        if (cartEmpty) cartEmpty.style.display = 'none';
        if (cartItems) cartItems.classList.add('active');
        if (cartFooter) cartFooter.style.display = 'block';

        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-product-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy">
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
                    <div class="cart-item-controls">
                        <div class="quantity-control">
                            <button class="quantity-btn" data-action="decrement">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn" data-action="increment">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <button class="remove-item-btn" data-action="remove" aria-label="Remover item">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function setupCartDelegation() {
    const cartItemsContainer = document.getElementById('cartItems');
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (!btn) return;

            const cartItem = btn.closest('.cart-item');
            if (!cartItem) return;

            const productId = parseInt(cartItem.dataset.productId, 10);
            const action = btn.dataset.action;

            if (action === 'increment') {
                updateCartQuantity(productId, 1);
            } else if (action === 'decrement') {
                updateCartQuantity(productId, -1);
            } else if (action === 'remove') {
                removeFromCart(productId);
            }
        });
    }
}

function updateCartSummary() {
    const subtotal = getCartTotal();
    const deliveryFee = cart.length > 0 ? CONFIG.deliveryFee : 0;
    const total = subtotal + deliveryFee;

    const subtotalEl = document.getElementById('cartSubtotal');
    const deliveryEl = document.getElementById('cartDeliveryFee');
    const totalEl = document.getElementById('cartTotal');

    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (deliveryEl) deliveryEl.textContent = formatPrice(deliveryFee);
    if (totalEl) totalEl.textContent = formatPrice(total);
}

function showCartFeedback(message) {
    const cartIcon = document.getElementById('cartIcon');
    if (cartIcon) {
        cartIcon.classList.add('pulse');
        setTimeout(() => cartIcon.classList.remove('pulse'), 600);
    }

    const feedback = document.createElement('div');
    feedback.className = 'cart-feedback';
    feedback.textContent = message;
    feedback.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, var(--color-gold-primary), var(--color-gold-light));
        color: var(--color-black-primary);
        padding: 12px 20px;
        border-radius: var(--radius-sm);
        font-weight: 600;
        z-index: 9999;
        box-shadow: var(--shadow-lg);
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(feedback);
    setTimeout(() => {
        feedback.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => feedback.remove(), 300);
    }, 2000);
}

// ========================================
// MENU MOBILE (elegant drawer)
// ========================================
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const drawer     = document.getElementById('drawerNav');
    const overlay    = document.getElementById('drawerOverlay');
    const closeBtn   = document.getElementById('drawerCloseBtn');

    if (!menuToggle || !drawer) return;

    function openDrawer() {
        if (overlay) {
            overlay.classList.add('visible');
            requestAnimationFrame(() => overlay.classList.add('active'));
        }
        drawer.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.setAttribute('aria-label', 'Fechar menu');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        if (overlay) {
            overlay.classList.remove('active');
            setTimeout(() => overlay.classList.remove('visible'), 420);
        }
        drawer.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
        document.body.style.overflow = '';
    }

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        drawer.classList.contains('active') ? closeDrawer() : openDrawer();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay)  overlay.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('active')) closeDrawer();
    });

    // Close on any drawer nav link click (smooth scroll handled by initSmoothScroll)
    drawer.querySelectorAll('.drawer-nav-link').forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
}

// ========================================
// SCROLL SUAVE
// ========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#' || href === '#0') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                window.scrollTo({
                    top: target.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// EFEITO DE SCROLL NO HEADER
// ========================================
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 100);
    });
}

// ========================================
// FILTROS DO MENU
// ========================================
function initMenuFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProducts(button.dataset.filter);
        });
    });
}

function filterProducts(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
            item.style.opacity = '1';
        } else {
            const itemCategory = item.dataset.category;
            if (itemCategory === category) {
                item.style.display = 'block';
                item.style.opacity = '1';
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 300);
            }
        }
    });
}

// ========================================
// RENDERIZAR PRODUTOS
// ========================================
function renderProducts(filterFn = null) {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    const filtered = filterFn ? products.filter(filterFn) : products;
    menuGrid.innerHTML = filtered.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    return `
        <div class="menu-item" data-category="${product.category}">
            <div class="menu-item-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="menu-item-image" loading="lazy">
            </div>
            <div class="menu-item-content">
                <h3 class="menu-item-name">${product.name}</h3>
                <p class="menu-item-description">${product.description}</p>
                <div class="menu-item-price">${formatPrice(product.price)}</div>
                <div class="menu-item-actions">
                    <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Adicionar
                    </button>
                    <button class="btn btn-whatsapp whatsapp-btn" data-product-id="${product.id}">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                </div>
            </div>
        </div>
    `;
}

function setupProductCardDelegation() {
    const menuGrid = document.getElementById('menuGrid');
    if (menuGrid) {
        menuGrid.addEventListener('click', (e) => {
            const addBtn = e.target.closest('.add-to-cart-btn');
            if (addBtn) {
                const productId = parseInt(addBtn.dataset.productId, 10);
                addToCart(productId);
                return;
            }

            const whatsappBtn = e.target.closest('.whatsapp-btn');
            if (whatsappBtn) {
                const productId = parseInt(whatsappBtn.dataset.productId, 10);
                orderViaWhatsApp(productId);
            }
        });
    }
}

// ========================================
// INTEGRAÇÃO WHATSAPP
// ========================================
function orderViaWhatsApp(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const message = `${CONFIG.whatsappMessage}

*${product.name}*
${product.description}
Preço: ${formatPrice(product.price)}

Aguardo confirmação!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send/?phone=${CONFIG.whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`, '_blank');
}

// ========================================
// FUNÇÕES UTILITÁRIAS
// ========================================
function formatPrice(price) {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
}

// ========================================
// CONTROLES DA UI DO CARRINHO
// ========================================
function toggleCart() {
    const overlay = document.getElementById('cartOverlay');
    const sidebar = document.getElementById('cartSidebar');
    if (sidebar.classList.contains('active')) {
        closeCart();
    } else {
        openCart();
    }
}

function openCart() {
    document.getElementById('cartOverlay').classList.add('active');
    document.getElementById('cartSidebar').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartOverlay').classList.remove('active');
    document.getElementById('cartSidebar').classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// MODAL DE CHECKOUT
// ========================================
function openCheckout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    closeCart();

    const modal = document.getElementById('checkoutModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    renderCheckoutItems();
    updateCheckoutTotal();
}

function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    const pixSection = document.getElementById('pixSection');
    const paymentSection = document.getElementById('paymentOptionsSection');

    modal.classList.remove('active');
    if (pixSection) pixSection.style.display = 'none';
    if (paymentSection) paymentSection.style.display = 'block';

    document.body.style.overflow = '';
}

function renderCheckoutItems() {
    const checkoutItems = document.getElementById('checkoutItems');
    if (!checkoutItems) return;

    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span class="checkout-item-name">${item.name}</span>
            <span class="checkout-item-qty">×${item.quantity}</span>
            <span class="checkout-item-price">${formatPrice(item.price * item.quantity)}</span>
        </div>
    `).join('');
}

function updateCheckoutTotal() {
    const subtotal = getCartTotal();
    const total = subtotal + CONFIG.deliveryFee;
    const totalEl = document.getElementById('checkoutTotal');
    if (totalEl) totalEl.textContent = formatPrice(total);
}

// ========================================
// MÉTODOS DE PAGAMENTO
// ========================================
function selectPayment(method) {
    switch (method) {
        case 'pix':
            showPixPayment();
            break;
        case 'whatsapp':
            showWhatsAppForm();
            break;
        case 'pickup':
            showPickupForm();
            break;
        case 'mercadopago':
            showMercadoPagoPayment();
            break;
    }
}

function showPixPayment() {
    document.getElementById('paymentOptionsSection').style.display = 'none';
    document.getElementById('pixSection').style.display = 'block';
    generatePixPayment();
}

function backToPaymentOptions() {
    document.getElementById('paymentOptionsSection').style.display = 'block';
    document.getElementById('pixSection').style.display = 'none';
}

// ========================================
// MERCADO PAGO — CARTÃO / PIX AUTOMÁTICO
// ========================================
function showMercadoPagoPayment() {
    // Coleta dados básicos do carrinho
    const subtotal = getCartTotal();
    const total = subtotal + CONFIG.deliveryFee;

    // Mostra modal de dados antes de redirecionar
    closeCheckout();

    const modalHTML = `
        <div class="modal-overlay active" id="mpFormModal">
            <div class="modal-content" style="max-width: 480px;">
                <div class="modal-header">
                    <h2><i class="fas fa-credit-card"></i> Pagar com Cartão / PIX</h2>
                    <button class="modal-close" id="closeMpFormBtn" aria-label="Fechar"><i class="fas fa-times"></i></button>
                </div>
                <div class="modal-body" style="padding: 20px;">
                    <div class="info-section" style="margin-bottom:16px;">
                        <h3><i class="fas fa-shopping-cart"></i> Resumo</h3>
                        <div class="order-summary">
                            ${cart.map(item => `
                                <div class="order-item">
                                    <span>${item.quantity}x ${item.name}</span>
                                    <span>${formatPrice(item.price * item.quantity)}</span>
                                </div>
                            `).join('')}
                            <div class="order-item">
                                <span>Taxa de entrega</span>
                                <span>${formatPrice(CONFIG.deliveryFee)}</span>
                            </div>
                            <div class="order-total"><span>Total: ${formatPrice(total)}</span></div>
                        </div>
                    </div>
                    <form id="mpOrderForm">
                        <div class="form-group">
                            <label for="mpClientName"><i class="fas fa-user"></i> Nome Completo *</label>
                            <input type="text" id="mpClientName" required placeholder="Digite seu nome">
                        </div>
                        <div class="form-group">
                            <label for="mpClientPhone"><i class="fas fa-phone"></i> Telefone *</label>
                            <input type="tel" id="mpClientPhone" required placeholder="(88) 99999-9999">
                        </div>
                        <div class="form-group">
                            <label for="mpDeliveryAddress"><i class="fas fa-map-marker-alt"></i> Endereço de Entrega *</label>
                            <textarea id="mpDeliveryAddress" rows="3" required placeholder="Rua, número, bairro, complemento..."></textarea>
                        </div>
                        <div class="form-group">
                            <label for="mpObservations"><i class="fas fa-sticky-note"></i> Observações</label>
                            <textarea id="mpObservations" rows="2" placeholder="Alguma observação sobre o pedido?"></textarea>
                        </div>
                        <p style="font-size:0.82rem; color: var(--champagne); opacity:0.7; margin-bottom:14px;">
                            <i class="fas fa-lock"></i> Pagamento 100% seguro via Mercado Pago. Aceita cartão, PIX e boleto.
                        </p>
                        <div class="modal-footer" style="margin-top: 16px; gap: 10px; display: flex;">
                            <button type="button" class="btn btn-secondary" id="cancelMpFormBtn" style="flex:1;">
                                <i class="fas fa-times"></i> Cancelar
                            </button>
                            <button type="submit" class="btn btn-primary" id="mpSubmitBtn" style="flex:2;">
                                <i class="fas fa-credit-card"></i> Ir para Pagamento
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;

    const container = document.createElement('div');
    container.innerHTML = modalHTML;
    document.body.appendChild(container);

    document.getElementById('closeMpFormBtn').addEventListener('click', closeMpFormModal);
    document.getElementById('cancelMpFormBtn').addEventListener('click', closeMpFormModal);
    document.getElementById('mpOrderForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        await submitMercadoPagoOrder();
    });
}

function closeMpFormModal() {
    const modal = document.getElementById('mpFormModal');
    if (modal) modal.remove();
    document.body.style.overflow = '';
}

async function submitMercadoPagoOrder() {
    const clientName    = document.getElementById('mpClientName').value.trim();
    const clientPhone   = document.getElementById('mpClientPhone').value.trim();
    const deliveryAddress = document.getElementById('mpDeliveryAddress').value.trim();
    const observations  = document.getElementById('mpObservations').value.trim();

    if (!clientName || !clientPhone || !deliveryAddress) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const submitBtn = document.getElementById('mpSubmitBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Aguarde...';

    // Salva pedido no Google Sheets antes de redirecionar
    const subtotal = getCartTotal();
    const total = subtotal + CONFIG.deliveryFee;
    const orderData = {
        type: 'MERCADOPAGO',
        clientName, clientPhone, deliveryAddress, observations,
        items: cart.map(i => `${i.quantity}x ${i.name}`).join(', '),
        subtotal, deliveryFee: CONFIG.deliveryFee, total,
        paymentMethod: 'Mercado Pago',
        paymentStatus: 'Aguardando'
    };
    sendToGoogleSheets(orderData);

    try {
        const response = await fetch('/.netlify/functions/create-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items: cart,
                deliveryFee: CONFIG.deliveryFee,
                clientName, clientPhone,
                siteUrl: window.location.origin
            })
        });

        const data = await response.json();

        if (!response.ok || !data.init_point) {
            throw new Error(data.error || 'Resposta inválida do servidor');
        }

        // Limpa o carrinho e redireciona para o checkout do Mercado Pago
        cart = [];
        saveCart();
        closeMpFormModal();

        window.location.href = data.init_point;

    } catch (error) {
        console.error('Erro Mercado Pago:', error);
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-credit-card"></i> Ir para Pagamento';
        alert('Erro ao criar pagamento: ' + (error.message || 'Tente novamente ou escolha outra forma de pagamento.'));
    }
}

// ========================================
// GERAÇÃO DE PAGAMENTO PIX
// ========================================
function generatePixPayment() {
    const subtotal = getCartTotal();
    const total = subtotal + CONFIG.deliveryFee;

    const pixPayload = generatePixPayload(total);

    document.getElementById('pixValue').textContent = formatPrice(total);
    document.getElementById('pixCode').value = pixPayload;

    generateQRCode(pixPayload);
}

function generatePixPayload(amount) {
    const pixKey = CONFIG.pixKey;
    const merchantName = CONFIG.merchantName;
    const merchantCity = CONFIG.merchantCity;
    const txId = generateTxId();

    const formattedAmount = amount.toFixed(2);

    let payload = '';
    payload += buildEMVTag('00', '01');

    let merchantAccount = '';
    merchantAccount += buildEMVTag('00', 'BR.GOV.BCB.PIX');
    merchantAccount += buildEMVTag('01', pixKey);
    merchantAccount += buildEMVTag('02', txId);

    payload += buildEMVTag('26', merchantAccount);
    payload += buildEMVTag('52', '5812');
    payload += buildEMVTag('53', '986');
    payload += buildEMVTag('54', formattedAmount);
    payload += buildEMVTag('58', 'BR');
    payload += buildEMVTag('59', merchantName);
    payload += buildEMVTag('60', merchantCity);

    let additionalData = '';
    additionalData += buildEMVTag('05', txId);
    payload += buildEMVTag('62', additionalData);

    payload += '6304';
    const crc = calculateCRC16(payload);
    payload += crc;

    return payload;
}

function buildEMVTag(id, value) {
    const length = value.length.toString().padStart(2, '0');
    return id + length + value;
}

function generateTxId() {
    return 'CATTLEYA' + Date.now().toString().slice(-10);
}

function calculateCRC16(payload) {
    let crc = 0xFFFF;
    for (let i = 0; i < payload.length; i++) {
        crc ^= payload.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j++) {
            if ((crc & 0x8000) !== 0) {
                crc = (crc << 1) ^ 0x1021;
            } else {
                crc = crc << 1;
            }
        }
    }
    crc = crc & 0xFFFF;
    return crc.toString(16).toUpperCase().padStart(4, '0');
}

function generateQRCode(payload) {
    const container = document.getElementById('qrcodeContainer');
    if (!container) return;
    container.innerHTML = '';
    try {
        new QRCode(container, {
            text: payload,
            width: 256,
            height: 256,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.M
        });
    } catch (error) {
        console.error('Erro ao gerar QR Code:', error);
        container.innerHTML = '<p style="color: #dc2626;">Erro ao gerar QR Code</p>';
    }
}

function copyPixCode() {
    const pixCodeInput = document.getElementById('pixCode');
    const feedback = document.getElementById('copyFeedback');
    if (!pixCodeInput) return;

    pixCodeInput.select();
    pixCodeInput.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(pixCodeInput.value).then(() => {
        feedback.classList.add('show');
        setTimeout(() => feedback.classList.remove('show'), 3000);
    }).catch(err => {
        console.error('Erro ao copiar código PIX:', err);
        alert('Erro ao copiar código PIX');
    });
}

function confirmPixPayment() {
    const clientName = document.getElementById('pixClientName').value;
    const clientPhone = document.getElementById('pixClientPhone').value;
    const deliveryAddress = document.getElementById('pixDeliveryAddress').value;
    const observations = document.getElementById('pixObservations').value;

    if (!clientName || !clientPhone || !deliveryAddress) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const subtotal = getCartTotal();
    const deliveryFee = CONFIG.deliveryFee;
    const total = subtotal + deliveryFee;

    const orderData = {
        type: 'PIX',
        clientName,
        clientPhone,
        deliveryAddress,
        observations,
        items: cart.map(item => `${item.quantity}x ${item.name}`).join(', '),
        subtotal,
        deliveryFee,
        total,
        paymentMethod: 'PIX',
        paymentStatus: 'Pendente'
    };

    sendToGoogleSheets(orderData);
    showOrderSuccessModal('PIX', total, orderData);
    cart = [];
    saveCart();
    closeCheckout();
}

// ========================================
// ENVIO PARA GOOGLE SHEETS
// ========================================
function sendToGoogleSheets(orderData) {
    orderData.timestamp = new Date().toISOString();
    orderData.status = 'Pendente';

    fetch(CONFIG.googleSheetsWebAppUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
    }).catch(error => console.error('Erro ao enviar dados:', error));
}

// ========================================
// FORMULÁRIOS WHATSAPP E RETIRADA
// ========================================
function showWhatsAppForm(isScheduled = false) {
    showOrderForm('whatsapp', isScheduled);
}

function showPickupForm() {
    showOrderForm('pickup');
}

function showOrderForm(orderType, isScheduled = false) {
    closeCheckout();

    const subtotal = getCartTotal();
    const deliveryFee = orderType === 'whatsapp' ? CONFIG.deliveryFee : 0;
    const total = subtotal + deliveryFee;

    const modalHTML = `
        <div class="modal-overlay active" id="orderFormModal">
            <div class="modal-content" style="max-width: 500px;">
                <div class="modal-header">
                    <h2>
                        <i class="${orderType === 'whatsapp' ? 'fab fa-whatsapp' : 'fas fa-store'}"></i>
                        ${orderType === 'whatsapp' ? (isScheduled ? 'Agendar Pedido' : 'Pedido via WhatsApp') : 'Retirada no Local'}
                    </h2>
                    <button class="modal-close" id="closeOrderFormBtn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body" style="padding: 20px;">
                    <div class="info-section">
                        <h3><i class="fas fa-shopping-cart"></i> Resumo do Carrinho</h3>
                        <div class="order-summary">
                            ${cart.map(item => `
                                <div class="order-item">
                                    <span>${item.quantity}x ${item.name}</span>
                                    <span>${formatPrice(item.price * item.quantity)}</span>
                                </div>
                            `).join('')}
                            ${orderType === 'whatsapp' ? `
                                <div class="order-item">
                                    <span>Taxa de entrega</span>
                                    <span>${formatPrice(deliveryFee)}</span>
                                </div>
                            ` : ''}
                            <div class="order-total">
                                <span>Total: ${formatPrice(total)}</span>
                            </div>
                        </div>
                    </div>
                    <form id="orderForm">
                        <div class="form-group">
                            <label for="orderClientName"><i class="fas fa-user"></i> Seu Nome *</label>
                            <input type="text" id="orderClientName" required placeholder="Digite seu nome completo">
                        </div>
                        <div class="form-group">
                            <label for="orderClientPhone"><i class="fas fa-phone"></i> Telefone *</label>
                            <input type="tel" id="orderClientPhone" required placeholder="(88) 99999-9999">
                        </div>
                        ${orderType === 'whatsapp' ? `
                            <div class="form-group">
                                <label for="orderDeliveryAddress"><i class="fas fa-map-marker-alt"></i> Endereço de Entrega *</label>
                                <textarea id="orderDeliveryAddress" rows="3" required placeholder="Rua, número, bairro, complemento..."></textarea>
                            </div>
                        ` : ''}
                        ${isScheduled ? `
                            <div class="form-group">
                                <label for="orderScheduledDate"><i class="fas fa-calendar"></i> Data para Entrega/Retirada *</label>
                                <input type="date" id="orderScheduledDate" required min="${new Date().toISOString().split('T')[0]}">
                            </div>
                            <div class="form-group">
                                <label for="orderScheduledTime"><i class="fas fa-clock"></i> Horário *</label>
                                <input type="time" id="orderScheduledTime" required>
                            </div>
                        ` : ''}
                        <div class="form-group">
                            <label for="orderObservations"><i class="fas fa-sticky-note"></i> Observações</label>
                            <textarea id="orderObservations" rows="2" placeholder="Alguma observação sobre o pedido?"></textarea>
                        </div>
                        <div class="modal-footer" style="margin-top: 20px;">
                            <button type="button" class="btn btn-secondary" id="cancelOrderFormBtn" style="flex: 1;">
                                <i class="fas fa-times"></i> Cancelar
                            </button>
                            <button type="submit" class="btn btn-primary" style="flex: 2;">
                                <i class="${orderType === 'whatsapp' ? 'fab fa-whatsapp' : 'fas fa-check'}"></i>
                                ${orderType === 'whatsapp' ? (isScheduled ? 'Agendar' : 'Enviar Pedido') : 'Confirmar Retirada'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;

    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);

    // Event listeners
    document.getElementById('closeOrderFormBtn').addEventListener('click', closeOrderFormModal);
    document.getElementById('cancelOrderFormBtn').addEventListener('click', closeOrderFormModal);
    document.getElementById('orderForm').addEventListener('submit', (e) => {
        e.preventDefault();
        submitOrderForm(orderType, total, deliveryFee, isScheduled);
    });
}

function closeOrderFormModal() {
    const modal = document.getElementById('orderFormModal');
    if (modal) modal.remove();
}

function submitOrderForm(orderType, total, deliveryFee, isScheduled = false) {
    const clientName = document.getElementById('orderClientName').value;
    const clientPhone = document.getElementById('orderClientPhone').value;
    const deliveryAddress = orderType === 'whatsapp' ? document.getElementById('orderDeliveryAddress').value : 'Retirada no local';
    const observations = document.getElementById('orderObservations').value;

    let scheduledDate = null, scheduledTime = null;
    if (isScheduled) {
        scheduledDate = document.getElementById('orderScheduledDate').value;
        scheduledTime = document.getElementById('orderScheduledTime').value;
        if (!scheduledDate || !scheduledTime) {
            alert('Por favor, informe a data e horário do agendamento.');
            return;
        }
    }

    if (!clientName || !clientPhone) {
        alert('Por favor, preencha seu nome e telefone.');
        return;
    }
    if (orderType === 'whatsapp' && !deliveryAddress) {
        alert('Por favor, informe o endereço de entrega.');
        return;
    }

    const orderData = {
        type: isScheduled ? 'AGENDAMENTO' : (orderType === 'whatsapp' ? 'WHATSAPP' : 'RETIRADA'),
        clientName,
        clientPhone,
        deliveryAddress,
        scheduledDate,
        scheduledTime,
        observations,
        items: cart.map(item => `${item.quantity}x ${item.name}`).join(', '),
        subtotal: getCartTotal(),
        deliveryFee,
        total,
        paymentMethod: orderType === 'whatsapp' ? 'WhatsApp' : 'Na Retirada',
        paymentStatus: 'Pendente'
    };

    sendToGoogleSheets(orderData);

    if (orderType === 'whatsapp') {
        let message = `${CONFIG.whatsappMessage}\n\n*PEDIDO VIA SITE:*\n`;
        message += cart.map(item => `• ${item.quantity}x ${item.name}`).join('\n');
        message += `\n\n*DADOS DO CLIENTE:*\nNome: ${clientName}\nTelefone: ${clientPhone}\nEndereço: ${deliveryAddress}`;
        if (isScheduled) message += `\nAgendado para: ${scheduledDate} às ${scheduledTime}`;
        message += `\nObservações: ${observations || 'Nenhuma'}\n\n*VALOR TOTAL:* ${formatPrice(total)}\n\nPor favor, confirme o pedido!`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://api.whatsapp.com/send/?phone=${CONFIG.whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`, '_blank');
    }

    showOrderSuccessModal(orderType, total, orderData);
    closeOrderFormModal();
    cart = [];
    saveCart();
}

function showOrderSuccessModal(orderType, total, orderData) {
    const modalHTML = `
        <div class="modal-overlay active" id="successModal">
            <div class="modal-content" style="max-width: 400px;">
                <div class="modal-body" style="text-align: center; padding: 30px;">
                    <div class="success-icon" style="font-size: 5em; color: #10b981; margin-bottom: 15px;">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3 style="color: var(--color-gold-primary); margin-bottom: 10px;">Pedido Confirmado!</h3>
                    <p style="color: var(--color-champagne); margin-bottom: 20px;">
                        Seu pedido de ${formatPrice(total)} foi registrado com sucesso.
                    </p>
                    <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                        <p style="margin: 5px 0;"><i class="fas fa-receipt"></i> <strong>Número do Pedido:</strong> ${Date.now().toString().slice(-8)}</p>
                        <p style="margin: 5px 0;"><i class="fas fa-clock"></i> ${orderData.type === 'PIX' ? 'Aguardando pagamento' : 'Aguardando confirmação'}</p>
                        <p style="margin: 5px 0;"><i class="fas fa-phone"></i> ${CONFIG.restaurantPhone}</p>
                    </div>
                    <button class="btn btn-primary" id="closeSuccessBtn" style="width: 100%;">
                        <i class="fas fa-home"></i> Voltar ao Início
                    </button>
                </div>
            </div>
        </div>
    `;

    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    document.getElementById('closeSuccessBtn').addEventListener('click', closeSuccessModal);
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) modal.remove();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// VERIFICAÇÃO DE HORÁRIO E BLOQUEIO
// ========================================
function isWithinBusinessHours() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    if (day >= 1 && day <= 5) {
        return hour >= CONFIG.businessHours.weekdays.start && hour < CONFIG.businessHours.weekdays.end;
    } else {
        return hour >= CONFIG.businessHours.weekend.start && hour < CONFIG.businessHours.weekend.end;
    }
}

function disableOrdering() {
    document.querySelectorAll('.add-to-cart-btn, .whatsapp-btn').forEach(btn => {
        btn.disabled = true;
        btn.classList.add('disabled');
        btn.setAttribute('title', 'Pedidos apenas no horário de funcionamento');
    });

    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        whatsappFloat.classList.add('disabled');
        whatsappFloat.setAttribute('aria-disabled', 'true');
        whatsappFloat.removeAttribute('href');
    }

    const checkoutBtn = document.querySelector('.cart-actions .btn-primary');
    if (checkoutBtn) {
        checkoutBtn.disabled = true;
        checkoutBtn.classList.add('disabled');
    }
}

function enableOrdering() {
    document.querySelectorAll('.add-to-cart-btn, .whatsapp-btn').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('disabled');
        btn.removeAttribute('title');
    });

    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        whatsappFloat.classList.remove('disabled');
        whatsappFloat.removeAttribute('aria-disabled');
        whatsappFloat.setAttribute('href', `https://api.whatsapp.com/send/?phone=${CONFIG.whatsappNumber}&text&type=phone_number&app_absent=0`);
    }

    const checkoutBtn = document.querySelector('.cart-actions .btn-primary');
    if (checkoutBtn) {
        checkoutBtn.disabled = false;
        checkoutBtn.classList.remove('disabled');
    }
}

// ========================================
// POPUP LATERAL (CRO)
// ========================================
function initPopup() {
    const popup = document.getElementById('croPopup');
    if (!popup) return;

    const body = popup.querySelector('.popup-body');
    const closeBtn = popup.querySelector('.popup-close');

    if (isWithinBusinessHours()) {
        body.innerHTML = `
            <div class="popup-icon">🎁</div>
            <h4>15% OFF no primeiro pedido!</h4>
            <p>Aproveite agora mesmo.</p>
            <a href="cardapio.html" class="btn btn-primary btn-small">Ver Cardápio</a>
        `;
    } else {
        body.innerHTML = `
            <div class="popup-icon">⏰</div>
            <h4>Estamos fechados no momento</h4>
            <p>Nosso horário: Seg–Sex 9h–23h, Sáb–Dom 11h–23h.</p>
            <button class="btn btn-secondary btn-small" id="scheduleOrderBtn">Agendar Pedido</button>
        `;
        const scheduleBtn = body.querySelector('#scheduleOrderBtn');
        if (scheduleBtn) {
            scheduleBtn.addEventListener('click', () => {
                closeCart();
                showWhatsAppForm(true);
            });
        }
    }

    setTimeout(() => popup.classList.add('active'), 2000);

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        popup.classList.remove('active');
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) popup.classList.remove('active');
    });
}

// ========================================
// ANIMAÇÕES NOS BOTÕES
// ========================================
function initCartIconAnimation() {
    const cartIcon = document.getElementById('cartIcon');
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            cartIcon.classList.add('pulse');
            setTimeout(() => cartIcon.classList.remove('pulse'), 300);
            toggleCart();
        });
    }
}

function initCartCloseAnimation() {
    const cartClose = document.getElementById('cartClose');
    if (cartClose) {
        cartClose.addEventListener('click', (e) => {
            e.preventDefault();
            cartClose.classList.add('rotate');
            setTimeout(() => cartClose.classList.remove('rotate'), 300);
            closeCart();
        });
    }
}

// ========================================
// REMOVER ONCLICK INLINE E ADICIONAR LISTENERS
// ========================================
function removeInlineOnClicks() {
    // Botões que ainda possuíam onclick no HTML original
    const cartEmptyBtn = document.querySelector('#cartEmpty .btn');
    if (cartEmptyBtn) cartEmptyBtn.removeAttribute('onclick');

    const modalCloseBtn = document.querySelector('.modal-close');
    if (modalCloseBtn) modalCloseBtn.removeAttribute('onclick');

    const paymentBtns = document.querySelectorAll('.payment-btn');
    paymentBtns.forEach(btn => btn.removeAttribute('onclick'));

    const backBtn = document.querySelector('.back-btn');
    if (backBtn) backBtn.removeAttribute('onclick');

    const copyBtn = document.querySelector('.btn-copy');
    if (copyBtn) copyBtn.removeAttribute('onclick');

    const confirmPixBtn = document.querySelector('.btn-success');
    if (confirmPixBtn) confirmPixBtn.removeAttribute('onclick');
}

function setupStaticEventListeners() {
    const checkoutBtn = document.querySelector('.cart-actions .btn-primary');
    if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);

    const clearCartBtn = document.querySelector('.cart-actions .btn-secondary');
    if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);

    const cartEmptyBtn = document.querySelector('#cartEmpty .btn');
    if (cartEmptyBtn) cartEmptyBtn.addEventListener('click', closeCart);

    const modalCloseBtn = document.querySelector('.modal-close');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCheckout);

    const paymentBtns = document.querySelectorAll('.payment-btn');
    paymentBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const method = btn.dataset.method || 
                (btn.querySelector('.fab.fa-pix') ? 'pix' :
                 btn.querySelector('.fab.fa-whatsapp') ? 'whatsapp' : 'pickup');
            selectPayment(method);
        });
    });

    const backBtn = document.querySelector('.back-btn');
    if (backBtn) backBtn.addEventListener('click', backToPaymentOptions);

    const copyBtn = document.querySelector('.btn-copy');
    if (copyBtn) copyBtn.addEventListener('click', copyPixCode);

    const confirmPixBtn = document.querySelector('.btn-success');
    if (confirmPixBtn) confirmPixBtn.addEventListener('click', confirmPixPayment);
}

// ========================================
// ANIMAÇÕES CSS
// ========================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ========================================
// INICIALIZAÇÃO PRINCIPAL
// ========================================
function init() {
    console.log('Cattleya Food - Inicializando...');

    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initMenuFilters();
    loadCart();
    setupCartDelegation();
    setupProductCardDelegation();

    if (isWithinBusinessHours()) {
        enableOrdering();
    } else {
        disableOrdering();
    }

    initPopup();
    initCartIconAnimation();
    initCartCloseAnimation();
    removeInlineOnClicks();
    setupStaticEventListeners();

    // Renderização padrão (sem filtro) – será sobrescrita por página específica se necessário
    renderProducts();

    console.log('Cattleya Food - Inicialização completa!');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ========================================
// EXPOSIÇÃO GLOBAL (para compatibilidade)
// ========================================
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.clearCart = clearCart;
window.toggleCart = toggleCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.selectPayment = selectPayment;
window.backToPaymentOptions = backToPaymentOptions;
window.copyPixCode = copyPixCode;
window.confirmPixPayment = confirmPixPayment;
window.orderViaWhatsApp = orderViaWhatsApp;
window.closeOrderFormModal = closeOrderFormModal;
window.submitOrderForm = submitOrderForm;
window.closeSuccessModal = closeSuccessModal;
window.showWhatsAppForm = showWhatsAppForm;
window.showPickupForm = showPickupForm;
window.renderProducts = renderProducts;
window.showMercadoPagoPayment = showMercadoPagoPayment;
window.closeMpFormModal = closeMpFormModal;