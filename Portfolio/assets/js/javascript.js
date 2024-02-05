// Definē elementus
const nav = $('#nav');
const smooth = $('.smooth a');
const backtotop = $('#backtotop');
const portfolio = $("header .small");

// Parāda tekstu pa vienam burtam "header sadaļā"
function headerDelay(text, element){
    element.append(text[0]);

     setTimeout(
         function(){
            headerDelay(text.slice(1),element);
           }, 100,
    );
}

$(document).ready(function(){
    headerDelay(portfolio.data('text'), portfolio);
    Fancybox.bind('[data-fancybox="works"]');

    // Vienmērīgi noritina uz konkrēto sadaļu
    smooth.on('click', function() {
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

    // Uzbraucot uz attēla, parāda lupu, lai skatītu lielāku attēlu
    $('.blur').each(function(){
        $(this).hover(function(){
            $('i', this).fadeIn('fast');
        }, function(){
            $('i', this).fadeOut('fast');
        });
    });

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

// Seko līdzi, kurā sekcijā atrodas un parāda navigācijā
$(document).scroll(function () {
    var cutoff = $(window).scrollTop();

    $('section').each(function () {
        smooth.removeClass('current');

        if ($(window).scrollTop() + $(window).height() > $(document).height() - 150) {
            $('.smooth a[data-section="contacts"]').addClass('current');
        } else if(cutoff <= 300) {
            $('.smooth a[data-section="home"]').addClass('current');
        } else if ($(this).offset().top + $(this).height() > cutoff + 80) {
            let current = $(this).attr('id');

            $('.smooth a[data-section="' + current + '"]').addClass('current');
            
            return false;
        }
    });
});