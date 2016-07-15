/* Clock Function */

function updateClock(){
	var time = new Date();
	var h = time.getHours();
	var am = "";

	if (h > 12) {
	    h -= 12;
	    am = "PM"
	} else if (h === 0) {
	  h = 12;
	  am = "AM"
	}
	else {
		am = "AM"
	}
	var m = time.getMinutes();
	if (m < 10){ m = "0" + m;  }

	$("#time").text(h + ":" + m + am);

	setTimeout(updateClock, 1000);
}


updateClock();

/*hover Function */

$("#categories h3").mouseover(function(){
	$(this).css("background-color", "white");
});

$("#categories h3").mouseout(function(){
	$(this).css("background-color", "");
});

/* Menu Fancy Fancy */
var string = "";

$(function(){
      $("#hello").typed({
        strings: ["Hello Connor."],
        typeSpeed: 100
      });
  });

$('#categories h3').click(function(){
	string = this.id;
	$("#categories").fadeOut();
	$('#back').fadeIn();
	$("#hello").typed({
        strings: [string + "."],
        typeSpeed: 100
      });
	$("#" + string + '-categories').fadeIn();
})

$('#back').click(function(){
	$('#categories').fadeIn();
	$('#back').fadeOut();
	$("#" + string + '-categories').fadeOut();

})