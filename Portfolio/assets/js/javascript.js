$(document).ready(function(){
    // Definē elementus
    const nav = $('#nav');
    const backtotop = $('#backtotop');
    const name = $("header .name");
    const portfolio = $("header .small");

    // Vienmērīgi noritina uz konkrēto sadaļu
    $(".smooth a").on('click', function() {
        if (this.hash !== "") {
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 'smooth', function(){
                window.location.hash = hash;
            });
        } 
    });

    // Navigācija uz mazajiem ekrāniem
    $(".oc-nav").click(function(){
        if (nav.is(":hidden")) {
            nav.fadeIn('fast');
        } else {
            nav.fadeOut('fast');
        }
    }); 

    // Parāda tekstu pa vienam burtam "header sadaļā"
    function headerDelay(text, element, text2, element2){
        element.append(text[0]);

        setTimeout(
            function(){
                headerDelay(text.slice(1),element);
            }, 100,
        );

        setTimeout(
            function(){
                headerDelay(text2.slice(0),element2);
            }, 2400,
        );
    }

    headerDelay(name.attr('rel'), name, portfolio.attr('rel'), portfolio);

    // Noritinot nedaudz uz leju, parāda back to top pogu
    backtotop.hide();

    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            backtotop.fadeIn();
        } else {
            backtotop.fadeOut();
        }
    });

    // Vienmērigi uzritina uz pašu augšu
    backtotop.click(function(){
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });
});