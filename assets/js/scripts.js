$(document).ready(function(e) {

    let discord = $('.input-radios #discord');
    let telegram = $('.input-radios #telegram');
    let alertContainer = $('.order-item .input-alert-container');
    let nicknameInput = $('.order-item #nickname');
    let input = $('.input-container #nickname')

    $('.input-radios .radio-item input').on('change', function(e) {
        $(nicknameInput).removeAttr('disabled');
        input.attr('placeholder', 'Ваш никнейм и тег Discord');
        if (discord.is(':checked')) {
            alertContainer.addClass('active');
            
        } else if (telegram.is(':checked')) {
            input.attr('placeholder', 'Введите ваш никнейм Telegram');
            alertContainer.removeClass('active');
        }
    });

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
        $('.overlay').addClass('active');
        $('body').addClass('overflow_hidden');
      });

      $('.modal .close-btn, .overlay').on('click', function(e){
        $('.modal').removeClass('active');
        $('.overlay').removeClass('active');
        $('body').removeClass('overflow_hidden');
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

    // BLOG FIX HEADER
    let header = $('header.article-header');

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
          header.addClass("fixed-header");
        } else {
          header.removeClass("fixed-header");
        }
      });
    
    // ARTICLE ACCORDION
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
