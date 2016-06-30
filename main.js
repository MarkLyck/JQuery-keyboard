var $textBox = $('.text');
var $keys = $('.key');
var $alphaKeys = $('.alpha');
var $fkeys = $('.func-key');
var $shiftKeys = $('.shift');

var $tilde = $('#tilde');
var $num1 = $('#num1');
var $num2 = $('#num2');
var $num3 = $('#num3');
var $num4 = $('#num4');
var $num5 = $('#num5');
var $num6 = $('#num6');
var $num7 = $('#num7');
var $num8 = $('#num8');
var $num9 = $('#num9');
var $num0 = $('#num0');
var $dash = $('#dash');
var $equals = $('#equals');

var $square1 = $('#square1');
var $square2 = $('#square2');
var $backslash = $('#backslash');

var $colon = $('#colon');
var $quote = $('#quote');

var $comma = $('#comma');
var $period = $('#period');
var $slash = $('#slash');

var shift = false;
var caps = false;
var firstLetter = true;

$textBox.on('keypress', function(e){
  e.preventDefault();
  $textBox.html($textBox.val() + e.key);
});

$textBox.on('keydown', function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    $textBox.html($textBox.html() + '&#9;');
  }
});

$keys.on('click', function(){
  var keypress = $(this).text();
  $textBox.html($textBox.val() + keypress);

  if (firstLetter === true && caps === false) {
    $alphaKeys.each(function(i, char){
      $(char).text($(char).text().toLowerCase());
    });
    firstLetter = false;
  }

  if (shift === true) {
    shiftToggle();
  }
});

$fkeys.on('click', function(){
  var $key = $(this).text();
  if($key === 'enter') {
    $textBox.val($textBox.val() + '\n');
  } else if ($key === 'shift') {
    shiftToggle();
  } else if ($key === 'caps lock') {
    capsToggle();
    $(this).toggleClass('selected');
  } else if ($key === 'tab') {
    console.log('TAB!');
    $textBox.html($textBox.html() + '&#9;'); // Can't make tabs in atom!?
  } else if ($key === 'space') {
    $textBox.html($textBox.html() + ' ');
  } else if ($key === 'delete') {
    $textBox.html($textBox.html().slice(0, -1));
  }
});

function capsToggle() {
  if (caps === false) {
    caps = true;
    $alphaKeys.each(function(i, char){
      $(char).text($(char).text().toUpperCase());
    });
  } else {
    caps = false;
    $alphaKeys.each(function(i, char){
      $(char).text($(char).text().toLowerCase());
    });
  }
}

function shiftToggle() {
  if (shift === false) {
    shift = true;
    $shiftKeys.toggleClass('selected');
    $alphaKeys.each(function(i, char){
      $(char).text($(char).text().toUpperCase());
    });
    $tilde.text('~');
    $num1.text('!');
    $num2.text('@');
    $num3.text('#');
    $num4.text('$');
    $num5.text('%');
    $num6.text('^');
    $num7.text('&');
    $num8.text('*');
    $num9.text('(');
    $num0.text(')');
    $dash.text('_');
    $equals.text('+');

    $square1.text('{');
    $square2.text('}');
    $backslash.text('|');

    $colon.text(':');
    $quote.text('"');

    $comma.text('<');
    $period.text('>');
    $slash.text('?');
  } else {
    shift = false;
    $shiftKeys.toggleClass('selected');
    $alphaKeys.each(function(i, char){
      $(char).text($(char).text().toLowerCase());
    });
    $tilde.text('`');
    $num1.text('1');
    $num2.text('2');
    $num3.text('3');
    $num4.text('4');
    $num5.text('5');
    $num6.text('6');
    $num7.text('7');
    $num8.text('8');
    $num9.text('9');
    $num0.text('0');
    $dash.text('-');
    $equals.text('=');

    $square1.text('[');
    $square2.text(']');
    $backslash.text('\\');

    $colon.text(';');
    $quote.text('\'');

    $comma.text(',');
    $period.text('.');
    $slash.text('/');
  }
}
