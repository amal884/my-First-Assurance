var $ = jQuery.noConflict();
$(document).ready(function () {
  $("form#contactajax").submit(function (e) {
    e.preventDefault();
    /*var csrf_token = $('meta[name="csrf-token"]').attr('content');*/
    var ctt_nom = $("input[name=nom]").val();
    var ctt_prenom = $("input[name=prenom]").val();
    var ctt_tel = $("input[name=tel]").val();
    var ctt_email = $("input[name=emailx]").val();
    var ctt_message = $("textarea[name=messagex]").val();
    /*var ctt_captcha = $('input[name=captcha]').val();*/
    $("button.btn.ajax[type=submit]").attr("disabled", "disabled");
    $.ajax({
      type: "POST",
      url: "/inc/ajaxer",
      data:
        "prenom=" +
        ctt_prenom +
        "&nom=" +
        ctt_nom +
        "&tel=" +
        ctt_tel +
        "&email=" +
        ctt_email +
        "&message=" +
        ctt_message,
      success: function (res) {
        if (res === "ok") {
          $("input[name=prenom]").val("");
          $("input[name=nom]").val("");
          $("input[name=tel]").val("");
          $("input[name=emailx]").val("");
          $("textarea[name=messagex]").val("");
          /*$('input[name=captcha]').val('');*/
          swal("Message envoyé", "Votre message est envoyé", "success");
          $("button.btn.ajax[type=submit]").removeAttr("disabled");
        } }
    });
  });
});
