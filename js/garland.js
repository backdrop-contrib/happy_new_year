(function ($) {

  'use strict';

  Backdrop.behaviors.garland = {
    attach: function (context, settings) {

      var num = 0;
      function garland() {
        $('#garland').css('backgroundPosition', '0 -' + num + 'px');
        if (num > 72) {
          num = 36;
        }
        else {
          num = num + 36;
        }
      }

      // Add new garland if garland doesn't exists.
      if ($('#garland').length === 0) {
        $('body').prepend('<div id="garland-wrapper"><div id="garland"></div></div>');
      }

      // if core toolbar exists.
      if (Backdrop.settings.happy_new_year.garlandCoreToolbar) {
        if ($('#toolbar').length > 0) {
          var toolbarHeight = $('#toolbar').height();
          $('#garland').css('top', toolbarHeight + 'px');
        }
      }

      // if bootstrap navbar fixed exists.
      if (Backdrop.settings.happy_new_year.garlandBootstrapFixed) {
        if ($('.navbar-fixed-top').length > 0) {
          var navbarHeight = $('.navbar-fixed-top').height();
          var navbarTop = $('.navbar-fixed-top').position().top;
          $('#garland').css('top', navbarTop + navbarHeight + 'px');
        }
      }

      // if admin_menu exists.
      if (Backdrop.settings.happy_new_year.garlandAdminMenu) {
        setTimeout(function () {
          if ($('#admin-bar').length > 0) {
            var adminMenuHeight = $('#admin-bar').height();
            $('#garland').css('top', adminMenuHeight + 'px');
            $('#garland').css('zIndex', '998');
          }
        }, 500);
      }

      // Custom margin.
      if (Backdrop.settings.happy_new_year.garlandCustomMargin) {
        var top = Backdrop.settings.happy_new_year.garlandCustomMarginText;
        if (top > 0) {
          $('#garland').css('top', top + 'px');
        }
      }

      setInterval(function () {
        garland();
      }, 500);

    }
  };

})(jQuery);
