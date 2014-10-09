var last = 'o'
var playing = 'true'
var xwins = '0'
var owins = '0'

// ON CLICK
$('.col-md-4').click(function(){

	// ALTERNATE X AND O
	if (playing == 'true'){ 
		if($(this).html() != 'x' && $(this).html() != 'o'){
			if(last == 'o'){
				$(this).html('x');
				last = 'x';
			}

			else {
				$(this).html('o');
				last = 'o';
			}
		}

	// END ALTERNATE X AND O


	// CHECK FOR WINNER
	// TOP
	if (($('#1').html() == 'x' && $('#2').html() == 'x' && $('#3').html() == 'x')) {
		$('#1').css('background', 'yellow');
		$('#2').css('background', 'yellow');
		$('#3').css('background', 'yellow');
		playing = 'false';
		xwins++;
		$('#xwins').html('x: ' + xwins);
	}
	else if (($('#1').html() == 'o' && $('#2').html() == 'o' && $('#3').html() == 'o')) {
		$('#1').css('background', 'yellow');
		$('#2').css('background', 'yellow');
		$('#3').css('background', 'yellow');
		playing = 'false';
		owins++;
		$('#owins').html('o: ' + owins);
	}
	// END TOP

	// MIDDLE
	if (($('#4').html() == 'x' && $('#5').html() == 'x' && $('#6').html() == 'x')) {
		$('#4').css('background', 'yellow');
		$('#5').css('background', 'yellow');
		$('#6').css('background', 'yellow');
		playing = 'false';
		xwins++;
		$('#xwins').html('x: ' + xwins);
	}
	if (($('#4').html() == 'o' && $('#5').html() == 'o' && $('#6').html() == 'o')) {
		$('#4').css('background', 'yellow');
		$('#5').css('background', 'yellow');
		$('#6').css('background', 'yellow');
		playing = 'false';
		owins++;
		$('#owins').html('o: ' + owins);
	}
	// END MIDDLE

	// BOTTOM
	if (($('#7').html() == 'x' && $('#8').html() == 'x' && $('#9').html() == 'x')) {
		$('#7').css('background', 'yellow');
		$('#8').css('background', 'yellow');
		$('#9').css('background', 'yellow');
		playing = 'false';
		xwins++;
		$('#xwins').html('x: ' + xwins);
	}
	if (($('#7').html() == 'o' && $('#8').html() == 'o' && $('#9').html() == 'o')) {
		$('#7').css('background', 'yellow');
		$('#8').css('background', 'yellow');
		$('#9').css('background', 'yellow');
		playing = 'false';
		owins++;
		$('#owins').html('o: ' + owins);
	}
	// END BOTTOM

	// LEFT
	if (($('#1').html() == 'x' && $('#4').html() == 'x' && $('#7').html() == 'x')) {
		$('#1').css('background', 'yellow');
		$('#4').css('background', 'yellow');
		$('#7').css('background', 'yellow');
		playing = 'false';
		xwins++;
		$('#xwins').html('x: ' + xwins);
	}
	if (($('#1').html() == 'o' && $('#4').html() == 'o' && $('#7').html() == 'o')) {
		$('#1').css('background', 'yellow');
		$('#4').css('background', 'yellow');
		$('#7').css('background', 'yellow');
		playing = 'false';
		owins++;
		$('#owins').html('o: ' + owins);
	}
	// END LEFT

	// MIDDLE
	if (($('#2').html() == 'x' && $('#5').html() == 'x' && $('#8').html() == 'x')) {
		$('#2').css('background', 'yellow');
		$('#5').css('background', 'yellow');
		$('#8').css('background', 'yellow');
		playing = 'false';
		xwins++;
		$('#xwins').html('x: ' + xwins);
	}
	if (($('#2').html() == 'o' && $('#5').html() == 'o' && $('#8').html() == 'o')) {
		$('#2').css('background', 'yellow');
		$('#5').css('background', 'yellow');
		$('#8').css('background', 'yellow');
		playing = 'false';
		owins++;
		$('#owins').html('o: ' + owins);
	}
	// END MIDDLE

	// RIGHT
	if (($('#3').html() == 'x' && $('#6').html() == 'x' && $('#9').html() == 'x')) {
		$('#3').css('background', 'yellow');
		$('#6').css('background', 'yellow');
		$('#9').css('background', 'yellow');
		playing = 'false';
		xwins++;
		$('#xwins').html('x: ' + xwins);
	}
	if (($('#3').html() == 'o' && $('#6').html() == 'o' && $('#9').html() == 'o')) {
		$('#3').css('background', 'yellow');
		$('#6').css('background', 'yellow');
		$('#9').css('background', 'yellow');
		playing = 'false';
		owins++;
		$('#owins').html('o: ' + owins);
	}
	// END RIGHT

	// DOWN
	if (($('#1').html() == 'x' && $('#5').html() == 'x' && $('#9').html() == 'x')) {
		$('#1').css('background', 'yellow');
		$('#5').css('background', 'yellow');
		$('#9').css('background', 'yellow');
		playing = 'false';
		xwins++;
		$('#xwins').html('x: ' + xwins);
	}
	if (($('#1').html() == 'o' && $('#5').html() == 'o' && $('#9').html() == 'o')) {
		$('#1').css('background', 'yellow');
		$('#5').css('background', 'yellow');
		$('#9').css('background', 'yellow');
		playing = 'false';
		owins++;
		$('#owins').html('o: ' + owins);
	}
	// END DOWN

	// UP
	if (($('#7').html() == 'x' && $('#5').html() == 'x' && $('#3').html() == 'x')) {
		$('#7').css('background', 'yellow');
		$('#5').css('background', 'yellow');
		$('#3').css('background', 'yellow');
		playing = 'false';
		xwins++;
		$('#xwins').html('x: ' + xwins);
	}
	if (($('#7').html() == 'o' && $('#5').html() == 'o' && $('#3').html() == 'o')) {
		$('#7').css('background', 'yellow');
		$('#5').css('background', 'yellow');
		$('#3').css('background', 'yellow');
		playing = 'false';
		owins++;
		$('#owins').html('o: ' + owins);
	}
	// END UP
	// END CHECK FOR WINNER


	// COUNT WIN

	// END COUNT WIN


	// DISPLAY TURN
	if (last == 'x'){
		$('#turn').html('o\'s turn');
	}
	if (last == 'o'){
		$('#turn').html('x\'s turn');
	}
	// END DISPLAY TURN


	else {}
	}
})
// END ON CLICK


// NEW GAME
$('#newgame').click(function(){
	$('.col-md-4').html('&nbsp;');
	$('.col-md-4').css('background', '');
	playing = 'true';
})
// END NEW GAME