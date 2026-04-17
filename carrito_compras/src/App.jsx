
function App() {

  return (
    <>
  
  <header class="site-header">
    <div class="header-inner">
      <nav class="nav-left">
        <a href="#">Colecciones</a>
        <a href="#">Novedades</a>
        <a href="#">Ofertas</a>
      </nav>
      <div class="logo">ARCANE</div>
      <nav class="nav-right">
        <a href="#">Buscar</a>
        <a href="#">Mi cuenta</a>
        <a href="#" class="cart-link">Carrito <span class="cart-count">0</span></a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="hero-text">
      <span class="hero-tag">Nueva colección — Primavera 2025</span>
      <h1>Objetos que<em>perduran</em></h1>
      <p>Piezas de diseño seleccionadas con cuidado, pensadas para durar toda una vida.</p>
      <a href="#" class="btn-hero">Explorar ahora</a>
    </div>
    <div class="hero-deco"></div>
  </section>

  <main class="catalog-section">
    <div class="section-header">
      <h2>Catálogo</h2>
      <span class="section-line"></span>
      <p>25 piezas seleccionadas</p>
    </div>

    <div class="product-grid">

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <span class="badge">Nuevo</span>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Lámpara Nórdica</h3>
          <p>Madera de roble y lino artesanal. Luz cálida difusa.</p>
          <span class="price">$1,299</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Silla Wabi</h3>
          <p>Estructura de acero negro y asiento en cuero natural curtido.</p>
          <span class="price">$3,450</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <span class="badge sale">Oferta</span>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Florero Cerámica</h3>
          <p>Cerámica torneada a mano, acabado mate en tono arena.</p>
          <span class="price">$489 <del>$650</del></span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Mesa Lateral Mori</h3>
          <p>Tablero de mármol travertino sobre base de latón cepillado.</p>
          <span class="price">$5,200</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <span class="badge">Nuevo</span>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Espejo Arco</h3>
          <p>Marco de madera de fresno, acabado en aceite de tung natural.</p>
          <span class="price">$2,100</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Cojín Linen</h3>
          <p>Lino belga lavado a la piedra, relleno de plumón orgánico.</p>
          <span class="price">$320</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <span class="badge sale">−30%</span>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Set Copas Soga</h3>
          <p>Vidrio soplado en molde, bordes irregulares únicos. Set de 4.</p>
          <span class="price">$870 <del>$1,240</del></span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Repisa Flotante</h3>
          <p>Nogal macizo de 4 cm de espesor, sistema oculto de montaje.</p>
          <span class="price">$780</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <span class="badge">Exclusivo</span>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Tapete Kilim</h3>
          <p>Tejido artesanal turco, lana virgen teñida con pigmentos naturales.</p>
          <span class="price">$4,600</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Vela Rituale</h3>
          <p>Cera de soya con esencias de cedro, patchouli y musgo blanco.</p>
          <span class="price">$195</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <span class="badge">Nuevo</span>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Cuadro Abstracto</h3>
          <p>Acrílico sobre lienzo belga, 60×80 cm. Edición limitada.</p>
          <span class="price">$3,900</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Porta Plantas</h3>
          <p>Hierro forjado con pátina oxidada, diseño escultórico minimalista.</p>
          <span class="price">$640</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <span class="badge sale">Oferta</span>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Reloj Bauhaus</h3>
          <p>Movimiento japonés silencioso, esfera en vidrio y marco de latón.</p>
          <span class="price">$950 <del>$1,200</del></span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Bandeja Nogal</h3>
          <p>Madera de nogal americano con incrustaciones en latón y asa integrada.</p>
          <span class="price">$430</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <span class="badge">Limitado</span>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Jarrón Ikebana</h3>
          <p>Cerámica negra con textura de ceniza volcánica, boca asimétrica.</p>
          <span class="price">$1,050</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Difusor Arce</h3>
          <p>Madera de arce y aceites esenciales de bosque noruego. 200 ml.</p>
          <span class="price">$280</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <span class="badge">Nuevo</span>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Taburete Piedra</h3>
          <p>Concreto pulido vaciado en molde artesanal. Acabado en cemento blanco.</p>
          <span class="price">$1,750</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Lámpara Velo</h3>
          <p>Papel de arroz japonés y estructura de bambú. Luz ambiental suave.</p>
          <span class="price">$890</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <span class="badge sale">−20%</span>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Set Cubiertos</h3>
          <p>Acero inoxidable mate satinado, mangos de madera de olivo. 24 piezas.</p>
          <span class="price">$1,200 <del>$1,500</del></span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Candelabro Bronce</h3>
          <p>Bronce fundido con acabado envejecido, para tres velas de pilar.</p>
          <span class="price">$1,480</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <span class="badge">Exclusivo</span>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Alfombra Pampa</h3>
          <p>Lana merino argentina tejida con telar manual. 160×230 cm.</p>
          <span class="price">$6,800</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Taza Jomon</h3>
          <p>Cerámica estilo japonés, engobe negro con pinceladas de oro.</p>
          <span class="price">$350</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <span class="badge">Nuevo</span>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Perchero Rama</h3>
          <p>Acero lacado en negro con silueta de rama orgánica. 5 ganchos.</p>
          <span class="price">$920</span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <span class="badge sale">Oferta</span>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Marco Galería</h3>
          <p>Madera de pino lacada en blanco, vidrio antirreflejo. 40×50 cm.</p>
          <span class="price">$310 <del>$420</del></span>
        </div>
      </article>

      <article class="product-card">
        <div class="product-img">
          <div class="img-placeholder"></div>
          <button class="btn-cart" type="button">Añadir al carrito</button>
        </div>
        <div class="product-info">
          <h3>Bowl Miso</h3>
          <p>Cerámica artesanal de alta temperatura, vidriado en gris piedra.</p>
          <span class="price">$275</span>
        </div>
      </article>

    </div>
  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-logo">ARCANE</div>
        <p>Objetos que perduran.Diseño con intención.</p>
      </div>
      <div class="footer-links">
        <div>
          <h4>Tienda</h4>
          <a href="#">Colecciones</a>
          <a href="#">Novedades</a>
          <a href="#">Ofertas</a>
        </div>
        <div>
          <h4>Empresa</h4>
          <a href="#">Sobre nosotros</a>
          <a href="#">Sustentabilidad</a>
          <a href="#">Prensa</a>
        </div>
        <div>
          <h4>Ayuda</h4>
          <a href="#">Envíos</a>
          <a href="#">Devoluciones</a>
          <a href="#">Contacto</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 ARCANE. Todos los derechos reservados.</span>
    </div>
  </footer>

    </>
  )
}

export default App
