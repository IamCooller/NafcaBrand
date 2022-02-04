$(document).ready(function() {
    /*loadSvg*/
    $('[data-svg]').each(function() {
        var $this = $(this);
        var $svg = $this.data('svg');
        var $filename = $svg.split('\\').pop().split('/').pop().replace(".svg", "");

        $this.load($svg, function(responseTxt, statusTxt) {
            if (statusTxt == "success") {
                $this.find('svg').addClass('svg svg-' + $filename + '');
            }
        });
    });

    $(function() {
        var div = $(".main__home_view");
        var img = $("img", div)[0];
        $(".main__home_companies-list a").each(function(i, el) {
            var src = $(el).data("src");
            if ($(el).data("src")) {
                $(el).mouseleave(function() {
                    div.removeClass("show");
                }).mouseenter(function() {
                    img.src = src;
                    div.addClass("show");
                });
            }
        });
    });

    /* function fontSize() {
        if ($(window).width() < 900) {

            $('html').css({ fontSize: 16 + 'px' });
        }

        if ($(window).width() > 900) {
            var width = 1920; // ширина, от которой идет отсчет
            var fontSize = 16; // минимальный размер шрифта
            var bodyWidth = $('html').width();
            var multiplier = bodyWidth / width;
            if ($('html').width() >= width) fontSize = Math.floor(fontSize * multiplier);
            if ($('html').width() < width) fontSize = Math.floor(fontSize * multiplier);
            $('html').css({ fontSize: fontSize + 'px' });
        }
    }

    $(function() { fontSize(); });
    $(window).resize(function() { fontSize(); }); */
})