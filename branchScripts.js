$('#library_info > .row').append('<div class="col-lg-6" id="events"><div class="newsitem"><div class="newsbody" id="eventsBlock"></div></div></div>');
$("#library_info").prepend("<div id='topRow' class='row'></div>");
$("#topRow").prepend("<h1 style='text-align:center;' class='col-md-6'>Upcoming Events at Your Library</h1>");
$("#library_info > .row > .col-lg-8").removeClass('col-lg-8').addClass('col-lg-4');
$("<div class='col-md-1'></div>").insertBefore(".col-lg-4");
$("<div class='col-md-1'></div>").insertBefore(".col-md-6");
$("#library_info > h1").addClass("col-md-4");
$("#library_info > h1").css("text-align", "center");
$("#library_info > h1").insertBefore("#topRow > h1");
$(".library_description").css("display", "grid");
$(".library_description").prepend($("#desGrid2"));
$(".library_description").prepend($("#desGrid1"));
