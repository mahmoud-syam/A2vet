{
    // filter IPORTFOLIO
    const linkFilter = document.querySelectorAll(".filterProduct ul li a"); //Filter PORTFOLIO Links
    const productOneFill = document.querySelectorAll(".productOneFill"); // images PORTFOLIO
    console.log(productOneFill);
    console.log(linkFilter)

    linkFilter.forEach((item) => {
      // Loop On Links To Filter Images
      // Buttons list
    item.addEventListener("click", function () {
        // item = li
        linkFilter.forEach((item) => {
          item.classList.remove("active"); // remove Class Active From Li
          this.classList.add("active"); // Add Class Active When click On Li Link filter
        });
        productOneFill.forEach((itemPort) => {
          // Loop On Images Filter
          //Port Filter
          itemPort.style.display = "none"; // Add Dispaly None To All Images
        });
        document.querySelectorAll(this.dataset.fill).forEach((itemPro) => {
          // When Click On The Link Of Filter === "name Filter" Add Display Block To This Filter
        itemPro.style.display = "block";
        });
    });
    });
};

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.mynav').addClass("sticky");
        }else{
            $('.mynav').removeClass("sticky");

        }
        if(this.scrollY > 500){
            $('.scroll').addClass("show");
        }else{
            $('.scroll').removeClass("show");
        }

    }); 
    $('.scroll').click(function(){
        $('html').animate({scrollTop: 0})
    });
    // navar/menu
    $('.menu-btn').click(function(){
        $('.mynav .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active"); 
    })
    // owl carousel
    $('.carousel').owlCarousel({
        margin:20,
        loop: true,
        autoPlayTimeOut: 2000,
        autoPlayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })
}) ;
// typing Animation 
var typed = new Typed(".typing",{
    strings: ["" ,"Better Care" , "Better Services" , "More and More"],
    typeSpeed:100,
    backSpeed:60 ,
    loop: true ,
});
var typed = new Typed(".typing-2",{
    strings: ["" ,"Better Care" , "Better Services" , "More and More"],
    typeSpeed:100,
    backSpeed:60 ,
    loop: true ,
});

// start loading-overlay
$(window).load(function()
{
    $("body").css("overflow","auto");

    $(".loading-overlay h1").fadeOut(2000,
    function()
    {
        $(this).parent().fadeOut(2000,
        function()
        {
            $(this).remove();
        });
    });
});





