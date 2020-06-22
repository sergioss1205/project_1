/* let answer=prompt("ты дурвк?","");   */
/* if (2*6==8*1) {
    console.log("верно")
} else {
    console.log("ошибка")
} */
/* for (let i=1;i<8;i=i+2) {
    console.log(i);
}
 */

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        /* adaptiveHeight: true, */
        prevArrow: `<button type="button" class="slick-prev"><img src="icons/left.svg"></button>`,
        nextArrow: `<button type="button" class="slick-next"><img src="icons/right.svg"></button>`,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                dots: true,
                arrows: false
                
                }
            }
        ]
        });
        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_activ)', function() {
            $(this)
              .addClass('catalog__tab_activ').siblings().removeClass('catalog__tab_activ')
              .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
          });

         $(`.catalog-item__link`).each(function(i) {
            $(this).on(`click`, function(e) {
                e.preventDefault();
                $(`.catalog-item__content `).eq(i).toggleClass(`catalog-item__content_active`);
                $(`.catalog-item__list`).eq(i).toggleClass(`catalog-item__list_active`);
            })
            
        });
        
        $(`.catalog-item__back`).each(function(i) {
            $(this).on(`click`, function(e) {
                e.preventDefault();
                $(`.catalog-item__content `).eq(i).toggleClass(`catalog-item__content_active`);
                $(`.catalog-item__list`).eq(i).toggleClass(`catalog-item__list_active`);
            })
            
        })  
        
   $(`[data-modal=consultation]`).on(`click`, function() {
       $(`.overLay, #consultation`).fadeIn(`slow`);

   });
   $(`.modal__close`).on(`click`, function() {
    $(`.overLay, #consultation, #order, #thanks`).fadeOut(`slow`);
   });
  
   $(`.button_mini`).each(function(i) {
       $(this).on(`click`, function() {
        $(`#order .modal__descr`).text($(`.catalog-item__subtitle`).eq(i).text());
        $(`.overLay, #order`).fadeIn(`slow`);
       })
   });

   $(`#consultation-form`).validate();
   $(`#consultation form`).validate( {
       rules: {
        name: "required",
        phone: "required",
        email: {
            required: true,
            email: true
      
        }
       },
       messages: {
        name: "Пожалуйста, введите свое имя",
        phone: "Пожалуйста, введите свой телефон",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты "
        }
      }
    
   });
   $(`#order form`).validate();

   $(`input[name=phone]`).mask("+972 (99) 999-9999");

       
  });