
  var pulseId;
  var status = 0;
$('#circle-p').click(function() {
  if (status == 1) {
    clearInterval(pulseId);
  } else if (status == 0) {
    pulseId = setInterval(pulse);
  }
});

function grow() {
  $('#circle-p').animate({
    width: '200px',
    height: '200px',
    borderRadius: '100px',
  })
}
function shrink() {
  $('#circle-p').animate({
    width: '100px',
    height: '100px',
  })
}
function pulse() {
  grow();
  shrink();
  status = 1;
}
function stopPulse(id) {
  console.log('interval cleared');
  clearInterval(id);
  status = 0;
}
