$(document).ready(function () {
  $(".sms_btn").on("click", function () {
    $(".sms_box").css({
      display: "block",
    });
  });
  $(".close").on("click", function () {
    $(".sms_box").css({
      display: "none",
    });
  });

  $('.btn').on('click',function(){
      $('.txt').html($('.form-control').val())
      $('input').val('')
  })
});
