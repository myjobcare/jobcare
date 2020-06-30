$(document).ready(function()
{
    $(".menu li a").click(function(e){
        //how to proceed
        let target = $(this).attr("href");

        $("html,body").animate(
        {
            scrollTop: $(target).offset().top -55,
        },
        1000
        );

    });
});



$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});