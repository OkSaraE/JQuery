$('#advice').append('<p>Select your favorite colour among the colours.</p>');

$('#img1').attr('src', 'blue.jpg');
$('#img2').attr('src', 'red.jpg');
$('#img3').attr('src', 'yellow.jpg');

$('#sel').append('<p>Your favorite colours in order.</p>');

$('#img1').click(function(){
  $('#img1').hide();
  $('ul').append('<li>Blue</li>');
});

$('#img2').click(function(){
  $('#img2').hide();
  $('ul').append('<li>Red</li>');
});

$('#img3').click(function(){
  $('#img3').hide();
  $('ul').append('<li>Yellow</li>');
});