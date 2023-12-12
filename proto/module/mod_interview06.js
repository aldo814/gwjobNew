interview06 = $('.mod_interview06 .interview');

            function interview06_slide() {
                interview06.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    dots: false,
                    prevArrow:'.mod_interview06 .prev_arrow',
                    nextArrow:'.mod_interview06 .next_arrow',
                    arrows: true,
                    infinite: true,
                    adaptiveHeight: false,
                });
            }
            interview06_slide();

            $(".mod_interview06 .bg .q").click(function() {
                var $this = $(this);
                var $parent = $this.parent().siblings();
                $parent.find(".q").removeClass("active");
                $this.addClass("active");
                interview06.slick('unslick');
                interview06_slide();
            });