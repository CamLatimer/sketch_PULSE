// goal:
// on hover, cirlce grows then shrinks, then grows, then shrinks, then...
  //select div and add even listener
  var pulseId;
$('#circle-p').mouseenter(function() {
  console.log('mouse entered <p>');
  pulseId = setInterval(pulse);
});
$('#circle-p').mouseout(function() {
  console.log('mouse left <p>')
  clearInterval(pulseId);
})
// to grow/shrink div on mouseenter,
//  if it's a certain size, grow div
//  if it's a certain size, shrink div
function grow() {
  $('#circle-p').animate({
    width: '200px',
    height: '200px',
    borderRadius: '100px',
  }, 100)
}
function shrink() {
  $('#circle-p').animate({
    width: '100px',
    height: '100px',
  }, 100)
}
function pulse() {
  grow();
  shrink();
}
