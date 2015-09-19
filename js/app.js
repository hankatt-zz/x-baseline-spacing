$(document).ready(function() {
  $(".segmented-tab").on('click', function() {
    seg_tab = $(this);

    if(!seg_tab.hasClass('active')) {
      sibling_tab = seg_tab.siblings('.segmented-tab');

      seg_tab.addClass('active');
      sibling_tab.removeClass('active');

      modal = $(".modal--example.visible");
      sibling_modal = modal.siblings('.modal--example');

      modal.removeClass('visible');
      sibling_modal.addClass('visible');
    }
  });
});
