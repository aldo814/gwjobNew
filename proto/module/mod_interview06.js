interview06 = $('.mod_interview06 .interview');

            function interview06_slide() {
                interview06.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    dots: false,
                    infinite: false,
                    adaptiveHeight: true,
                    prevArrow: $('.prev_arrow'),
                    nextArrow: $('.next_arrow'),
                });
            }
            interview06_slide();

            $(".mod_interview06 .bg .q").click(function() {
                var $this = $(this);
                var $parent = $this.parent().siblings();
                $parent.find(".q").removeClass("active");
                $this.addClass("active");

                var itHeight = $('.mod_interview06 .slick-track').height();
                $('.mod_interview06 .slick-list').css('height', itHeight);

            });