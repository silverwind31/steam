$(document).ready(function(e) {

    // let discord = $('.input-radios #discord');
    // let telegram = $('.input-radios #telegram');
    // let alertContainer = $('.order-item .input-alert-container');
    // let nicknameInput = $('.order-item #nickname');

    // $('.input-radios .radio-item input').on('change', function(e) {
    //     $(nicknameInput).removeAttr('disabled');
    //     if (discord.is(':checked')) {
    //         alertContainer.slideToggle();
    //     } else if (telegram.is(':checked')) {
    //         alertContainer.slideUp();
    //     }
    // });

    $('.testimonials-swiper .slide-item').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        midClick: true,
        cursor: 'null',
        verticalFit: true,
        cursor: null,
        removalDelay: 300,
        showCloseBtn: false,
        image: {
            cursor: null,
          },
        callbacks: {
          beforeOpen: function() {
             this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
             this.st.mainClass = this.st.el.attr('data-effect');
          }
        },
      });
    // MODAL
    $('.modal-btn').on('click', function(e){
        $('.modal').addClass('active');
    });

    $('.modal .close-btn').on('click', function(e){
        $('.modal').removeClass('active');
    });

    // FAQ ACCORDION
    $('.faq .faq-item').on('click',function(e){
        e.preventDefault();
        $(this).find('.faq-content').slideToggle(300);
        $(this).toggleClass('active');
        $('.faq .faq-item').not($(this)).removeClass('active')
        $('.faq .faq-item').not($(this)).find('.faq-content').slideUp(300)
    }); 

    var swiper = new Swiper(".testimonials-swiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev",
        },
    });

    $('input[name="price"]').change(function() {
        var selectedValue = $(this).val();
        $('#price-input').val(selectedValue);
    });

    $("#agreement").change(function() {
        if ($(this).is(":checked")) {
            $(".send-form .form-btn").addClass("not-disabled").prop("disabled", false);
        } else {
            $(".send-form .form-btn").removeClass("not-disabled").prop("disabled", true);
        }
    });

    // BLOG PAGE
    $('.article-accordion .accordion-item').on('click', function(e) {
        e.preventDefault();
        $(this).find('.accordion-content-wrapper').slideToggle(300);
        $(this).toggleClass('active');
        $('.article-accordion .accordion-item').not($(this)).removeClass('active');
        $('.article-accordion .accordion-item').not($(this)).find('.accordion-content-wrapper').slideUp(300);
    });

    // SMOOTH SCROLL
    // $(".sticky-menu .sticky-menu-list a[href^='#']").on('click', function(e) {
    //     if (this.hash !== "") {
    //         e.preventDefault();
    //         var hash = this.hash;
    //         $('html, body').animate({
    //             scrollTop: $(hash).offset().top
    //         }, 1000, function() {
    //             window.location.hash = hash;
    //         });
    //     }
    // });

    // BLOG STICKY MENU
    let contentSections = $('.article-wrapper .article-wrapper-item');
    let menuItems = $('.sticky-menu .sticky-menu-list .list-item');

    function checkSectionInView() {

        let currentScroll = $(window).scrollTop() + $(window).height() / 2;
    
        contentSections.each(function() {
            var sectionTop = $(this).offset().top;
            var sectionHeight = $(this).outerHeight();
            
            if (currentScroll >= sectionTop && currentScroll <= sectionTop + sectionHeight) {
       
            menuItems.not('[href="#' + $(this).attr('id') + '"]').removeClass('active');
            
            menuItems.filter('[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    }

    $(window).on('load scroll', function() {
        checkSectionInView();
    });
})




















// window.onload = function() {
//     let accordionItems = document.querySelectorAll('.article-accordion .accordion-item');
  
//     accordionItems.forEach(function(item) {
//       item.addEventListener('click', function() {
//         const isActive = this.classList.contains('active');
  
//         accordionItems.forEach(function(item) {
//           item.classList.remove('active');
//         });

//         if (!isActive) {
//           this.classList.add('active');
//         }
//       });
//     });
//   };

