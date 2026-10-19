document.addEventListener('DOMContentLoaded', () => {
  // Menu Hambúrguer para Dispositivos Móveis
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    // Fecha o menu ao clicar em algum link interno
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  }

  // Funcionalidade de Copiar E-mail na Seção de Contato
const copyEmailBtn = document.getElementById('copyEmailBtn');


if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', async () => {
    // Pega o e-mail direto do atributo data-email que definimos no HTML
    const email = copyEmailBtn.getAttribute('data-email');
    const iconContainer = copyEmailBtn.querySelector('.social-media-btn');
    const textoCopiaEmail = document.getElementById('avisoEmailCopiado');
    try {
      await navigator.clipboard.writeText(email);

      textoCopiaEmail.style.display = 'block';
      setTimeout(() => {
        textoCopiaEmail.style.display = 'none';
      }, 2000);
    } catch (err) {
      iconContainer.style.backgroundColor = '#FF4D4D';
      iconContainer.innerHTML = '✕';
      
      setTimeout(() => {
        iconContainer.style.backgroundColor = '';
        iconContainer.innerHTML = originalHTML; // Restaura se der erro também
      }, 2000);
    }
  });
}
});

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('testimonialTrack');
  const slides = Array.from(track ? track.children : []);
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const dotsNav = document.getElementById('carouselDots');
  const dots = Array.from(dotsNav ? dotsNav.children : []);

  if (!track || slides.length === 0) return;

  let currentIndex = 0;

  function updateCarousel(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    currentIndex = index;

    // Desloca o carrossel no eixo X
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Atualiza a classe active nos slides
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentIndex);
    });

    // Atualiza os pontos (dots)
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  // Eventos nos botões Próximo e Anterior
  if (nextBtn) {
    nextBtn.addEventListener('click', () => updateCarousel(currentIndex + 1));
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => updateCarousel(currentIndex - 1));
  }

  // Evento ao clicar diretamente nos pontos (dots)
  if (dotsNav) {
    dotsNav.addEventListener('click', e => {
      const targetDot = e.target.closest('.dot');
      if (!targetDot) return;
      const targetIndex = parseInt(targetDot.dataset.index, 10);
      updateCarousel(targetIndex);
    });
  }

  // Troca automática a cada 6 segundos (Opcional)
  let autoPlay = setInterval(() => updateCarousel(currentIndex + 1), 6000);

  // Pausa ao passar o mouse por cima
  const wrapper = document.querySelector('.carousel-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mouseenter', () => clearInterval(autoPlay));
    wrapper.addEventListener('mouseleave', () => {
      autoPlay = setInterval(() => updateCarousel(currentIndex + 1), 6000);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.getElementById('scrollTopBtn');

  // Opcional: Mostrar/Esconder o botão baseado no scroll da página
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show'); // Mostra após rolar 300px
    } else {
      scrollBtn.classList.remove('show'); // Esconde no topo
    }
  });

  // A função principal de rolar para o topo
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Garante o efeito suave mesmo sem o CSS global
    });
  });
});