/**
 * ============================================================================
 * NORA — FOTOGRAFÍA FELINA — APPLICATION LOGIC (app.js)
 * Single Page Application (SPA), E-commerce Cart, Fear-Free Booking & Blog System
 * Con fotografías reales de Nora (la gata gris musa e inspiración).
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. DATA SOURCES: PRODUCTS & BLOG ARTICLES CON FOTOS REALES DE NORA
  // --------------------------------------------------------------------------

  const PRODUCTS_DATA = [
    {
      id: 'prod-1',
      title: 'Lámina Fine Art: La Mirada de Nora',
      category: 'laminas',
      categoryLabel: 'Láminas Fine Art',
      basePrice: 18000,
      image: 'assets/img/nora-hero.jpg',
      badge: 'Foto Real • Edición Limitada',
      isFeatured: true,
      excerpt: 'Retrato icónico de Nora con su mirada cautivadora y su pelaje gris aterciopelado en papel algodón Hahnemühle.',
      description: 'Esta fotografía captura la mirada profunda y tierna de Nora, la única gata gris de su camada que conquistó nuestro corazón desde el primer día. Impresa en papel de museo 100% algodón libre de ácido de 310g con tintas minerales de conservación garantizadas por más de 80 años.',
      hasFrameOption: true,
      sizes: [
        { label: 'A4 (21x30 cm)', priceAdd: 0, code: 'A4' },
        { label: 'A3 (30x42 cm)', priceAdd: 10000, code: 'A3' },
        { label: '50x70 cm (Galería)', priceAdd: 22000, code: '50x70' }
      ]
    },
    {
      id: 'prod-2',
      title: 'Cuadro Enmarcado: Nora Curiosa & Expresiva',
      category: 'cuadros',
      categoryLabel: 'Cuadros Enmarcados',
      basePrice: 48000,
      image: 'assets/img/nora-fineart.jpg',
      badge: 'Más Vendido ⭐',
      isFeatured: true,
      excerpt: 'Fotografía enmarcada con moldura artesanal de roble macizo y paspartú de conservación, lista para colgar.',
      description: 'Nora explorando con su patita extendida y sus grandes ojos ámbar llenos de curiosidad. El enmarcado de alta gama incluye moldura de madera noble chilena, vidrio antirreflejo y respaldo hermético contra humedad.',
      hasFrameOption: true,
      sizes: [
        { label: '30x40 cm (Enmarcado)', priceAdd: 0, code: '30x40' },
        { label: '50x70 cm (Enmarcado)', priceAdd: 20000, code: '50x70' },
        { label: '60x90 cm (Gran Formato)', priceAdd: 38000, code: '60x90' }
      ]
    },
    {
      id: 'prod-3',
      title: 'Photobook de Colección: De Cachorra a Reina',
      category: 'papeleria',
      categoryLabel: 'Photobooks & Papelería',
      basePrice: 38000,
      image: 'assets/img/nora-photobook.jpg',
      badge: 'Tapa Dura Lino',
      isFeatured: true,
      excerpt: 'Libro fotográfico con la historia de adopción de Nora, desde que era del tamaño de una mano hasta hoy.',
      description: 'Un álbum emotivo con más de 80 fotografías que documentan la vida de Nora: su llegada en febrero, sus siestas en mantas de estrellas y cómo se convirtió en la reina de la casa. Impreso en papel couché mate de 200g con tapa dura forrada en lino.',
      hasFrameOption: false,
      sizes: [
        { label: 'Edición Estándar (21x21 cm)', priceAdd: 0, code: 'STD' },
        { label: 'Edición Deluxe con Estuche', priceAdd: 14000, code: 'DELUXE' }
      ]
    },
    {
      id: 'prod-4',
      title: 'Set de 6 Postales: Las Siestas de Nora',
      category: 'papeleria',
      categoryLabel: 'Photobooks & Papelería',
      basePrice: 12000,
      image: 'assets/img/nora-kitten-sleeping.jpg',
      badge: 'Papelería Fina',
      isFeatured: false,
      excerpt: 'Seis postales de alta densidad con Nora durmiendo como humana en la almohada y momentos tiernos.',
      description: 'Impresas en cartulina texturada italiana de 350g con esquinas redondeadas. Incluye sobres en papel kraft reciclado. Ideales para enmarcar en pequeños marcos o dedicar a otros amantes de los gatos.',
      hasFrameOption: false,
      sizes: [
        { label: 'Pack de 6 Postales (10x15 cm)', priceAdd: 0, code: 'PACK6' },
        { label: 'Pack de 12 Postales Variadas', priceAdd: 8000, code: 'PACK12' }
      ]
    },
    {
      id: 'prod-5',
      title: 'Sesión Fotográfica: Hogar Dulce Hogar (Domicilio)',
      category: 'sesiones',
      categoryLabel: 'Sesiones & Gift Cards',
      basePrice: 95000,
      image: 'assets/img/nora-cozy.jpg',
      badge: 'Fear-Free ⭐',
      isFeatured: true,
      excerpt: 'Sesión de 2 horas en la tranquilidad de tu hogar con luces continuas suaves y cuadro 30x40 cm de regalo.',
      description: 'La opción perfecta para gatos tímidos. Nos trasladamos a tu domicilio con luces continuas cálidas (sin flashes molestos), feromonas Feliway y premios para que tu felino disfrute siendo retratado en sus rincones favoritos.',
      hasFrameOption: false,
      sizes: [
        { label: '1 Gato + Familia', priceAdd: 0, code: '1CAT' },
        { label: '2 a 3 Gatos (+10 fotos extra)', priceAdd: 20000, code: 'MULTICAT' }
      ]
    },
    {
      id: 'prod-6',
      title: 'Gift Card Digital: Sesión Fotográfica de Regalo',
      category: 'sesiones',
      categoryLabel: 'Sesiones & Gift Cards',
      basePrice: 65000,
      image: 'assets/img/nora-blanket.jpg',
      badge: 'Vale Canjeable',
      isFeatured: false,
      excerpt: 'Regala una experiencia fotográfica inolvidable a un tutor de gatos con vigencia de 6 meses.',
      description: 'El vale digital se envía personalizado con el nombre del agasajado y su felino. Puede canjearse para sesiones en estudio, a domicilio o descontarse en compras de cuadros enmarcados.',
      hasFrameOption: false,
      sizes: [
        { label: 'Vale Retrato Esencial ($65.000)', priceAdd: 0, code: 'GIFT65' },
        { label: 'Vale Hogar Dulce Hogar ($95.000)', priceAdd: 30000, code: 'GIFT95' }
      ]
    }
  ];

  const BLOG_ARTICLES_DATA = [
    {
      id: 'art-1',
      title: 'Cómo lograr que un gato tímido disfrute una sesión de fotos sin estrés ni forzarlo',
      category: 'bienestar',
      categoryLabel: 'Bienestar & Fear-Free',
      readTime: '5 min de lectura',
      date: '12 de Octubre, 2026',
      author: 'Caro Cromática • Fotógrafa',
      image: 'assets/img/nora-kitten-cozy.jpg',
      isFeatured: true,
      excerpt: 'La paciencia y el respeto al espacio personal son la clave. Te compartimos nuestro protocolo con feromonas, luz continua y pausas.',
      body: `
        <p>Los gatos son animales territoriales con una sensibilidad sensorial asombrosa. Cuando un desconocido entra a su hogar con objetos extraños o cuando son transportados a un entorno ajeno, su primera reacción biológica es la cautela.</p>
        
        <h3>1. La regla de oro: Cero contacto en los primeros 30 minutos</h3>
        <p>Al llegar a un domicilio o recibir a un gato en el estudio, no intentamos acariciarlo ni le hablamos con entusiasmo desmedido. Dejamos las cajas del equipo en el suelo para que las olfatee a su ritmo mientras conversamos tranquilamente con su tutor sentados en el piso.</p>
        
        <blockquote>
          "Un gato nunca posa por orden; posa cuando se siente tan seguro que olvida que la cámara existe."
        </blockquote>

        <h3>2. Iluminación continua en lugar de flashes repentinos</h3>
        <p>Los flashes tradicionales generan un destello de microsegundos que dilata y contrae la pupila felina bruscamente, provocando sobresaltos. En Nora Fotografía utilizamos paneles LED de luz difusa y temperatura cálida que simulan la luz de una tarde soleada.</p>

        <h3>3. Premios de alto valor y enriquecimiento</h3>
        <p>La pasta de malta cremosa y los juguetes de plumas ligeras nos ayudan a guiar la mirada del felino hacia los puntos de luz sin necesidad de moverlo físicamente de su lugar de confort.</p>
      `,
      comments: [
        {
          author: 'Valentina Ramos',
          cat: 'Olivia',
          date: '13 Oct 2026',
          text: '¡Doy fe de esto! Caro esperó con toda la calma del mundo a Olivia y los resultados fueron mágicos.'
        },
        {
          author: 'Martín Silva',
          cat: 'Bigotes',
          date: '14 Oct 2026',
          text: 'Muy buen artículo. No sabía lo de la diferencia entre flash y luz continua, tiene todo el sentido del mundo.'
        }
      ]
    },
    {
      id: 'art-2',
      title: '5 trucos de iluminación natural para capturar la mirada dorada de tu gato con tu móvil',
      category: 'fotografia',
      categoryLabel: 'Consejos de Fotografía',
      readTime: '4 min de lectura',
      date: '8 de Octubre, 2026',
      author: 'Caro Cromática • Fotógrafa',
      image: 'assets/img/nora-hero.jpg',
      isFeatured: false,
      excerpt: 'Aprende a ubicar a tu felino respecto a la ventana para conseguir ese brillo mágico en sus ojos sin encender el flash.',
      body: `
        <p>¿Alguna vez has intentado fotografiar a tu gato con el móvil y los ojos le salieron brillantes o verdes como faros? El problema es el flash directo. Aquí te enseñamos a usar la luz natural de tu ventana como una auténtica caja de luz profesional.</p>
        <h3>1. Iluminación lateral a 45 grados</h3>
        <p>Coloca su rascador o manta favorita de modo que la luz entre suavemente por un costado. Esto resaltará la textura de su pelaje gris y creará un catchlight (brillo reflejado) hermoso en su iris.</p>
        <h3>2. Agáchate a su altura de ojos</h3>
        <p>Las mejores fotos de gatos se toman a ras de suelo. Al bajar la cámara a la altura de su cabeza, el espectador entra de lleno a su universo íntimo y curioso.</p>
      `,
      comments: [
        {
          author: 'Camila Larraín',
          cat: 'Mochi',
          date: '9 Oct 2026',
          text: '¡Probé el truco de la ventana y la foto de Mochi quedó preciosa para fondo de pantalla!'
        }
      ]
    },
    {
      id: 'art-3',
      title: 'Cómo integrar cuadros de tus gatos en una decoración nórdica y moderna',
      category: 'decoracion',
      categoryLabel: 'Decoración & Arte',
      readTime: '6 min de lectura',
      date: '3 de Octubre, 2026',
      author: 'Valentina Ramos • Diseñadora',
      image: 'assets/img/nora-fineart.jpg',
      isFeatured: false,
      excerpt: 'Guía práctica para crear un collage de pared o muro de galería combinando marcos de roble y plantas.',
      body: `
        <p>Tener cuadros de nuestros animales en casa no tiene por qué verse desordenado ni infantil. Con la paleta adecuada de maderas y paspartús neutros, el retrato de tu felino se transforma en la pieza central de tu salón.</p>
        <h3>El poder de los tonos orgánicos</h3>
        <p>Combina marcos de roble claro con paredes en tonos arena o beige cálido. Añade plantas de interior como pothos o monstera para crear una atmósfera viva y armoniosa.</p>
      `,
      comments: []
    },
    {
      id: 'art-4',
      title: 'De gata adoptada a musa: La verdadera historia de Nora',
      category: 'historias',
      categoryLabel: 'Historias de Nora',
      readTime: '7 min de lectura',
      date: '28 de Septiembre, 2026',
      author: 'Caro Cromática',
      image: 'assets/img/nora-kitten-horizontal.jpg',
      isFeatured: false,
      excerpt: 'Nora llegó en febrero, adoptada en Facebook siendo la única gris de 6 hermanos. Del tamaño de una mano a dueña de casa.',
      body: `
        <p>Nora llegó a nuestras vidas en febrero, un día muy caluroso de verano. Fue adoptada a través de Facebook, siendo la única de su camada en tener un color gris entre 6 hermanos. Desde el primer instante en que vi su foto, su mirada cautivó mi atención por completo y su forma de ser hizo que me enamorara de ella al segundo.</p>
        <p>Cuando llegó el primer día era diminuta, cabía exactamente en la palma de mi mano. Durante el viaje maullaba sin entender hacia dónde iba, pero en cuanto cruzó la puerta de la casa, se sintió inmediatamente en su hogar: recorrió cada rincón con paso firme como si siempre hubiera sido su dueña.</p>
        <p>Esa valentía, su ternura durmiendo estirada en la almohada y su personalidad única inspiraron cada fotografía y dieron vida a este estudio.</p>
      `,
      comments: [
        {
          author: 'Diego Morales',
          cat: 'Milo',
          date: '30 Sep 2026',
          text: 'Una historia hermosa y real que emociona. ¡Qué linda era Nora de cachorrita!'
        }
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // 2. APPLICATION STATE
  // --------------------------------------------------------------------------

  let state = {
    cart: JSON.parse(localStorage.getItem('nora_cart_items')) || [],
    promoCode: localStorage.getItem('nora_promo_code') || '',
    discountPercent: 0,
    shippingDestination: 'rm',
    activeCategory: 'todos',
    searchQuery: '',
    sortBy: 'destacados',
    activeBlogCat: 'todos',
    selectedModalProduct: null,
    modalSelectedSize: null,
    modalSelectedFrame: 'Sin Marco',
    modalQty: 1,
    activeReadingArticle: null
  };

  if (state.promoCode.toUpperCase() === 'NORA10') {
    state.discountPercent = 10;
  }

  // --------------------------------------------------------------------------
  // 3. ROUTING & VIEW NAVIGATION
  // --------------------------------------------------------------------------

  const views = {
    'inicio': document.getElementById('view-inicio'),
    'tienda': document.getElementById('view-tienda'),
    'blog': document.getElementById('view-blog'),
    'contacto': document.getElementById('view-contacto'),
    'faq': document.getElementById('view-contacto'),
    'sobre-nora': document.getElementById('view-inicio'),
    'reserva': document.getElementById('view-inicio'),
    'galeria-nora': document.getElementById('view-inicio'),
    'view-legales': document.getElementById('view-legales')
  };

  function navigateTo(hashTarget) {
    let cleanHash = (hashTarget || window.location.hash || '#inicio').replace('#', '');
    if (!cleanHash) cleanHash = 'inicio';

    document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
      const linkNav = link.getAttribute('data-nav');
      if (linkNav === cleanHash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    Object.keys(views).forEach(key => {
      const el = views[key];
      if (el) el.classList.remove('active');
    });

    if (cleanHash === 'inicio' || cleanHash === 'sobre-nora' || cleanHash === 'reserva' || cleanHash === 'galeria-nora') {
      if (views['inicio']) views['inicio'].classList.add('active');
      if (cleanHash === 'reserva') {
        const resEl = document.getElementById('reserva');
        if (resEl) setTimeout(() => resEl.scrollIntoView({ behavior: 'smooth' }), 100);
      } else if (cleanHash === 'sobre-nora') {
        const aboutEl = document.getElementById('sobre-nora');
        if (aboutEl) setTimeout(() => aboutEl.scrollIntoView({ behavior: 'smooth' }), 100);
      } else if (cleanHash === 'galeria-nora') {
        const galEl = document.getElementById('galeria-nora');
        if (galEl) setTimeout(() => galEl.scrollIntoView({ behavior: 'smooth' }), 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (cleanHash === 'tienda') {
      if (views['tienda']) views['tienda'].classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cleanHash === 'blog') {
      if (views['blog']) views['blog'].classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cleanHash === 'contacto' || cleanHash === 'faq') {
      if (views['contacto']) views['contacto'].classList.add('active');
      if (cleanHash === 'faq') {
        const faqEl = document.getElementById('faq');
        if (faqEl) setTimeout(() => faqEl.scrollIntoView({ behavior: 'smooth' }), 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (cleanHash === 'terminos' || cleanHash === 'privacidad' || cleanHash === 'view-legales') {
      if (views['view-legales']) views['view-legales'].classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (views['inicio']) views['inicio'].classList.add('active');
    }

    closeMobileDrawer();
  }

  window.addEventListener('hashchange', () => {
    navigateTo(window.location.hash);
  });

  // --------------------------------------------------------------------------
  // 4. MOBILE DRAWER & NAVIGATION EVENTS
  // --------------------------------------------------------------------------

  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerClose = document.getElementById('mobile-drawer-close');

  function openMobileDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
  }

  function closeMobileDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
  }

  if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openMobileDrawer);
  if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeMobileDrawer);

  // --------------------------------------------------------------------------
  // 5. HELPER FORMATTERS
  // --------------------------------------------------------------------------

  function formatCLP(amount) {
    return '$' + Math.round(amount).toLocaleString('es-CL');
  }

  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${type === 'success' ? '🐾' : 'ℹ️'}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // --------------------------------------------------------------------------
  // 6. RENDER PRODUCTS (LANDING & STORE)
  // --------------------------------------------------------------------------

  function renderLandingFeaturedProducts() {
    const container = document.getElementById('landing-featured-grid');
    if (!container) return;

    const featured = PRODUCTS_DATA.filter(p => p.isFeatured).slice(0, 3);
    container.innerHTML = featured.map(p => createProductCardHTML(p)).join('');
    bindProductCardEvents(container);
  }

  function renderStoreProducts() {
    const container = document.getElementById('store-products-grid');
    const counter = document.getElementById('store-results-count');
    if (!container) return;

    let filtered = PRODUCTS_DATA.filter(p => {
      const matchesCat = state.activeCategory === 'todos' || p.category === state.activeCategory;
      const q = state.searchQuery.toLowerCase().trim();
      const matchesSearch = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.categoryLabel.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });

    if (state.sortBy === 'precio-menor') {
      filtered.sort((a, b) => a.basePrice - b.basePrice);
    } else if (state.sortBy === 'precio-mayor') {
      filtered.sort((a, b) => b.basePrice - a.basePrice);
    } else if (state.sortBy === 'alfabetico') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (counter) {
      counter.textContent = `Mostrando ${filtered.length} de ${PRODUCTS_DATA.length} obras reales de Nora`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; background: var(--color-surface); border-radius: 16px;">
          <p style="font-size: 2rem; margin-bottom: 8px;">😿</p>
          <h3 style="font-family: var(--font-display); color: var(--color-secondary); margin-bottom: 8px;">No encontramos obras con esa búsqueda</h3>
          <p style="color: var(--color-on-surface-variant); font-size: 0.9rem; margin-bottom: 16px;">Intenta con otros términos o limpia los filtros.</p>
          <button id="reset-filters-btn" class="btn btn-secondary btn-sm">Ver todas las obras de Nora</button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.activeCategory = 'todos';
          state.searchQuery = '';
          const searchIn = document.getElementById('store-search-input');
          if (searchIn) searchIn.value = '';
          document.querySelectorAll('#store-category-filters .filter-pill').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-category') === 'todos');
          });
          renderStoreProducts();
        });
      }
      return;
    }

    container.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
    bindProductCardEvents(container);
  }

  function createProductCardHTML(product) {
    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-media-wrap" data-action="open-modal">
          <img src="${product.image}" alt="${product.title}" class="product-thumb" loading="lazy">
          <div class="product-badge-overlay">
            <span class="badge-tag ${product.badge.includes('Fear-Free') || product.badge.includes('Más') || product.badge.includes('Real') ? 'badge-offer' : ''}">
              ${product.badge}
            </span>
          </div>
        </div>
        <div class="product-info">
          <span class="product-category-meta">${product.categoryLabel}</span>
          <h3 class="product-title" data-action="open-modal">${product.title}</h3>
          <p class="product-excerpt">${product.excerpt}</p>
          <div class="product-footer">
            <div class="product-price-box">
              <span class="price-label">Desde</span>
              <span class="price-val">${formatCLP(product.basePrice)} <small style="font-size:0.75rem;">CLP</small></span>
            </div>
            <button class="btn btn-primary btn-card-buy" data-action="open-modal">
              Ver Formatos
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function bindProductCardEvents(container) {
    container.querySelectorAll('.product-card').forEach(card => {
      const prodId = card.getAttribute('data-product-id');
      const product = PRODUCTS_DATA.find(p => p.id === prodId);
      if (!product) return;

      card.querySelectorAll('[data-action="open-modal"]').forEach(trigger => {
        trigger.addEventListener('click', () => {
          openProductModal(product);
        });
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. PRODUCT DETAIL MODAL
  // --------------------------------------------------------------------------

  const productModal = document.getElementById('product-modal');
  const productModalClose = document.getElementById('product-modal-close');

  function openProductModal(product) {
    state.selectedModalProduct = product;
    state.modalSelectedSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : { label: 'Único', priceAdd: 0, code: 'STD' };
    state.modalSelectedFrame = 'Sin Marco';
    state.modalQty = 1;

    const imgEl = document.getElementById('modal-product-img');
    const catEl = document.getElementById('modal-product-category');
    const titleEl = document.getElementById('modal-product-title');
    const descEl = document.getElementById('modal-product-desc');
    const badgeContainer = document.getElementById('modal-product-badge-container');
    const waConsultBtn = document.getElementById('modal-whatsapp-consult-btn');

    if (imgEl) imgEl.src = product.image;
    if (catEl) catEl.textContent = product.categoryLabel;
    if (titleEl) titleEl.textContent = product.title;
    if (descEl) descEl.textContent = product.description;

    if (badgeContainer) {
      badgeContainer.innerHTML = `<span class="badge-tag">${product.badge}</span>`;
    }

    if (waConsultBtn) {
      const waMsg = encodeURIComponent(`Hola! Quisiera consultar detalles sobre la fotografía real "${product.title}" de Nora Fotografía.`);
      waConsultBtn.href = `https://wa.me/56912345678?text=${waMsg}`;
    }

    const sizeContainer = document.getElementById('modal-size-chips');
    const sizeSection = document.getElementById('variant-size-section');
    if (sizeContainer && sizeSection) {
      if (product.sizes && product.sizes.length > 0) {
        sizeSection.style.display = 'block';
        sizeContainer.innerHTML = product.sizes.map((s, idx) => `
          <button class="variant-chip ${idx === 0 ? 'active' : ''}" data-size-code="${s.code}" data-price-add="${s.priceAdd}">
            ${s.label} ${s.priceAdd > 0 ? '(+' + formatCLP(s.priceAdd) + ')' : ''}
          </button>
        `).join('');

        sizeContainer.querySelectorAll('.variant-chip').forEach(chip => {
          chip.addEventListener('click', () => {
            sizeContainer.querySelectorAll('.variant-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const code = chip.getAttribute('data-size-code');
            state.modalSelectedSize = product.sizes.find(s => s.code === code);
            updateModalPrice();
          });
        });
      } else {
        sizeSection.style.display = 'none';
      }
    }

    const frameSection = document.getElementById('variant-frame-section');
    const frameContainer = document.getElementById('modal-frame-chips');
    if (frameSection && frameContainer) {
      if (product.hasFrameOption) {
        frameSection.style.display = 'block';
        frameContainer.querySelectorAll('.variant-chip').forEach(chip => {
          chip.classList.toggle('active', chip.getAttribute('data-frame') === 'Sin Marco');
          chip.onclick = () => {
            frameContainer.querySelectorAll('.variant-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            state.modalSelectedFrame = chip.getAttribute('data-frame');
            updateModalPrice();
          };
        });
      } else {
        frameSection.style.display = 'none';
      }
    }

    const qtyDisplay = document.getElementById('modal-qty-display');
    if (qtyDisplay) qtyDisplay.textContent = state.modalQty;

    updateModalPrice();

    if (productModal) {
      productModal.classList.add('open');
      productModal.setAttribute('aria-hidden', 'false');
    }
  }

  function calculateCurrentModalPrice() {
    if (!state.selectedModalProduct) return 0;
    let price = state.selectedModalProduct.basePrice;
    if (state.modalSelectedSize && state.modalSelectedSize.priceAdd) {
      price += state.modalSelectedSize.priceAdd;
    }
    if (state.selectedModalProduct.hasFrameOption) {
      if (state.modalSelectedFrame === 'Roble Natural') price += 18000;
      else if (state.modalSelectedFrame === 'Negro Satinado') price += 15000;
    }
    return price;
  }

  function updateModalPrice() {
    const priceDisplay = document.getElementById('modal-product-price');
    if (priceDisplay) {
      const unitPrice = calculateCurrentModalPrice();
      priceDisplay.innerHTML = `${formatCLP(unitPrice * state.modalQty)} <span class="currency">CLP</span>`;
    }
  }

  function closeProductModal() {
    if (productModal) {
      productModal.classList.remove('open');
      productModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (productModalClose) productModalClose.addEventListener('click', closeProductModal);
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }

  const qtyMinus = document.getElementById('modal-qty-minus');
  const qtyPlus = document.getElementById('modal-qty-plus');
  const qtyDisplay = document.getElementById('modal-qty-display');

  if (qtyMinus) {
    qtyMinus.addEventListener('click', () => {
      if (state.modalQty > 1) {
        state.modalQty--;
        if (qtyDisplay) qtyDisplay.textContent = state.modalQty;
        updateModalPrice();
      }
    });
  }

  if (qtyPlus) {
    qtyPlus.addEventListener('click', () => {
      state.modalQty++;
      if (qtyDisplay) qtyDisplay.textContent = state.modalQty;
      updateModalPrice();
    });
  }

  const modalAddToCartBtn = document.getElementById('modal-add-to-cart-btn');
  if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener('click', () => {
      if (!state.selectedModalProduct) return;
      const unitPrice = calculateCurrentModalPrice();
      const variantDesc = `${state.modalSelectedSize ? state.modalSelectedSize.label : ''} ${state.selectedModalProduct.hasFrameOption ? '• ' + state.modalSelectedFrame : ''}`.trim();

      addItemToCart({
        id: `${state.selectedModalProduct.id}-${state.modalSelectedSize ? state.modalSelectedSize.code : 'std'}-${state.modalSelectedFrame.replace(/\s+/g, '')}`,
        title: state.selectedModalProduct.title,
        price: unitPrice,
        variant: variantDesc,
        image: state.selectedModalProduct.image,
        qty: state.modalQty
      });

      closeProductModal();
      openCartDrawer();
      showToast(`¡"${state.selectedModalProduct.title}" agregado al carrito! 🐾`);
    });
  }

  // --------------------------------------------------------------------------
  // 8. SHOPPING CART LOGIC & PERSISTENCE
  // --------------------------------------------------------------------------

  const cartDrawer = document.getElementById('cart-drawer');
  const cartBackdrop = document.getElementById('cart-backdrop');
  const cartDrawerClose = document.getElementById('cart-drawer-close');
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const cartBadge = document.getElementById('cart-count-badge');

  function openCartDrawer() {
    if (cartDrawer) cartDrawer.classList.add('open');
    if (cartBackdrop) cartBackdrop.classList.add('open');
    renderCart();
  }

  function closeCartDrawer() {
    if (cartDrawer) cartDrawer.classList.remove('open');
    if (cartBackdrop) cartBackdrop.classList.remove('open');
  }

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCartDrawer);
  if (cartDrawerClose) cartDrawerClose.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);

  function saveCart() {
    localStorage.setItem('nora_cart_items', JSON.stringify(state.cart));
    updateCartCountBadge();
  }

  function updateCartCountBadge() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartBadge) cartBadge.textContent = totalCount;
  }

  function addItemToCart(item) {
    const existingIndex = state.cart.findIndex(i => i.id === item.id);
    if (existingIndex > -1) {
      state.cart[existingIndex].qty += item.qty;
    } else {
      state.cart.push(item);
    }
    saveCart();
    renderCart();
  }

  function removeCartItem(itemId) {
    state.cart = state.cart.filter(i => i.id !== itemId);
    saveCart();
    renderCart();
    showToast('Producto eliminado del carrito', 'info');
  }

  function updateItemQty(itemId, delta) {
    const item = state.cart.find(i => i.id === itemId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      removeCartItem(itemId);
    } else {
      saveCart();
      renderCart();
    }
  }

  function renderCart() {
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal-display');
    const discountRow = document.getElementById('cart-discount-row');
    const discountEl = document.getElementById('cart-discount-display');
    const shippingEl = document.getElementById('cart-shipping-display');
    const totalEl = document.getElementById('cart-total-display');
    const progressBar = document.getElementById('shipping-progress-bar');
    const progressText = document.getElementById('shipping-progress-text');

    if (!container) return;

    if (state.cart.length === 0) {
      container.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon">🐾</div>
          <h4 style="font-family: var(--font-display); color: var(--color-secondary); margin-bottom: 6px;">Tu carrito está vacío</h4>
          <p style="font-size: 0.85rem; color: var(--color-on-surface-variant); margin-bottom: 16px;">Descubre nuestras láminas Fine Art y dale a tu hogar un toque felino de autor.</p>
          <button class="btn btn-primary btn-sm" id="cart-go-store-btn">Explorar Galería</button>
        </div>
      `;
      const goStore = document.getElementById('cart-go-store-btn');
      if (goStore) {
        goStore.addEventListener('click', () => {
          closeCartDrawer();
          window.location.hash = '#tienda';
        });
      }

      if (subtotalEl) subtotalEl.textContent = '$0 CLP';
      if (discountRow) discountRow.style.display = 'none';
      if (shippingEl) shippingEl.textContent = '$0 CLP';
      if (totalEl) totalEl.textContent = '$0 CLP';
      if (progressBar) progressBar.style.width = '0%';
      if (progressText) progressText.innerHTML = `¡Agrega productos para calcular el despacho!`;
      return;
    }

    container.innerHTML = state.cart.map(item => `
      <div class="cart-item-row" data-item-id="${item.id}">
        <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.title}</h4>
          <div class="cart-item-variant">${item.variant}</div>
          <div class="cart-item-price">${formatCLP(item.price * item.qty)} CLP</div>
          <div class="cart-item-controls">
            <div class="quantity-control" style="padding: 2px 6px;">
              <button class="qty-btn btn-cart-minus" data-id="${item.id}" style="width:24px;height:24px;font-size:0.9rem;">-</button>
              <span class="qty-number" style="min-width:20px;font-size:0.85rem;">${item.qty}</span>
              <button class="qty-btn btn-cart-plus" data-id="${item.id}" style="width:24px;height:24px;font-size:0.9rem;">+</button>
            </div>
            <button class="cart-item-remove-btn" data-id="${item.id}">Eliminar</button>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.btn-cart-minus').forEach(btn => {
      btn.addEventListener('click', () => updateItemQty(btn.getAttribute('data-id'), -1));
    });
    container.querySelectorAll('.btn-cart-plus').forEach(btn => {
      btn.addEventListener('click', () => updateItemQty(btn.getAttribute('data-id'), 1));
    });
    container.querySelectorAll('.cart-item-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => removeCartItem(btn.getAttribute('data-id')));
    });

    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discountAmount = Math.round(subtotal * (state.discountPercent / 100));
    const FREE_SHIPPING_THRESHOLD = 60000;
    let shippingCost = 0;

    if (state.shippingDestination === 'retiro') {
      shippingCost = 0;
    } else if (state.shippingDestination === 'rm') {
      shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 4500;
    } else if (state.shippingDestination === 'regiones') {
      shippingCost = 7500;
    }

    const finalTotal = subtotal - discountAmount + shippingCost;

    if (subtotalEl) subtotalEl.textContent = formatCLP(subtotal) + ' CLP';
    
    if (discountRow && discountEl) {
      if (discountAmount > 0) {
        discountRow.style.display = 'flex';
        discountEl.textContent = `-${formatCLP(discountAmount)} CLP (${state.discountPercent}%)`;
      } else {
        discountRow.style.display = 'none';
      }
    }

    if (shippingEl) {
      shippingEl.textContent = shippingCost === 0 ? '¡GRATIS!' : formatCLP(shippingCost) + ' CLP';
    }

    if (totalEl) totalEl.textContent = formatCLP(finalTotal) + ' CLP';

    if (progressBar && progressText) {
      if (state.shippingDestination === 'retiro') {
        progressText.innerHTML = `✨ <strong>Retiro coordinado en Estudio (Barrio Italia)</strong>`;
        progressBar.style.width = '100%';
      } else if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        progressText.innerHTML = `🎉 ¡Felicitaciones! Tienes <strong>Envío Gratis en Región Metropolitana</strong>`;
        progressBar.style.width = '100%';
      } else {
        const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
        const percent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
        progressText.innerHTML = `Agrega <strong>${formatCLP(remaining)} CLP</strong> más para <strong>Envío Gratis en RM</strong>`;
        progressBar.style.width = `${percent}%`;
      }
    }
  }

  const shippingSelect = document.getElementById('shipping-region-select');
  if (shippingSelect) {
    shippingSelect.addEventListener('change', (e) => {
      state.shippingDestination = e.target.value;
      renderCart();
    });
  }

  const promoInput = document.getElementById('promo-code-input');
  const promoBtn = document.getElementById('apply-promo-btn');
  const promoFeedback = document.getElementById('promo-feedback');

  if (promoBtn && promoInput && promoFeedback) {
    promoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === 'NORA10') {
        state.promoCode = code;
        state.discountPercent = 10;
        localStorage.setItem('nora_promo_code', code);
        promoFeedback.style.color = 'var(--color-tertiary)';
        promoFeedback.textContent = '✅ Cupón NORA10 aplicado con éxito (-10%).';
        showToast('¡Cupón del 10% de descuento aplicado!');
        renderCart();
      } else if (code === '') {
        state.promoCode = '';
        state.discountPercent = 0;
        localStorage.removeItem('nora_promo_code');
        promoFeedback.textContent = '';
        renderCart();
      } else {
        promoFeedback.style.color = 'var(--color-error)';
        promoFeedback.textContent = '❌ Cupón no válido. Prueba con NORA10';
      }
    });
  }

  const cartCheckoutWaBtn = document.getElementById('cart-checkout-whatsapp-btn');
  if (cartCheckoutWaBtn) {
    cartCheckoutWaBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Tu carrito está vacío', 'info');
        return;
      }

      const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      const discountAmount = Math.round(subtotal * (state.discountPercent / 100));
      let shippingCost = state.shippingDestination === 'retiro' ? 0 : (state.shippingDestination === 'rm' ? (subtotal >= 60000 ? 0 : 4500) : 7500);
      const finalTotal = subtotal - discountAmount + shippingCost;

      let msg = `*🐾 NUEVO PEDIDO — NORA FOTOGRAFÍA FELINA 🐾*\n\n`;
      msg += `*Detalle de Obras Seleccionadas:*\n`;
      state.cart.forEach((item, idx) => {
        msg += `${idx + 1}. *${item.title}* (${item.variant})\n   Cantidad: ${item.qty} un. | Precio: ${formatCLP(item.price * item.qty)}\n`;
      });

      msg += `\n*Resumen Económico:*\n`;
      msg += `• Subtotal: ${formatCLP(subtotal)}\n`;
      if (discountAmount > 0) {
        msg += `• Descuento (${state.promoCode}): -${formatCLP(discountAmount)}\n`;
      }
      msg += `• Destino de Despacho: ${state.shippingDestination === 'rm' ? 'Región Metropolitana' : (state.shippingDestination === 'regiones' ? 'Otras Regiones' : 'Retiro en Estudio')}\n`;
      msg += `• Costo de Envío: ${shippingCost === 0 ? 'GRATIS' : formatCLP(shippingCost)}\n`;
      msg += `• *TOTAL A PAGAR: ${formatCLP(finalTotal)} CLP*\n\n`;
      msg += `_¡Hola Caro! Quiero confirmar este pedido de obras de Nora y coordinar la transferencia y despacho._`;

      const waUrl = `https://wa.me/56912345678?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
    });
  }

  // --------------------------------------------------------------------------
  // 9. BLOG LOGIC & ARTICLE READER MODAL
  // --------------------------------------------------------------------------

  function renderLandingBlogPreview() {
    const container = document.getElementById('landing-blog-grid');
    if (!container) return;

    const previewArticles = BLOG_ARTICLES_DATA.slice(0, 3);
    container.innerHTML = previewArticles.map(art => createBlogCardHTML(art)).join('');
    bindBlogCardEvents(container);
  }

  function renderBlogPage() {
    const featuredHero = document.getElementById('blog-featured-hero');
    const articlesGrid = document.getElementById('blog-articles-grid');

    const filtered = BLOG_ARTICLES_DATA.filter(art => {
      return state.activeBlogCat === 'todos' || art.category === state.activeBlogCat;
    });

    if (featuredHero) {
      const heroArt = filtered.find(a => a.isFeatured) || filtered[0];
      if (heroArt) {
        featuredHero.innerHTML = `
          <div class="blog-featured-img-wrap" data-article-id="${heroArt.id}">
            <img src="${heroArt.image}" alt="${heroArt.title}" class="blog-featured-img">
          </div>
          <div class="blog-featured-body">
            <span class="badge-tag">${heroArt.categoryLabel}</span>
            <h2 class="blog-featured-title" data-article-id="${heroArt.id}" style="cursor:pointer;">${heroArt.title}</h2>
            <p class="blog-featured-excerpt">${heroArt.excerpt}</p>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:12px;">
              <span style="font-size:0.8rem;color:var(--color-on-surface-variant);">${heroArt.readTime} • ${heroArt.date}</span>
              <button class="btn btn-primary btn-sm" data-article-id="${heroArt.id}">Leer Artículo</button>
            </div>
          </div>
        `;
        featuredHero.querySelectorAll('[data-article-id]').forEach(el => {
          el.addEventListener('click', () => openArticleModal(heroArt));
        });
      }
    }

    if (articlesGrid) {
      const secondary = filtered.filter(a => a.id !== 'art-1' || state.activeBlogCat !== 'todos');
      articlesGrid.innerHTML = secondary.map(art => createBlogCardHTML(art)).join('');
      bindBlogCardEvents(articlesGrid);
    }
  }

  function createBlogCardHTML(art) {
    return `
      <article class="blog-card" data-article-id="${art.id}">
        <div class="blog-thumb-wrap" data-action="open-article">
          <img src="${art.image}" alt="${art.title}" class="blog-thumb" loading="lazy">
        </div>
        <div class="blog-card-body">
          <div class="blog-card-meta">
            <span class="badge-tag">${art.categoryLabel}</span>
            <span>${art.readTime}</span>
          </div>
          <h3 class="blog-card-title" data-action="open-article">${art.title}</h3>
          <p class="blog-card-excerpt">${art.excerpt}</p>
          <a href="#" class="blog-read-link" data-action="open-article">Leer completo ➔</a>
        </div>
      </article>
    `;
  }

  function bindBlogCardEvents(container) {
    container.querySelectorAll('.blog-card').forEach(card => {
      const artId = card.getAttribute('data-article-id');
      const article = BLOG_ARTICLES_DATA.find(a => a.id === artId);
      if (!article) return;

      card.querySelectorAll('[data-action="open-article"]').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          openArticleModal(article);
        });
      });
    });
  }

  const articleModal = document.getElementById('article-modal');
  const articleModalClose = document.getElementById('article-modal-close');

  function openArticleModal(article) {
    state.activeReadingArticle = article;

    const tagEl = document.getElementById('article-modal-tag');
    const readtimeEl = document.getElementById('article-modal-readtime');
    const titleEl = document.getElementById('article-modal-title');
    const authorEl = document.getElementById('article-modal-author');
    const dateEl = document.getElementById('article-modal-date');
    const imgEl = document.getElementById('article-modal-img');
    const bodyEl = document.getElementById('article-modal-body');

    if (tagEl) tagEl.textContent = article.categoryLabel;
    if (readtimeEl) readtimeEl.textContent = `📖 ${article.readTime}`;
    if (titleEl) titleEl.textContent = article.title;
    if (authorEl) authorEl.textContent = `Por ${article.author}`;
    if (dateEl) dateEl.textContent = article.date;
    if (imgEl) imgEl.src = article.image;
    if (bodyEl) bodyEl.innerHTML = article.body;

    const shareWa = document.getElementById('share-whatsapp-btn');
    if (shareWa) {
      shareWa.href = `https://wa.me/?text=${encodeURIComponent('Te recomiendo leer este artículo sobre fotografía felina: ' + article.title + ' en Nora Fotografía')}`;
    }

    renderArticleComments(article);

    if (articleModal) {
      articleModal.classList.add('open');
      articleModal.setAttribute('aria-hidden', 'false');
    }
  }

  function renderArticleComments(article) {
    const commentsList = document.getElementById('comments-list');
    const commentsCount = document.getElementById('comments-count');
    if (!commentsList) return;

    if (commentsCount) commentsCount.textContent = article.comments ? article.comments.length : 0;

    if (!article.comments || article.comments.length === 0) {
      commentsList.innerHTML = `<p style="font-size:0.875rem;color:var(--color-on-surface-variant);font-style:italic;">Aún no hay comentarios. ¡Sé el primero en compartir tu experiencia!</p>`;
      return;
    }

    commentsList.innerHTML = article.comments.map(c => `
      <div class="comment-bubble">
        <div class="comment-bubble-header">
          <span class="comment-author-name">${c.author} ${c.cat ? `<small style="font-weight:400;color:var(--color-primary);">(Tutor de ${c.cat})</small>` : ''}</span>
          <span style="font-size:0.75rem;color:var(--color-on-surface-variant);">${c.date}</span>
        </div>
        <p class="comment-bubble-text">${c.text}</p>
      </div>
    `).join('');
  }

  function closeArticleModal() {
    if (articleModal) {
      articleModal.classList.remove('open');
      articleModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (articleModalClose) articleModalClose.addEventListener('click', closeArticleModal);
  if (articleModal) {
    articleModal.addEventListener('click', (e) => {
      if (e.target === articleModal) closeArticleModal();
    });
  }

  const copyLinkBtn = document.getElementById('share-copy-link-btn');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href);
      showToast('¡Enlace del artículo copiado al portapapeles!');
    });
  }

  const articleCtaAction = document.getElementById('article-cta-action');
  if (articleCtaAction) {
    articleCtaAction.addEventListener('click', () => {
      closeArticleModal();
      window.location.hash = '#reserva';
    });
  }

  const newCommentForm = document.getElementById('new-comment-form');
  if (newCommentForm) {
    newCommentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!state.activeReadingArticle) return;

      const authorInput = document.getElementById('comment-author-input');
      const catInput = document.getElementById('comment-cat-input');
      const textInput = document.getElementById('comment-text-input');

      const author = authorInput.value.trim();
      const cat = catInput.value.trim();
      const text = textInput.value.trim();

      if (!author || !text) return;

      const newComment = {
        author: author,
        cat: cat,
        date: 'Hoy',
        text: text
      };

      if (!state.activeReadingArticle.comments) {
        state.activeReadingArticle.comments = [];
      }
      state.activeReadingArticle.comments.unshift(newComment);

      renderArticleComments(state.activeReadingArticle);
      newCommentForm.reset();
      showToast('¡Comentario publicado con éxito! 🐾');
    });
  }

  // --------------------------------------------------------------------------
  // 10. FORM SUBMISSIONS & BOOKING
  // --------------------------------------------------------------------------

  document.querySelectorAll('.select-session-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sessionName = btn.getAttribute('data-session');
      const selectEl = document.getElementById('book-service');
      if (selectEl) {
        for (let i = 0; i < selectEl.options.length; i++) {
          if (selectEl.options[i].text.includes(sessionName) || selectEl.options[i].value.includes(sessionName)) {
            selectEl.selectedIndex = i;
            break;
          }
        }
      }
      const resEl = document.getElementById('reserva');
      if (resEl) resEl.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('book-name').value.trim();
      const email = document.getElementById('book-email').value.trim();
      const phone = document.getElementById('book-phone').value.trim();
      const catName = document.getElementById('book-cat-name').value.trim();
      const service = document.getElementById('book-service').value;
      const temperament = document.querySelector('input[name="cat-temperament"]:checked')?.value || 'No especificado';
      const date = document.getElementById('book-date').value || 'Fecha flexible';
      const notes = document.getElementById('book-notes').value.trim();

      showToast(`¡Solicitud enviada para ${catName}! Te contactaremos a la brevedad.`);

      const waText = encodeURIComponent(`*SOLICITUD DE RESERVA FEAR-FREE*\n\nHola Caro, mi nombre es *${name}*.\nQuisiera consultar disponibilidad para:\n• *Servicio:* ${service}\n• *Gato(s):* ${catName}\n• *Temperamento:* ${temperament}\n• *Fecha estimada:* ${date}\n• *Notas:* ${notes || 'Sin observaciones'}\n\nContacto: ${email} | ${phone}`);
      
      const proceedWA = confirm(`¡Gracias ${name}! Tu solicitud para ${catName} quedó registrada.\n\n¿Deseas abrir WhatsApp ahora para enviar los datos directamente a la fotógrafa?`);
      if (proceedWA) {
        window.open(`https://wa.me/56912345678?text=${waText}`, '_blank');
      }

      bookingForm.reset();
    });
  }

  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      if (emailInput && emailInput.value) {
        showToast('¡Gracias por unirte! Revisa tu correo con el código NORA10.');
        newsletterForm.reset();
      }
    });
  }

  document.querySelectorAll('.faq-item .faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('open');
    });
  });

  // --------------------------------------------------------------------------
  // 11. TOOLBAR & FILTER CONTROLS
  // --------------------------------------------------------------------------

  document.querySelectorAll('#store-category-filters .filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#store-category-filters .filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeCategory = btn.getAttribute('data-category');
      renderStoreProducts();
    });
  });

  const searchInput = document.getElementById('store-search-input');
  const searchClear = document.getElementById('search-clear-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (searchClear) searchClear.style.display = state.searchQuery ? 'block' : 'none';
      renderStoreProducts();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      state.searchQuery = '';
      searchClear.style.display = 'none';
      renderStoreProducts();
    });
  }

  const sortSelect = document.getElementById('store-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderStoreProducts();
    });
  }

  document.querySelectorAll('#blog-category-filters .filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#blog-category-filters .filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeBlogCat = btn.getAttribute('data-blog-cat');
      renderBlogPage();
    });
  });

  // --------------------------------------------------------------------------
  // 12. INITIALIZATION
  // --------------------------------------------------------------------------

  updateCartCountBadge();
  renderLandingFeaturedProducts();
  renderLandingBlogPreview();
  renderStoreProducts();
  renderBlogPage();

  navigateTo(window.location.hash);

});
