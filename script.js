function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else{
        itens.style.display = 'none'
    }
}


function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}



function toggleMode() {
  const html = document.documentElement
  const logo = document.getElementById('logo')
  html.classList.toggle('light')

  
  if (html.classList.contains('light')) {
    logo.src = 'assets/logo-light.png'
  } else {
    logo.src = 'assets/logo-dark.png'
  }
}


const swiper = new Swiper('.embalagem', {
  loop: true,
  spaceBetween: 30,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView:2,
    },
    992: {
        slidesPerView:3,
    }
  }
});

document.getElementById("scrollTop").addEventListener("click", () => {
  document.getElementById("topo").scrollIntoView({ behavior: "smooth" });
})

  const botaoTopo = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      botaoTopo.style.display = 'flex'; 
    } else {
      botaoTopo.style.display = 'none';
    }
  });

  
  window.addEventListener('load', () => {
    botaoTopo.style.display = 'none';
  });