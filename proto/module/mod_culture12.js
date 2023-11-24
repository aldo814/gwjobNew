 $('.mod_culture_cst .welfare .item').each(function() {
            var className = $(this).attr('class').split(' ')[1]; // 클래스 이름 가져오기
            var items = $(this).find('dd'); // 해당 클래스 내의 모든 dd 요소 가져오기

            items.each(function() {
                var div = $('<div>').addClass('item ' + className); // 새로운 div 요소 생성
                var dl = $('<dl>'); // dl 요소 생성
                var dd = $('<dd>').text($(this).text()); // 새로운 dd 요소 생성하여 내용 복사

                dl.append(dd); // dd 요소를 dl에 추가
                div.append(dl); // dl 요소를 새로운 div에 추가
                $(this).replaceWith(div); // 각 dd 요소를 새로운 div로 교체
            });
        });

        // 모든 새로운 div를 .welfare에 추가
        var newItems = $('.mod_culture_cst .welfare .item');
        $('.mod_culture_cst .welfare').empty().append(newItems);


        $('.mod_culture_cst .welfare .item').each(function() {
            $(this).find('dt').parent().parent().remove();
        });