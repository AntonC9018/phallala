var photosHidden = true;
$(document).ready(function() {
  $("button#car-button").click(() => {
    if (photosHidden) {
    $("#photos").fadeIn("slow");
    photosHidden = false;
  } else {
    $("#photos").hide();
    photosHidden = true;
  };
  });
});
