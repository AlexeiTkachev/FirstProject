// Используем JQuery
$('.gallery-item').click ( //Событие клик мыши по миниатюре
    function () {
// сохраняем путь к большой картинке из параметра data-full в переменную
        var src=$(this).find('img').data('full');
//меняем параметр атрибут src у картинки в блоке .img-view
        $('.img-view-item img').attr('src', src);
//меняем видимость элемента .img-view (отображаем элемент большой)
        $('.img-view').css('display', 'flex');
        var text1=$(this).find('.gallery-item-title').text();
        $('.img-view-item p').text(text1);  
    }
);

$('.img-view').click ( //клик мыши по большому изображению
    function() {
        //меняем видимость элемента .img-view (скрываем элемент большой)
        $('.img-view').css('display', 'none');
    }
    
);



