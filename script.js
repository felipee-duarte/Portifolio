function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}


function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else{
        itens.style.display = 'none'
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

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
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