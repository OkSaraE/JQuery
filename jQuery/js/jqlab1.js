//exercise 1
$('#fdiv p:last').attr('id', 'sf');

$('#fdiv p:first').remove();

$('#fdiv').css("background-color", "grey");
$('#fdiv').css("color", "white");

//exercise 2
$('button').click(function(){
  $('#fdiv').append('<p id="tp">Hello User</p>');
});

//exercise 3
$('#4p').hide();

$('#sdiv').mouseenter(function(){
  $('#4p').show();
  $('#4p').append('<p> About to select a link ...</p>');
})

$('#sdiv').mouseleave(function(){
  $('#4p').hide();
  $('#4p').empty();
})