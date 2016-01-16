var collision = function($div1, $div2) {
	var x1 = $div1.offset().left;
	var y1 = $div1.offset().top;
	var h1 = $div1.outerHeight(true);
	var w1 = $div1.outerWidth(true);
	var b1 = y1 + h1;
	var r1 = x1 + w1;
	var x2 = $div2.offset().left;
	var y2 = $div2.offset().top;
	var h2 = $div2.outerHeight(true);
	var w2 = $div2.outerWidth(true);
	var b2 = y2 + h2;
	var r2 = x2 + w2;
	
	if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	return true;
}



var main = function(){

	var fromTop = Math.floor(Math.random()* 230 ).toString();
	var fromLeft = Math.floor(Math.random()* ($('body').width()-130)).toString();
	$('.key-container').css({'top': fromTop+'px'});
	$('.key-container').css({'left': fromLeft+'px'});

	fromLeft = ($('body').width()/2);

	$('.center-line').css({'left': fromLeft + 'px'});
	$('.center-line').css('display', 'block')

	fromLeft-=50;
	$('.key-hole-container').css({'left': fromLeft+'px'});
	$('.key-hole-container').css('display', 'block');

	$('.unlock-button').css({'left': fromLeft+'px'});
	$('#background').css({'left': fromLeft+'px'});

	$('.unlock-button').css('display', 'block');
	$('#background').css('display', 'block');

	$('.key-container').draggable();

	var $keyHoleContainer = $('.key-hole-container');
	var $keyContainer = $('.key-container');
	var $button = $('.unlock-button');
	var interval = window.setInterval(function() {
		if (collision($keyHoleContainer, $keyContainer)){
			$button.removeClass('disabled');
			$button.removeAttr('disabled');

			//$button.show(2000);
		}
		else {
			$button.addClass('disabled');
			$button.attr('disabled', 'disabled');

		}
	}, 200);


	$('.unlock-button').click(function(){
			clearInterval(interval);
			$(this).slideUp(200);
			$('.key-container').slideUp(200);
			$('.key-hole-container').slideUp(200, function(){

				$('.center-line').fadeOut(200);
				$('#background').fadeOut(10);

				$('.wall-left').animate({width: 0}, 1500, function(){
					$('.wall-left').css('display', 'none');
				});
				var width = $('.wall-right').width()*-1;
				$('.wall-right').animate({right: width}, 1500, function(){
					$('.wall-right').css('display', 'none');
				});

			});
		
	});
	fromTop = ($(document).height()/2) - 40;
	$('.content-container').css('top', fromTop+'px');
}





$(document).ready(main);