/* init Jarallax */
jarallax(document.querySelectorAll('.jarallax'));
jarallax(document.querySelectorAll('.jarallax-keep-img'), {
  keepImg: true,
});
$(function(){
  var $gallery = $('.gallery a').simpleLightbox();
});
$().ready(function() {
    Waves.init(), 
    Waves.attach(".btn-w", ["waves-float"]),
    Waves.attach(".btn-f", ["waves-flat"]), 
    Waves.attach(".flat-box", ["waves-block"]), 
    Waves.attach(".float-box", ["waves-block", "waves-float"]), 
    Waves.attach(".img", ["waves-light"]), 
    Waves.attach(".light", ["waves-block", "waves-float", "waves-light"]), 
    Waves.attach(".waves-image.rounded-circle", ["waves-circle"]), 
    Waves.attach(".flat-icon", ["waves-circle"]), 
    Waves.attach(".float-icon", ["waves-circle", "waves-float"]),
    Waves.attach(".float-icon-light", ["waves-circle", "waves-float", "waves-light"]), 
    Waves.attach(".dropzone", ["waves-block", "waves-float"])
})

function rotateCard(e) {
    var t = $(e).closest(".card-container");
    console.log(t), t.hasClass("hover") ? t.removeClass("hover") : t.addClass("hover")
}
$(document).ready(function(e) {
    e(".card-share > a").on("click", function(t) {
        t.preventDefault(), e(this).parent().find("div").toggleClass("lefter-c-active"), e(this).toggleClass("share-expanded")
    })
})
$("#btt-hover").materialCard({
        card_activator: "hover"
    })
$(function() {
        $(".material-card").materialCard({
            icon_close: "lnr lnr-chevron-left text-white",
            icon_open: "lnr lnr-menu text-white",
            icon_spin: "lnr-spin-fast",
            card_activator: "click"
        }), window.setTimeout(function() {
            $(".tasou").materialCard("open")
        }, 3e3), $(".material-card").on("shown.material-card show.material-card hide.material-card hidden.material-card", function(e) {
            console.log(e.type, e.namespace, $(this))
        })
    })
// smooth scroll
  $('.btt-smoothScroll a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click',function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top-70
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
  });

    //wow.js on scroll animations initialization
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

  $("#nav-content").mCustomScrollbar({
    axis:"y",
    autoHideScrollbar:true,
    theme:"light-3",
    scrollInertia:400
  });

/**example***/
var swiper = new Swiper('.bttFullWidth-slider', {
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });

var swiper = new Swiper('#progressTracker', {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

var swiper = new Swiper('#zoomContent', {
        zoom: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
            autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
      });

var swiper = new Swiper('#verticalMouseWheel', {
        direction: 'vertical',
        zoom: true,
        loop: true,
        effect: 'coverflow',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
var swiper = new Swiper('.dragCursor', {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 20,
        grabCursor: true,
        loop:true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
      });

var swiper = new Swiper('.clientCarousel', {
      slidesPerView: 4,
      loop:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,},
      spaceBetween: 25,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        }
      }
    });
var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1,
        }
      }
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 6,
      touchRatio: 0.2,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      slideToClickedSlide: true,
      breakpoints: {
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        }
      }
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
