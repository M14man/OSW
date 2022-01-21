$(document).ready(function () {

    $('ul.products__tabs').on('click', 'li:not(.products__tab_active)', function() {
    $(this)
      .addClass('products__tab_active').siblings().removeClass('products__tab_active')
      .closest('div.container').find('div.products__content').removeClass('products__content_active').eq($(this).index()).addClass('products__content_active');
    });

});
