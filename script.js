function addItem() {
  var e = $("#item").val();
  //Get the current date in miliseconds
  var date = new Date().getTime();
  $("ul").append(
    "<li style='opacity:0'>" +
      e +
      ` <button id=${date} >remove</button>` +
      "</li>"
  );
  $(`#${date}`).click(function () {
    $(this)
      .parent()
      .animate(
        {
          opacity: 0,
        },
        400,
        "swing",
        function () {
          $(this).remove();
        }
      );
  });
  $("#item").val("");
  $(`#${date}`).parent().animate({
    opacity: 1,
  });
}
function hideItem() {
  $("ul").hide();
}
function showItem() {
  $("ul").show();
}

$(document).ready(function () {
  // This function runs when the html finished loading
  $("#add").on("click", addItem);
  $("#hide").on("click", hideItem);
  $("#show").on("click", showItem);
  $("ul").sortable();
});
