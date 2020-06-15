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
  });