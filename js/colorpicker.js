(function ($) {

  'use strict';

  Backdrop.behaviors.colorPicker = {
    attach: function (context, settings) {

      $(document).ready(function () {
        $('#color-picker').farbtastic('#edit-happy-new-year-snowcolor');
      });

    }
  };

})(jQuery);
