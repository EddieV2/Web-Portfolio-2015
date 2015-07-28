// 1. Overlay
// 2. Image
// 3. Caption - Get child's alt attr and set as caption
// 4. Exit Overlay - on click

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');
var $captionLocation = $('#gallery a').children('p').text();


$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);

$("#gallery a").click(function(event) {
	event.preventDefault();
	var imageLocation = $(this).attr('href');
	captionLocation = $(this).children('p').text();

	$image.attr("src", imageLocation);



	$overlay.fadeIn(350);

	$caption.text(captionLocation);
});

$($overlay).click(function(event) {
	$($overlay).hide();
});