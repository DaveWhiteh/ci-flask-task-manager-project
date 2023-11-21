$(document).ready(function(){
    // Initialize mobile navbar
    $(".sidenav").sidenav({edge: "right"});
    // Initialize collapsible tasks
    $('.collapsible').collapsible();
    // Initialize tooltips
    $('.tooltipped').tooltip();
    // Initialize datepicker
    $('.datepicker').datepicker({
      format: "dd mmmm, yyyy",
      yearRange: 3,
      showClearBtn: true,
      i18n: {
        done: "Select"
      }
    });
  });
