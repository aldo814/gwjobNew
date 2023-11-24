function sliderInit() {
            var $slider = $('.product_slide');
            $slider.each(function() {
                var $sliderParent = $(this).parent();
                $(this).slick({
                    slidesToShow: 1,
                    arrows: true,
                    dots: false,
                    infinite: false
                });

                $(this).on('afterChange', function(event, slick, currentSlide) {
                    $sliderParent.find('.slides-numbers .active').html(formatSlideNumber(currentSlide + 1));
                });

                var sliderItemsNum = $(this).find('.slick-slide').length; // Get the total number of slides

                // Ensure that even if there's only one slide, the count appears
                sliderItemsNum = (sliderItemsNum < 1) ? 1 : sliderItemsNum;

                $sliderParent.find('.slides-numbers .total').html(formatSlideNumber(sliderItemsNum));
            });
        }

        function formatSlideNumber(number) {
            return (number < 10) ? '0' + number : number;
        }
        sliderInit();