$(document).ready(function(e) {

  // JAVASCRIPT BODY STYLE
  let timeout = parseFloat(getComputedStyle(document.querySelector('.modal')).transitionDuration) * 1000;

console.log(timeout);

let scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
    document.documentElement.style.scrollBehavior = 'unset';
  },
  enabledScroll() {
    document.body.style.cssText = '';
    window.scroll({top: scrollController.scrollPosition});
    document.documentElement.style.scrollBehavior = '';
  },
};


  
  // MODAL
  $('.modal-btn').on('click', function(e){
    $('.modal').addClass('active');
    scrollController.disabledScroll();
  });

  $('.modal .close-btn').on('click', function(e){
    $('.modal').removeClass('active');
    setTimeout(() => {
      scrollController.enabledScroll();
    }, timeout);
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
})
